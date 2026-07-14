// Cart management — persists in localStorage
(function () {
  const STORAGE_KEY = 'carbec_cart';
  const WHATSAPP_NUMBER = '18095777989';

  function load() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
    catch { return []; }
  }

  function save(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    render();
    updateBadge();
  }

  window.cartAPI = {
    items: load(),

    add(product, qty = 1) {
      const existing = this.items.find(i => String(i.id) === String(product.id));
      if (existing) {
        existing.qty += qty;
      } else {
        this.items.push({
          id: String(product.id),
          name: product.name,
          shortDescription: product.shortDescription || '',
          image: product.mainImage,
          qty,
        });
      }
      save(this.items);
      showCartPanel();
    },

    remove(id) {
      this.items = this.items.filter(i => i.id !== String(id));
      save(this.items);
    },

    setQty(id, qty) {
      const item = this.items.find(i => i.id === String(id));
      if (!item) return;
      if (qty <= 0) { this.remove(id); return; }
      item.qty = qty;
      save(this.items);
    },

    clear() {
      this.items = [];
      save(this.items);
    },

    total() {
      return this.items.reduce((s, i) => s + i.qty, 0);
    },

    sendWhatsApp() {
      if (!this.items.length) return;
      const lines = this.items.map(i =>
        `• ${i.name}${i.shortDescription ? ' — ' + i.shortDescription : ''} (Cant: ${i.qty})`
      );
      const msg = `Hola! Me comunico desde la página web de Carbec Import S.R.L. Quisiera hacer el siguiente pedido:\n\n${lines.join('\n')}\n\nQuedo a espera de confirmación. Gracias!`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    }
  };

  function updateBadge() {
    const badge = document.getElementById('cart-badge');
    const total = window.cartAPI.total();
    if (!badge) return;
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
  }

  function render() {
    const list = document.getElementById('cart-items-list');
    const empty = document.getElementById('cart-empty');
    const footer = document.getElementById('cart-footer');
    if (!list) return;

    const items = window.cartAPI.items;
    list.innerHTML = '';

    if (!items.length) {
      if (empty) empty.style.display = 'flex';
      if (footer) footer.style.display = 'none';
      return;
    }

    if (empty) empty.style.display = 'none';
    if (footer) footer.style.display = 'flex';

    const confirmBtn = document.getElementById('cart-confirm');
    if (confirmBtn) {
      confirmBtn.style.display = window.api?.isLoggedIn() ? 'flex' : 'none';
    }

    items.forEach(item => {
      const el = document.createElement('div');
      el.className = 'cart-item';
      el.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.style.display='none'">
        <div class="cart-item-info">
          <p class="cart-item-name">${item.name}</p>
          <p class="cart-item-desc">${item.shortDescription}</p>
          <div class="cart-item-qty">
            <button class="qty-btn" data-id="${item.id}" data-delta="-1">−</button>
            <span>${item.qty}</span>
            <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-id="${item.id}" title="Eliminar">✕</button>
      `;
      list.appendChild(el);
    });

    list.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const item = window.cartAPI.items.find(i => i.id === id);
        if (item) window.cartAPI.setQty(id, item.qty + Number(btn.dataset.delta));
      });
    });

    list.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => window.cartAPI.remove(btn.dataset.id));
    });
  }

  function injectCartPanel() {
    if (document.getElementById('cart-panel')) return;

    const overlay = document.createElement('div');
    overlay.id = 'cart-overlay';
    overlay.addEventListener('click', hideCartPanel);

    const panel = document.createElement('div');
    panel.id = 'cart-panel';
    panel.innerHTML = `
      <div class="cart-panel-header">
        <h2>Tu pedido</h2>
        <button id="cart-close" aria-label="Cerrar carrito">✕</button>
      </div>
      <div id="cart-empty" class="cart-empty">
        <svg width="48" height="48" fill="none" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="#94a3b8" stroke-width="1.5" stroke-linejoin="round"/><line x1="3" y1="6" x2="21" y2="6" stroke="#94a3b8" stroke-width="1.5"/><path d="M16 10a4 4 0 01-8 0" stroke="#94a3b8" stroke-width="1.5"/></svg>
        <p>Tu carrito está vacío</p>
        <small>Agrega productos del catálogo</small>
      </div>
      <div id="cart-items-list" class="cart-items-list"></div>
      <div id="cart-footer" class="cart-footer">
        <button id="cart-clear" class="btn-cart-clear">Vaciar carrito</button>
        <button id="cart-confirm" class="btn-primary" style="display:none;background:var(--color-primary);color:#fff;border:none;border-radius:10px;padding:.7rem 1rem;font-size:.93rem;font-weight:700;font-family:inherit;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:.4rem;">
          ✓ Confirmar pedido
        </button>
        <button id="cart-whatsapp" class="btn-whatsapp">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.551 4.1 1.513 5.824L.044 23.506a.5.5 0 00.613.613l5.682-1.469A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.935 0-3.758-.52-5.323-1.424l-.381-.222-3.95 1.021 1.021-3.95-.222-.381A9.967 9.967 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
          Enviar pedido por WhatsApp
        </button>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(panel);

    document.getElementById('cart-close').addEventListener('click', hideCartPanel);
    document.getElementById('cart-whatsapp').addEventListener('click', () => window.cartAPI.sendWhatsApp());
    document.getElementById('cart-clear').addEventListener('click', () => {
      if (confirm('¿Vaciar el carrito?')) window.cartAPI.clear();
    });

    // Botón "Confirmar pedido" (visible solo cuando hay sesión activa)
    const confirmBtn = document.getElementById('cart-confirm');
    if (confirmBtn) {
      confirmBtn.addEventListener('click', async () => {
        if (!window.api?.isLoggedIn()) { window.location.href = '/login.html'; return; }
        confirmBtn.disabled = true;
        confirmBtn.textContent = 'Procesando...';
        try {
          await window.api.createOrder({ items: window.cartAPI.items });
          window.cartAPI.clear();
          hideCartPanel();
          window.location.href = '/dashboard.html';
        } catch (err) {
          alert('Error al crear el pedido: ' + err.message);
          confirmBtn.disabled = false;
          confirmBtn.textContent = '✓ Confirmar pedido';
        }
      });
    }

    render();
    updateBadge();
  }

  function showCartPanel() {
    document.getElementById('cart-overlay')?.classList.add('active');
    document.getElementById('cart-panel')?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function hideCartPanel() {
    document.getElementById('cart-overlay')?.classList.remove('active');
    document.getElementById('cart-panel')?.classList.remove('active');
    document.body.style.overflow = '';
  }

  window.showCartPanel = showCartPanel;
  window.hideCartPanel = hideCartPanel;

  document.addEventListener('DOMContentLoaded', () => {
    injectCartPanel();
    const cartBtn = document.getElementById('cart-nav-btn');
    if (cartBtn) cartBtn.addEventListener('click', showCartPanel);
  });
})();
