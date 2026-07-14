// Cliente API — Carbec Import S.R.L
// Cambiar API_BASE a la URL de producción cuando se suba al hosting
const API_BASE = 'http://localhost:3001/api';

// Raíz del sitio — funciona con file:// y con servidor
const _SITE_ROOT = (() => {
  const href = window.location.href;
  const idx  = window.location.pathname.match(/\/admin\//)
    ? href.indexOf('/admin/')
    : href.lastIndexOf('/');
  return href.substring(0, idx) + '/';
})();
function _url(path) { return _SITE_ROOT + path.replace(/^\//, ''); }

const api = {
  getToken()  { return localStorage.getItem('carbec_token'); },
  getUser()   { try { return JSON.parse(localStorage.getItem('carbec_user')); } catch { return null; } },
  isLoggedIn(){ return !!this.getToken(); },
  isAdmin()   { return this.getUser()?.is_admin === true; },

  setAuth(token, user) {
    localStorage.setItem('carbec_token', token);
    localStorage.setItem('carbec_user', JSON.stringify(user));
  },

  clearAuth() {
    localStorage.removeItem('carbec_token');
    localStorage.removeItem('carbec_user');
  },

  logout() {
    this.clearAuth();
    window.location.href = _url('/login.html');
  },

  async request(path, options = {}) {
    const token = this.getToken();
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {})
    };

    let response;
    try {
      response = await fetch(`${API_BASE}${path}`, { ...options, headers });
    } catch {
      throw new Error('No se pudo conectar con el servidor. Verifica tu conexión.');
    }

    if (response.status === 401) {
      this.clearAuth();
      window.location.href = _url('/login.html') + '?session=expired';
      return;
    }

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Error en la solicitud');
    return data;
  },

  // ── Auth ─────────────────────────────────────────────────
  async register(payload) {
    const data = await this.request('/auth/register', { method: 'POST', body: JSON.stringify(payload) });
    this.setAuth(data.token, data.user);
    return data;
  },

  async login(email, password) {
    const data = await this.request('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
    this.setAuth(data.token, data.user);
    return data;
  },

  async getProfile()       { return this.request('/auth/profile'); },
  async updateProfile(payload) {
    return this.request('/auth/profile', { method: 'PUT', body: JSON.stringify(payload) });
  },

  // ── Pedidos ───────────────────────────────────────────────
  async createOrder(payload) {
    return this.request('/orders', { method: 'POST', body: JSON.stringify(payload) });
  },
  async getOrders()        { return this.request('/orders'); },
  async getOrder(id)       { return this.request(`/orders/${id}`); },

  // ── Tickets ───────────────────────────────────────────────
  async createTicket(payload) {
    return this.request('/tickets', { method: 'POST', body: JSON.stringify(payload) });
  },
  async getTickets()       { return this.request('/tickets'); },
  async addComment(ticketId, comment) {
    return this.request(`/tickets/${ticketId}/comment`, { method: 'POST', body: JSON.stringify({ comment }) });
  },

  // ── Admin ─────────────────────────────────────────────────
  async adminStats()       { return this.request('/admin/stats'); },
  async adminOrders(p={})  {
    const qs = new URLSearchParams(p).toString();
    return this.request(`/admin/orders${qs ? '?' + qs : ''}`);
  },
  async adminSetOrderStatus(id, status, notes) {
    return this.request(`/admin/orders/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status, notes }) });
  },
  async adminCustomers()   { return this.request('/admin/customers'); },
  async adminTickets()     { return this.request('/admin/tickets'); },
  async adminUpdateTicket(id, payload) {
    return this.request(`/admin/tickets/${id}`, { method: 'PATCH', body: JSON.stringify(payload) });
  },
  async adminCommentTicket(id, comment) {
    return this.request(`/admin/tickets/${id}/comment`, { method: 'POST', body: JSON.stringify({ comment }) });
  },
  async adminActivity()    { return this.request('/admin/activity'); },
  async adminEmployees()   { return this.request('/admin/employees'); },
  async adminCreateEmployee(payload) {
    return this.request('/admin/employees', { method: 'POST', body: JSON.stringify(payload) });
  },
  async adminToggleEmployee(id, is_active) {
    return this.request(`/admin/employees/${id}`, { method: 'PATCH', body: JSON.stringify({ is_active }) });
  }
};

window.api = api;

// ── Inyectar estado de auth en el nav de cualquier página ────
(function syncNavAuth() {
  document.addEventListener('DOMContentLoaded', () => {
    const user = api.getUser();
    const cartBtn = document.getElementById('cart-nav-btn');

    // Insertar botones de sesión después del cart button
    const nav = document.querySelector('.nav');
    if (!nav) return;

    const existing = nav.querySelector('#auth-nav');
    if (existing) existing.remove();

    const authEl = document.createElement('div');
    authEl.id = 'auth-nav';
    authEl.style.cssText = 'display:flex;align-items:center;gap:.35rem;margin-left:.25rem;';

    if (user) {
      authEl.innerHTML = `
        <a href="${_url('/dashboard.html')}" style="font-size:.85rem;font-weight:600;color:var(--color-primary-dark);text-decoration:none;padding:.35rem .7rem;border-radius:999px;transition:background .2s;" onmouseover="this.style.background='var(--color-primary-light)'" onmouseout="this.style.background='transparent'">
          👤 ${user.full_name?.split(' ')[0] || 'Mi cuenta'}
        </a>
        ${user.is_admin ? `<a href="${_url('/admin/index.html')}" style="font-size:.82rem;font-weight:600;color:var(--color-accent);text-decoration:none;padding:.3rem .65rem;border-radius:999px;border:1.5px solid var(--color-accent);">Admin</a>` : ''}
        <button onclick="window.api.logout()" style="background:none;border:1.5px solid var(--color-border);border-radius:999px;padding:.3rem .65rem;font-size:.82rem;cursor:pointer;color:var(--color-muted);font-family:inherit;">Salir</button>
      `;
    } else {
      authEl.innerHTML = `
        <a href="${_url('/login.html')}" style="font-size:.88rem;font-weight:600;color:var(--color-primary-dark);text-decoration:none;padding:.35rem .75rem;border-radius:999px;border:1.5px solid var(--color-border);transition:background .2s;" onmouseover="this.style.background='var(--color-primary-light)'" onmouseout="this.style.background='transparent'">Iniciar sesión</a>
      `;
    }

    nav.appendChild(authEl);
  });
})();
