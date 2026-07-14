//recordatorio: para agregar uno nuevo solo copio y pego uno de los objetos y lo edito.

const products = [
  {
    id: 1088,
    name: "TERMO DE CAFÉ",
    shortDescription: "Vaccum Flash 450ml 48/1",
    longDescription:
      "Termo de café de acero inoxidable con aislamiento al vacío, mantiene las bebidas calientes o frías por horas. Capacidad de 450ml, ideal para llevar tu café o té favorito a cualquier lugar.",
    mainImage: "img/products/catalogo_carbec (1).png",
    gallery: ["img/products/catalogo_carbec (2).png",
            "img/products/catalogo_carbec (3).png",
            "img/products/catalogo_carbec (4).png"
    ],
    category: "Hogar y Cocina",
  },
  {
    id: 2644-2,
    name: "TERMO DE CAFÉ",
    shortDescription: "Poker 1000ml",
    longDescription:
      "Termo de café de acero inoxidable con aislamiento al vacío, mantiene las bebidas calientes o frías por horas. Capacidad de 1000ml, ideal para llevar tu café o té favorito a cualquier lugar.",
    mainImage: "img/products/catalogo_carbec (5).png",
    gallery: ["img/products/catalogo_carbec (6).png",
            "img/products/catalogo_carbec (7).png",
            "img/products/catalogo_carbec (8).png"
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'SC-304',
    name: "TERMO BOMBA CAFÉ",
    shortDescription: "termo bomba 3.0L",
    longDescription:
      "Termo de café de acero inoxidable con aislamiento al vacío, mantiene las bebidas calientes o frías por horas. Capacidad de 3.0L, ideal para llevar tu café o té favorito a cualquier lugar.",
    mainImage: "img/products/catalogo_carbec (10).png",
    gallery: ["img/products/catalogo_carbec (9).png",
            "img/products/catalogo_carbec (11).png",
            "img/products/catalogo_carbec (12).png"
    ],
    category: "Hogar y Cocina",
  },

  {
    id: '8831-3l',
    name: "TERMO DE CAFÉ",
    shortDescription: "TERMO DE CAFÉ 1.9L",
    longDescription:
      "Termo de café de acero inoxidable con aislamiento al vacío, mantiene las bebidas calientes o frías por horas. Capacidad de 1.9L, ideal para llevar tu café o té favorito a cualquier lugar.",
    mainImage: "img/products/catalogo_carbec (14).png",
    gallery: ["img/products/catalogo_carbec (13).png",
            "img/products/catalogo_carbec (15).png",
            "img/products/catalogo_carbec (16).png"
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'SC-304',
    name: "TERMOS",
    shortDescription: "TERMO DE 750ML",
    longDescription:
      "Termo de café de acero inoxidable con aislamiento al vacío, mantiene las bebidas calientes o frías por horas. Capacidad de 750ML, ideal para llevar tu café o té favorito a cualquier lugar.",
    mainImage: "img/products/catalogo_carbec (18).png",
    gallery: ["img/products/catalogo_carbec (19).png",
            "img/products/catalogo_carbec (20).png",
            "img/products/catalogo_carbec (21).png"
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'A-03',
    name: "GRECA ALUM. 3",
    shortDescription: "GRECA ALUM. 3 CRUBEC",
    longDescription:
      "Greca de aluminio, ideal para preparar café espresso al estilo tradicional. Fabricada con materiales de alta calidad para una durabilidad y rendimiento óptimos.",
    mainImage: "img/products/catalogo_carbec (23).png",
    gallery: ["img/products/catalogo_carbec (22).png",
            "img/products/catalogo_carbec (24).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'A-06',
    name: "GRECA ALUM. 6",
    shortDescription: "GRECA ALUM. 6 CRUBEC",
    longDescription:
      "Greca de aluminio, ideal para preparar café espresso al estilo tradicional. Fabricada con materiales de alta calidad para una durabilidad y rendimiento óptimos.",
    mainImage: "img/products/catalogo_carbec (27).png",
    gallery: ["img/products/catalogo_carbec (26).png",
            "img/products/catalogo_carbec (28).png",
            "img/products/catalogo_carbec (29).png",
            "img/products/catalogo_carbec (26).png",
            "img/products/catalogo_carbec (25).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'A-09',
    name: "GRECA ALUM. 9",
    shortDescription: "GRECA ALUM. 9 CRUBEC",
    longDescription:
      "Greca de aluminio, ideal para preparar café espresso al estilo tradicional. Fabricada con materiales de alta calidad para una durabilidad y rendimiento óptimos.",
    mainImage: "img/products/catalogo_carbec (31).png",
    gallery: ["img/products/catalogo_carbec (30).png",
            "img/products/catalogo_carbec (32).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'S-06, S-09, S-12',
    name: "GRECA ACERO INOX",
    shortDescription: "GRECA ACERO INOX DE 6 TAZAS, 9 TAZAS Y 12 TAZAS",
    longDescription:
      "Greca de acero inoxidable, ideal para preparar café espresso al estilo tradicional. Fabricada con materiales de alta calidad para una durabilidad y rendimiento óptimos.",
    mainImage: "img/products/catalogo_carbec (33).png",
    gallery: ["img/products/catalogo_carbec (34).png",
            "img/products/catalogo_carbec (35).png",
            "img/products/catalogo_carbec (36).png",
            "img/products/catalogo_carbec (37).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 157433,
    name: "ENCENDEDOR DE ESTUFA",
    shortDescription: "MIX COLORS",
    longDescription:
      "Encendedor de estufa de alta calidad, diseñado para encender estufas de gas de manera segura y eficiente. Cuenta con un diseño ergonómico y materiales duraderos para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (38).png",
    gallery: ["img/products/catalogo_carbec (39).png",
            "img/products/catalogo_carbec (40).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 16612,
    name: "SET DE VASOS",
    shortDescription: "7x13.5cm 12/6pcs",
    longDescription:
      "Set de vasos de vidrio transparente, ideal para servir bebidas frías o calientes.",
    mainImage: "img/products/catalogo_carbec (41).png",
    gallery: ["img/products/catalogo_carbec (42).png",
            "img/products/catalogo_carbec (43).png",
            "img/products/catalogo_carbec (44).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 16616,
    name: "SET DE VASOS",
    shortDescription: "7x13.5cm 6pcs",
    longDescription:
      "Set de vasos de vidrio transparente, ideal para servir bebidas frías o calientes.",
    mainImage: "img/products/catalogo_carbec (45).png",
    gallery: ["img/products/catalogo_carbec (46).png",
            "img/products/catalogo_carbec (47).png",
            "img/products/catalogo_carbec (48).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 16812,
    name: "SET DE VASOS",
    shortDescription: "7x13.5cm 12/6pcs",
    longDescription:
      "Set de vasos de vidrio transparente, ideal para servir bebidas frías o calientes.",
    mainImage: "img/products/catalogo_carbec (49).png",
    gallery: ["img/products/catalogo_carbec (50).png",
            "img/products/catalogo_carbec (51).png",
            "img/products/catalogo_carbec (52).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 16816,
    name: "SET DE VASOS",
    shortDescription: "7x13.5cm 6pcs",
    longDescription:
      "Set de vasos de vidrio transparente, ideal para servir bebidas frías o calientes.",
    mainImage: "img/products/catalogo_carbec (53).png",
    gallery: ["img/products/catalogo_carbec (54).png",
            "img/products/catalogo_carbec (55).png",
            "img/products/catalogo_carbec (56).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: '28CL',
    name: "SET DE VASOS",
    shortDescription: "12/6PCS 260ML 11.6x7.2x5.7CM",
    longDescription:
      "Set de vasos de vidrio transparente, ideal para servir bebidas frías o calientes.",
    mainImage: "img/products/catalogo_carbec (57).png",
    gallery: ["img/products/catalogo_carbec (58).png",
            "img/products/catalogo_carbec (59).png",
            "img/products/catalogo_carbec (60).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: '408E',
    name: "GUALLO #8",
    shortDescription: "Guallo #8",
    longDescription:
      "Guallo de alta calidad, ideal para diversas aplicaciones en el hogar y la industria. Fabricado con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (61).png",
    gallery: ["img/products/catalogo_carbec (62).png",
            "img/products/catalogo_carbec (63).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: '409E',
    name: "GUALLO #9",
    shortDescription: "Guallo #9",
    longDescription:
      "Guallo de alta calidad, ideal para diversas aplicaciones en el hogar y la industria. Fabricado con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (66).png",
    gallery: ["img/products/catalogo_carbec (64).png",
            "img/products/catalogo_carbec (65).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 555,
    name: "JUEGO DE OLLA 12 SET",
    shortDescription: "5 PCS 16CM-18CM-20CM-22CM-24CM",
    longDescription:
      "Juego de ollas de alta calidad, ideal para cocinar una variedad de platos en la cocina. Incluye 5 piezas de diferentes tamaños para adaptarse a todas tus necesidades culinarias.",
    mainImage: "img/products/catalogo_carbec (67).png",
    gallery: ["img/products/catalogo_carbec (68).png",
            "img/products/catalogo_carbec (69).png",
            "img/products/catalogo_carbec (70).png",
            "img/products/catalogo_carbec (71).png",
            "img/products/catalogo_carbec (72).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'AR-210',
    name: "DESTAPADOR DE VINO",
    shortDescription: "DESTAPADOR DE VINO 150/1",
    longDescription:
      "Destapador de vino de alta calidad, diseñado para abrir botellas de vino de manera fácil y eficiente. Cuenta con un diseño ergonómico y materiales duraderos para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (73).png",
    gallery: ["img/products/catalogo_carbec (74).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'BO-001',
    name: "DESTAPADOR DE BOTELLA",
    shortDescription: "DESTAPADOR DE BOTELLA 1200/1",
    longDescription:
      "Destapador de botella de alta calidad, diseñado para abrir botellas de manera fácil y eficiente. Cuenta con un diseño ergonómico y materiales duraderos para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (75).png",
    gallery: ["img/products/catalogo_carbec (76).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'BO-207',
    name: "DESTAPADOR DE BOTELLA",
    shortDescription: "240/1",
    longDescription:
      "Destapador de botella de alta calidad, diseñado para abrir botellas de manera fácil y eficiente. Cuenta con un diseño ergonómico y materiales duraderos para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (77).png",
    gallery: ["img/products/catalogo_carbec (78).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'BPS2002',
    name: "SET DE VAJILLA",
    shortDescription: "20PCS 2/1 10.5 plato 7.5 plato",
    longDescription:
      "Set de vajilla de alta calidad, ideal para servir comidas en el hogar. Incluye 20 piezas, incluyendo platos y tazones, fabricados con materiales duraderos y elegantes.",
    mainImage: "img/products/catalogo_carbec (79).png",
    gallery: ["img/products/catalogo_carbec (81).png",
        "img/products/catalogo_carbec (82).png",
        "img/products/catalogo_carbec (83).png",
        "img/products/catalogo_carbec (84).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 750,
    name: "CORTADOR DE VEGETALES",
    shortDescription: "CORTADOR DE VEGETALES",
    longDescription:
      "Cortador de vegetales de alta calidad, ideal para cortar y preparar verduras de manera rápida y eficiente. Cuenta con cuchillas afiladas y un diseño ergonómico para un uso cómodo.",
    mainImage: "img/products/catalogo_carbec (85).png",
    gallery: ["img/products/catalogo_carbec (86).png",
        "img/products/catalogo_carbec (87).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'FR-26',
    name: "FREGABEN - STEEL WOOL",
    shortDescription: "12 UNDS",
    longDescription:
      "Fregaben de acero inoxidable, ideal para limpiar utensilios de cocina y superficies difíciles. Cada paquete contiene 12 unidades para su conveniencia.",
    mainImage: "img/products/catalogo_carbec (88).png",
    gallery: [
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'JW-03',
    name: "ESTANTE DE COCINA",
    shortDescription: "30 UNDS",
    longDescription:
      "Estante de cocina de alta calidad, ideal para organizar utensilios y accesorios en la cocina. Fabricado con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (90).png",
    gallery: ["img/products/catalogo_carbec (89).png",],
    category: "Hogar y Cocina",
  },

  {
    id: 'JW-02',
    name: "ESTANTE DE COCINA",
    shortDescription: "30 UNDS",
    longDescription:
      "Estante de cocina de alta calidad, ideal para organizar utensilios y accesorios en la cocina. Fabricado con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (91).png",
    gallery: [],
    category: "Hogar y Cocina",
  },
 
  {
    id: 'JW-03',
    name: "ESTANTE DE COCINA",
    shortDescription: "30 UNDS",
    longDescription:
      "Estante de cocina de alta calidad, ideal para organizar utensilios y accesorios en la cocina. Fabricado con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (92).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

   {
    id: 'CD4-1',
    name: "CUCHILLO M/PLAST",
    shortDescription: "#4 144/6PCS",
    longDescription:
      "Cuchillo con mango de plástico, ideal para cortar una variedad de alimentos en la cocina. Fabricado con acero inoxidable de alta calidad para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (93).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'CD4-2',
    name: "CUCHILLO DE SIERRA",
    shortDescription: "#4 144/6PCS",
    longDescription:
      "Cuchillo de sierra con mango de plástico, ideal para cortar pan y otros alimentos con corteza dura. Fabricado con acero inoxidable de alta calidad para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (94).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'CD8-6',
    name: "CUCHILLO M/COLORES",
    shortDescription: "144/6PCS",
    longDescription:
      "Cuchillo con mango de colores, ideal para cortar una variedad de alimentos en la cocina. Fabricado con acero inoxidable de alta calidad para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (95).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'CDP10201',
    name: "BOMBA MANUAL P/BOTELLON",
    shortDescription: "48/1",
    longDescription:
      "Bomba manual para botellón, ideal para dispensar agua de manera fácil y eficiente. Fabricada con materiales duraderos para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (96).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'CF-185',
    name: "TENEDOR DE QUESO",
    shortDescription: "240/1",
    longDescription:
      "Tenedor de queso de alta calidad, ideal para servir y disfrutar de una variedad de quesos. Fabricado con acero inoxidable duradero para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (97).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'CG-263',
    name: "CUCHILLO DE QUESO",
    shortDescription: "240/1",
    longDescription:
      "Cuchillo de queso de alta calidad, ideal para cortar y servir una variedad de quesos. Fabricado con acero inoxidable duradero para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (98).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'PALA P/PIZZA',
    name: "PALA P/PIZZA",
    shortDescription: "240/1",
    longDescription:
      "Pala para pizza de alta calidad, ideal para servir y disfrutar de pizzas recién horneadas. Fabricada con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (99).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'CG215',
    name: "COLADOR DE RED",
    shortDescription: "240/1",
    longDescription:
      "Colador de red de alta calidad, ideal para colar líquidos y separar sólidos en la cocina. Fabricado con acero inoxidable duradero para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (100).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

   {
    id: 'CG212',
    name: "CUCHILLO DE PIZZA",
    shortDescription: "240/1",
    longDescription:
      "Cuchillo para cortar pizza de alta calidad.",
    mainImage: "img/products/catalogo_carbec (101).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'CHBS2601, CHBS2602',
    name: "PLATO CROMADO",
    shortDescription: "200/1 CHBS2601 22CM 65G, CÓD. CHBS2602 24CM 75G",
    longDescription:
      "Plato cromado de buen matiral y buena calidad de distintos tamaños.",
    mainImage: "img/products/catalogo_carbec (102).png",
    gallery: ["img/products/catalogo_carbec (103).png",],
    category: "Hogar y Cocina",
  },

  {
    id: 'CHBS2603, CHBS2604',
    name: "BOWL CROMADO",
    shortDescription: "240/1 CÓD. CHBS2603 14CM, CÓD. CHBS2604 15CM",
    longDescription:
      "Bowl cromado de buen matiral y buena calidad de distintos tamaños.",
    mainImage: "img/products/catalogo_carbec (105).png",
    gallery: ["img/products/catalogo_carbec (104).png",],
    category: "Hogar y Cocina",
  },

  {
    id: 'CHKS1706',
    name: "TENEDOR",
    shortDescription: "25G",
    longDescription:
      "Tenedor cromado de buen matiral y buena calidad.",
    mainImage: "img/products/catalogo_carbec (106).png",
    gallery: ["img/products/catalogo_carbec (107).png",],
    category: "Hogar y Cocina",
  },

  {
    id: 'CHT1708',
    name: "LIMA TRIANGULAR",
    shortDescription: "25G",
    longDescription:
      "Lima triangular cromada de buen matiral y buena calidad.",
    mainImage: "img/products/catalogo_carbec (108).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'CP909',
    name: "SET DE TAZAS DE CAFE",
    shortDescription: "90ML 24/12PCS",
    longDescription:
      "Set de tazas de café, ideal para servir café espresso o cappuccino. Cada set incluye 12 tazas con capacidad de 90ml, perfectas para cualquier ocasión.",
    mainImage: "img/products/catalogo_carbec (109).png",
    gallery: ["img/products/catalogo_carbec (110).png",
      "img/products/catalogo_carbec (111).png"
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'CR-L9, CR-L11, CR-L15, CR-26CM, CR-28CM, CR-30CM',
    name: "OLLA DE PRESION",
    shortDescription: "CÓD. CR-L9 CR-L11 CR-L15 CÓD. CR-26CM CR-28CM CR-30CM",
    longDescription:
      "Olla de presión de alta calidad, ideal para cocinar alimentos de manera rápida y eficiente. Disponible en varios tamaños para adaptarse a tus necesidades culinarias.",
    mainImage: "img/products/catalogo_carbec (112).png",
    gallery: ["img/products/catalogo_carbec (113).png",
      "img/products/catalogo_carbec (114).png"
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'CR-EGG',
    name: "REBANADOR DE HUEVO",
    shortDescription: "60/1",
    longDescription:
      "Rebanador de huevo de alta calidad, ideal para cortar huevos cocidos en rodajas uniformes. Fabricado con materiales duraderos para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (115).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'FR40-XL, FR40-L, FR40-M, FR40-S',
    name: "GUANTE AMARILLO XL, L, M, S",
    shortDescription: "Guante Amarillo de cocina",
    longDescription:
      "Guante amarillo de cocina de alta calidad, ideal para proteger tus manos. Fabricado con materiales resistentes, seguro y cómodo.",
    mainImage: "img/products/catalogo_carbec (116).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'CR-F323D',
    name: "BANDEJA ALUMINIO PEQ.",
    shortDescription: "BANDEJA ALUMINIO PEQ. 323X260X63MM",
    longDescription:
      "Bandeja de aluminio pequeña, ideal para hornear y servir alimentos. Fabricada con materiales de alta calidad para una durabilidad y rendimiento óptimos.",
    mainImage: "img/products/catalogo_carbec (117).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'CR-F367',
    name: "BANDEJA ALUMINIO LASAÑA",
    shortDescription: "BANDEJA ALUMINIO LASAÑA 367X272X73MM",
    longDescription:
      "Bandeja de aluminio para lasaña, ideal para hornear y servir este delicioso platillo. Fabricada con materiales de alta calidad para una durabilidad y rendimiento óptimos.",
    mainImage: "img/products/catalogo_carbec (118).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'CR-F460OV',
    name: "BANDEJA ALUMINIO OVALADA",
    shortDescription: "BANDEJA ALUMINIO OVALADA 460X360X80MM",
    longDescription:
      "Bandeja de aluminio ovalada, ideal para hornear y servir una variedad de platillos. Fabricada con materiales de alta calidad para una durabilidad y rendimiento óptimos.",
    mainImage: "img/products/catalogo_carbec (119).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'CR-F458',
    name: "BANDEJA ALUMINIO REC.",
    shortDescription: "BANDEJA ALUMINIO REC. 458X340X63MM",
    longDescription:
      "Bandeja de aluminio rectangular, ideal para hornear y servir una variedad de platillos. Fabricada con materiales de alta calidad para una durabilidad y rendimiento óptimos.",
    mainImage: "img/products/catalogo_carbec (120).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'CR-F525D',
    name: "BANDEJA ALUMINIO GRANDE",
    shortDescription: "BANDEJA ALUMINIO GRANDE 525X325X75MM",
    longDescription:
      "Bandeja de aluminio grande, ideal para hornear y servir una variedad de platillos. Fabricada con materiales de alta calidad para una durabilidad y rendimiento óptimos.",
    mainImage: "img/products/catalogo_carbec (121).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'CRM-4, CRM-5, CRM-6, CRM-7, CRM-8',
    name: "CUCHILLO MANGO DE MADERA",
    shortDescription: "CUCHILLO MANGO DE MADERA CRUBEC 4, 5, 6, 7, 8 PULGADAS",
    longDescription:
      "Cuchillo con mango de madera, ideal para cortar una variedad de alimentos en la cocina. Fabricado con acero inoxidable de alta calidad para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (122).png",
    gallery: ["img/products/catalogo_carbec (123).png",],
    category: "Hogar y Cocina",
  },

  {
    id: 'CRS-4',
    name: "CUCHILLO SIERRA",
    shortDescription: "CUCHILLO SIERRA CRUBEC 4 PULGADAS",
    longDescription:
      "Cuchillo de sierra, ideal para cortar pan y otros alimentos con corteza dura. Fabricado con acero de alta calidad para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (124).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'DP-6, DP-8, DP-10, DP-12',
    name: "PALITO HOT DOG",
    shortDescription: "PALITO DE HOT DOG CÓD. DP-6 #6, CÓD. DP-8 #8, CÓD. DP-10 #10, CÓD. DP-12 #12",
    longDescription:
      "Palito para hot dog de alta calidad, ideal para preparar y servir hot dogs de manera fácil y eficiente.",
    mainImage: "img/products/catalogo_carbec (125).png",
    gallery: ["img/products/catalogo_carbec (126).png",
      "img/products/catalogo_carbec (127).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'DS1616',
    name: "SETS DE VAJILLAS",
    shortDescription: "Sets de vajillas 16 PCS, 2/16 Platos, 10.5 Platos de sopa",
    longDescription:
      "Set de vajilla de alta calidad, ideal para servir comidas en el hogar. Incluye 16 piezas, incluyendo platos y tazones, fabricados con materiales duraderos y elegantes.",
    mainImage: "img/products/catalogo_carbec (128).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

{
    id: 'DT-6',
    name: "TAZA DE CAFÉ",
    shortDescription: "Taza de café 11.3X8.7CM",
    longDescription:
      "Taza de café de alta calidad, ideal para disfrutar de tu bebida favorita. Fabricada con materiales duraderos y un diseño elegante.",
    mainImage: "img/products/catalogo_carbec (129).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'ZY-DP10',
    name: "PARRILLADA",
    shortDescription: "PARRILLADA 47X27CM",
    longDescription:
      "Parrillada de alta calidad, ideal para cocinar una variedad de alimentos a la parrilla. Fabricada con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (130).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'FG-15',
    name: "BRILLO GORDO",
    shortDescription: "BRILLO GORDO FREGABEN",
    longDescription:
      "Brillo gordo Fregaben de alta calidad, ideal para limpiar y dar brillo a utensilios de cocina y superficies difíciles. Cada paquete contiene 15 unidades para su conveniencia.",
    mainImage: "img/products/catalogo_carbec (131).png",
    gallery: ["img/products/catalogo_carbec (132).png",
      "img/products/catalogo_carbec (133).png",
    ],
    category: "Hogar y Cocina",
  },

   {
    id: 'FI18354',
    name: "ENCENDEDOR DE CAZUELA",
    shortDescription: "Encendedor de cazuela CRUBEC",
    longDescription:
      "Encendedor de cazuela de alta calidad, diseñado para encender estufas de gas de manera segura y eficiente. Cuenta con un diseño ergonómico y materiales duraderos para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (133).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'FR-12',
    name: "BRILLO VERDE",
    shortDescription: "Brillo verde FREGABEN",
    longDescription:
      "Brillo verde Fregaben de alta calidad, ideal para limpiar y dar brillo a utensilios de cocina y superficies difíciles. Cada paquete contiene 12 unidades para su conveniencia.",
    mainImage: "img/products/catalogo_carbec (134).png",
    gallery: ["img/products/catalogo_carbec (135).png",
      "img/products/catalogo_carbec (136).png",
      "img/products/catalogo_carbec (137).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'G-21091',
    name: "POZUELOS PLASTICOS",
    shortDescription: "COLORES: VERDE, ROSADO & GRIS. DISEÑO: Margarita",
    longDescription:
      "Pozuelos plásticos de alta calidad, ideales para servir alimentos y snacks. Disponibles en colores verde, rosado y gris con un diseño de margarita.",
    mainImage: "img/products/catalogo_carbec (138).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'G001',
    name: "JUEGOS DE OLLAS",
    shortDescription: "Juego De Ollas 4 SETS/6 PCS, 16-18-20-22-24-24CM",
    longDescription:
      "Juego de ollas de alta calidad, ideal para cocinar una variedad de platos en la cocina. Incluye 6 piezas de diferentes tamaños para adaptarse a todas tus necesidades culinarias.",
    mainImage: "img/products/catalogo_carbec (139).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'G1078-6',
    name: "SET DE VASOS",
    shortDescription: "Set de vasos 12/6PCS 11X6.8CM 230ML",
    longDescription:
      "Set de vasos de vidrio transparente, ideal para servir bebidas frías o calientes.",
    mainImage: "img/products/catalogo_carbec (140).png",
    gallery: ["img/products/catalogo_carbec (141).png",
      "img/products/catalogo_carbec (142).png",
      "img/products/catalogo_carbec (143).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'G3057-130',
    name: "SET DE VASOS",
    shortDescription: "Set de vasos 7X13CM 305ML 6PCS",
    longDescription:
      "Set de vasos de vidrio transparente, ideal para servir bebidas frías o calientes.",
    mainImage: "img/products/catalogo_carbec (144).png",
    gallery: ["img/products/catalogo_carbec (145).png",
      "img/products/catalogo_carbec (146).png",
      "img/products/catalogo_carbec (147).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'GSC232',
    name: "SET DE JARRAS",
    shortDescription: "Set de jarras 7 PCS CRISTAL 6/7PCS",
    longDescription:
      "Set de jarras de vidrio transparente, ideal para servir bebidas frías o calientes.",
    mainImage: "img/products/catalogo_carbec (148).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

   {
    id: 'GCS265',
    name: "SET DE JARRAS",
    shortDescription: "Set de jarras 7 PCS DE CRISTAL",
    longDescription:
      "Set de jarras de vidrio transparente, ideal para servir bebidas frías o calientes.",
    mainImage: "img/products/catalogo_carbec (149).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'H-FS-009P-1',
    name: "CUCHILLO DE METAL 8",
    shortDescription: "Cuchillo de metal 20 CM 48/1",
    longDescription:
      "Cuchillo de metal de alta calidad, ideal para cortar una variedad de alimentos en la cocina. Fabricado con acero para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (150).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'HP182601',
    name: "JUEGO DE OLLA",
    shortDescription: "Juego de Olla 6 SETS/ 5PCS, 16-18-20-22-24-26CM",
    longDescription:
      "Juego de ollas de alta calidad, ideal para cocinar una variedad de platos en la cocina. Incluye 5 piezas de diferentes tamaños para adaptarse a todas tus necesidades culinarias.",
    mainImage: "img/products/catalogo_carbec (151).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'HPC182602',
    name: "JUEGO DE OLLA",
    shortDescription: "Juego de Olla 6 SETS/ 5PCS, 16-18-20-22-24-26CM",
    longDescription:
      "Juego de ollas de alta calidad, ideal para cocinar una variedad de platos en la cocina. Incluye 5 piezas de diferentes tamaños para adaptarse a todas tus necesidades culinarias.",
    mainImage: "img/products/catalogo_carbec (152).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'G001',
    name: "JUEGO DE OLLA",
    shortDescription: "Juego de Olla 8 SET/5 PCS, 16-18-20-22-24-24CM",
    longDescription:
      "Juego de ollas de alta calidad, ideal para cocinar una variedad de platos en la cocina. Incluye 5 piezas de diferentes tamaños para adaptarse a todas tus necesidades culinarias.",
    mainImage: "img/products/catalogo_carbec (153).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'HPSD1624',
    name: "JUEGO DE OLLA",
    shortDescription: "Juego de Olla 8 SET/5 PCS, 16-18-20-22-24-24CM",
    longDescription:
      "Juego de ollas de alta calidad, ideal para cocinar una variedad de platos en la cocina. Incluye 5 piezas de diferentes tamaños para adaptarse a todas tus necesidades culinarias.",
    mainImage: "img/products/catalogo_carbec (154).png",
    gallery: ["img/products/catalogo_carbec (155).png",
      "img/products/catalogo_carbec (156).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'HS-WJTS1601',
    name: "ESCURRIDO DE PLATOS",
    shortDescription: "Escurridor de platos 12/1 40X38X24CM",
    longDescription:
      "Escurridor de platos de alta calidad, ideal para organizar y secar platos y utensilios en la cocina. Fabricado con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (157).png",
    gallery: ["img/products/catalogo_carbec (158).png",
      "img/products/catalogo_carbec (159).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'JB-808',
    name: "SET DE BOWL DE CRISTAL",
    shortDescription: "Set de bowl de cristal 16 SETS / 5PCS",
    longDescription:
      "Set de bowls de cristal de alta calidad, ideal para servir y disfrutar de una variedad de alimentos. Incluye 5 piezas de diferentes tamaños para adaptarse a todas tus necesidades culinarias.",
    mainImage: "img/products/catalogo_carbec (160).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'PBW-06BW',
    name: "BOWL DE CERAMICA",
    shortDescription: "Bowl de cerámica",
    longDescription:
      "Bowl de cerámica de alta calidad, ideal para servir y disfrutar de una variedad de alimentos. Fabricado con materiales duraderos y un diseño elegante.",
    mainImage: "img/products/catalogo_carbec (163).png",
    gallery: ["img/products/catalogo_carbec (162).png",
      "img/products/catalogo_carbec (161).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'PFP-10',
    name: "PLATO DE PORCELANA",
    shortDescription: "Set de plato de porcelana",
    longDescription:
      "Plato de porcelana de alta calidad, ideal para servir y disfrutar de una variedad de alimentos. Fabricado con materiales duraderos y un diseño elegante.",
    mainImage: "img/products/catalogo_carbec (164).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'PP-58F',
    name: "PLATO FLORES LLANO",
    shortDescription: "Plato flores llano #8",
    longDescription:
      "Plato de porcelana con diseño de flores, ideal para servir y disfrutar de una variedad de alimentos. Fabricado con materiales duraderos y un diseño elegante.",
    mainImage: "img/products/catalogo_carbec (165).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'JC301',
    name: "CUCHARAS 25G",
    shortDescription: "Cucharas 25G, KZH 100/12",
    longDescription:
      "Cucharas de alta calidad, ideales para servir y disfrutar de una variedad de alimentos. Fabricadas con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (166).png",
    gallery: ["img/products/catalogo_carbec (167).png",
      "img/products/catalogo_carbec (168).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'JC302',
    name: "TENEDOR 25G",
    shortDescription: "Tenedor 25G, KZH 100/12",
    longDescription:
      "Tenedores de alta calidad, ideales para servir y disfrutar de una variedad de alimentos. Fabricados con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (169).png",
    gallery: ["img/products/catalogo_carbec (170).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'JC303',
    name: "CUCHILLO DE MESA 28G",
    shortDescription: "Cuchillo de mesa 28G, KZH 100/12",
    longDescription:
      "Cuchillos de mesa de alta calidad, ideales para servir y disfrutar de una variedad de alimentos. Fabricados con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (171).png",
    gallery: ["img/products/catalogo_carbec (172).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'RZ002',
    name: "CUCHARA",
    shortDescription: "Cuchara de acero",
    longDescription:
      "Cuchara de acero de alta calidad, ideal para servir y disfrutar de una variedad de alimentos. Fabricada con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (173).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'S1424',
    name: "TAZA DE CAFE",
    shortDescription: "Taza de café MIX COLORS 11X9.3CM",
    longDescription:
      "Taza de café de alta calidad, ideal para disfrutar de tu bebida favorita. Fabricada con materiales duraderos y un diseño elegante.",
    mainImage: "img/products/catalogo_carbec (174).png",
    gallery: ["img/products/catalogo_carbec (175).png",],
    category: "Hogar y Cocina",
  },

  {
    id: 'JJ61044',
    name: "TERMO DE PLASTICO DE CAFE",
    shortDescription: "Termo de plástico para café 450ML",
    longDescription:
      "Termo de plástico para café de alta calidad, ideal para mantener tu bebida caliente por más tiempo. Fabricado con materiales duraderos y un diseño elegante.",
    mainImage: "img/products/catalogo_carbec (176).png",
    gallery: ["img/products/catalogo_carbec (177).png",
      "img/products/catalogo_carbec (178).png",
      "img/products/catalogo_carbec (179).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'JJ61044',
    name: "TERMO DE PLASTICO DE CAFE",
    shortDescription: "Termo de plástico para café 1000ML",
    longDescription:
      "Termo de plástico para café de alta calidad, ideal para mantener tu bebida caliente por más tiempo. Fabricado con materiales duraderos y un diseño elegante.",
    mainImage: "img/products/catalogo_carbec (180).png",
    gallery: ["img/products/catalogo_carbec (181).png",
      "img/products/catalogo_carbec (182).png",
      "img/products/catalogo_carbec (183).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'JM-15',
    name: "MOLDE DE HIELO",
    shortDescription: "Molde de hielo *19*12*2.5CM",
    longDescription:
      "Molde de hielo de alta calidad, ideal para hacer cubos de hielo en casa. Fabricado con materiales duraderos y un diseño práctico para un uso fácil.",
    mainImage: "img/products/catalogo_carbec (184).png",
    gallery: ["img/products/catalogo_carbec (185).png",
      "img/products/catalogo_carbec (186).png",
      "img/products/catalogo_carbec (187).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'JM-36',
    name: "MOLDE DE HIELO",
    shortDescription: "Molde de hielo *19*12*2.5CM",
    longDescription:
      "Molde de hielo de alta calidad, ideal para hacer cubos de hielo en casa. Fabricado con materiales duraderos y un diseño práctico para un uso fácil.",
    mainImage: "img/products/catalogo_carbec (188).png",
    gallery: ["img/products/catalogo_carbec (189).png",
      "img/products/catalogo_carbec (190).png",
      "img/products/catalogo_carbec (191).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'JM30502',
    name: "TOALLA DE COCINA",
    shortDescription: "Toalla de cocina CRUBEC",
    longDescription:
      "Toalla de cocina de alta calidad, ideal para secar platos y utensilios en la cocina. Fabricada con materiales absorbentes y duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (192).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'JM30503',
    name: "TOALLA DE COCINA",
    shortDescription: "Toalla de cocina CRUBEC VARIOS COLORES",
    longDescription:
      "Toalla de cocina de alta calidad, ideal para secar platos y utensilios en la cocina. Fabricada con materiales absorbentes y duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (193).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'LPZ-15',
    name: "ESPONJA DOBLE USO",
    shortDescription: "Espuma doble uso 100/10PCS",
    longDescription:
      "Espuma doble uso de alta calidad, ideal para limpiar una variedad de superficies en el hogar. Cada paquete contiene 10 piezas para su conveniencia.",
    mainImage: "img/products/catalogo_carbec (194).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'LS21724',
    name: "EXPRIMIDOR DE LIMON",
    shortDescription: "Exprimidor de limón 240/1 (21X7CM)",
    longDescription:
      "Exprimidor de limón de alta calidad, ideal para extraer jugo de limones y otros cítricos de manera fácil y eficiente. Fabricado con materiales duraderos para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (195).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'LSL05',
    name: "RALLADOR MULTIFUNSION",
    shortDescription: "Rallador multifunción",
    longDescription:
      "Rallador multifunción de alta calidad, ideal para rallar una variedad de alimentos en la cocina. Cuenta con múltiples superficies de rallado para adaptarse a diferentes necesidades culinarias.",
    mainImage: "img/products/catalogo_carbec (196).png",
    gallery: [],
    category: "Hogar y Cocina",
  },
  
  {
    id: 'MX-19',
    name: "DESTAPADOR DE LATA",
    shortDescription: "Destapador de lata",
    longDescription:
      "Destapador de lata de alta calidad, ideal para abrir latas de manera fácil y segura. Fabricado con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (197).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'PA-10',
    name: "PALILLO DE DIENTE",
    shortDescription: "Palillo de diente",
    longDescription:
      "Palillo de diente de alta calidad, ideal para mantener la higiene bucal después de las comidas. Fabricado con materiales duraderos para un uso seguro.",
    mainImage: "img/products/catalogo_carbec (198).png",
    gallery: ["img/products/catalogo_carbec (199).png",
      "img/products/catalogo_carbec (200).png",
    ],
    category: "Hogar y Cocina",
  },

   {
    id: 'PHG1615',
    name: "GUANTE COCINA",
    shortDescription: "Guante de cocina 24.5X14.5CM",
    longDescription:
      "Guante de cocina de alta calidad, ideal para proteger tus manos mientras cocinas. Fabricado con materiales resistentes al calor para un uso seguro y cómodo.",
    mainImage: "img/products/catalogo_carbec (201).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'PHG1623',
    name: "GUANTE COCINA",
    shortDescription: "Guante de cocina 16X16CM",
    longDescription:
      "Guante de cocina de alta calidad, ideal para proteger tus manos mientras cocinas. Fabricado con materiales resistentes al calor para un uso seguro y cómodo.",
    mainImage: "img/products/catalogo_carbec (201).png",
    gallery: ["img/products/catalogo_carbec (202).png",
      "img/products/catalogo_carbec (203).png",
      "img/products/catalogo_carbec (204).png",
      "img/products/catalogo_carbec (205).png",
    ],
    category: "Hogar y Cocina",
  },

   {
    id: 'PK-8036',
    name: "LICUADORA POKER",
    shortDescription: "Licuadora Poker Gris",
    longDescription:
      "Licuadora Poker de alta calidad, ideal para preparar batidos, jugos y otras bebidas en casa. Cuenta con múltiples velocidades y una jarra resistente para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (206).png",
    gallery: ["img/products/catalogo_carbec (207).png",
      "img/products/catalogo_carbec (208).png",
      "img/products/catalogo_carbec (209).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'PK-H4',
    name: "BOMBA DE BOTELLON ELECTRONICA POKER",
    shortDescription: "Bomba de botellón electrónica Poker 0.37KW",
    longDescription:
      "Bomba de botellón electrónica Poker de alta calidad, ideal para dispensar agua de botellones de manera fácil y eficiente. Cuenta con un diseño compacto y materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (210).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'PK-999',
    name: "LICUADORA ELECTRICA POKER",
    shortDescription: "Licuadora Electrica Poker 350W",
    longDescription:
      "Licuadora eléctrica Poker de alta calidad, ideal para preparar batidos, jugos y otras bebidas en casa. Cuenta con múltiples velocidades y una jarra resistente para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (211).png",
    gallery: ["img/products/catalogo_carbec (212).png",
      "img/products/catalogo_carbec (213).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'RS221, RS2411, RS261',
    name: "COLADOR DE ARROZ",
    shortDescription: "Colador de arroz CÓD. RS221 22CM, CÓD. RS2411 24CM, CÓD. RS261 26CM",
    longDescription:
      "Colador de arroz de alta calidad, ideal para colar arroz y otros granos en la cocina. Fabricado con acero inoxidable duradero para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (214).png",
    gallery: ["img/products/catalogo_carbec (215).png",
      "img/products/catalogo_carbec (216).png",
    ],
    category: "Hogar y Cocina",
  },

  {
    id: 'SP-A',
    name: "CUCHARRON DE ARROZ",
    shortDescription: "Cucharón de arroz 65G",
    longDescription:
      "Cucharón de arroz de alta calidad, ideal para servir arroz y otros granos en la cocina. Fabricado con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (217).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'SP-S',
    name: "CUCHARRON DE SOPA",
    shortDescription: "Cucharón de sopa",
    longDescription:
      "Cucharón de sopa de alta calidad, ideal para servir sopas y caldos en la cocina. Fabricado con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (218).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: 'SSP202011',
    name: "JUEGO DE OLLA",
    shortDescription: "Juego de olla 18 SET/7PCS, 13CM, 14CM, 16CM, 17CM, 18CM, 19CM, 20CM",
    longDescription:
      "Juego de ollas de alta calidad, ideal para cocinar una variedad de platos en la cocina. Incluye 7 piezas de diferentes tamaños para adaptarse a todas tus necesidades culinarias.",
    mainImage: "img/products/catalogo_carbec (219).png",
    gallery: [],
    category: "Hogar y Cocina",
  },

  {
    id: '6116',
    name: "BIBERONES DE 8 OZ",
    shortDescription: "Biberones de 8 oz 6PCS, COLORES: 2 AZUL, 2 ROJOS Y 2 VERDES",
    longDescription:
      "Biberones de 8 oz de alta calidad, ideales para alimentar a los bebés de manera segura y cómoda. Cada set incluye 6 biberones en colores azul, rojo y verde.",
    mainImage: "img/products/catalogo_carbec (220).png",
    gallery: [],
    category: "Bebés",
  },

  {
    id: 'CC-12M',
    name: "BIBERON CARIOCA 10 OZ",
    shortDescription: "Biberones de 10 oz 144/1",
    longDescription:
      "Biberones de 10 oz de alta calidad, ideales para alimentar a los bebés de manera segura y cómoda. Fabricados con materiales duraderos y seguros para el uso infantil.",
    mainImage: "img/products/catalogo_carbec (221).png",
    gallery: ["img/products/catalogo_carbec (222).png"],
    category: "Bebés",
  },

   {
    id: 'CC-80',
    name: "TOALLITAS HUMEDAS CARIOCA",
    shortDescription: "Toallitas húmedas carioca 36/80PCS",
    longDescription:
      "Toallitas húmedas carioca de alta calidad, ideales para la limpieza y cuidado de la piel del bebé. Cada paquete contiene 80 toallitas suaves y delicadas para su uso diario.",
    mainImage: "img/products/catalogo_carbec (223).png",
    gallery: [],
    category: "Bebés",
  },

  {
    id: 'HS-28',
    name: "TETERA PEQUEÑA",
    shortDescription: "tetera pequeña 20 GRZ",
    longDescription:
      "Tetera pequeña de alta calidad, ideal para preparar y servir té de manera fácil y eficiente. Fabricada con materiales duraderos para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (224).png",
    gallery: [],
    category: "Bebés",
  },

  {
    id: 'KLB120B',
    name: "TETERA GRANDE",
    shortDescription: "tetera grande 12 oz, 14 GRUESA",
    longDescription:
      "Tetera grande de alta calidad, ideal para preparar y servir té de manera fácil y eficiente. Fabricada con materiales duraderos para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (225).png",
    gallery: [],
    category: "Bebés",
  },

  {
    id: 'P-811-K',
    name: "BIBERON",
    shortDescription: "Biberon BOIKV",
    longDescription:
      "Biberón BOIKV de alta calidad, ideal para alimentar a los bebés de manera segura y cómoda. Fabricado con materiales duraderos y seguros para el uso infantil.",
    mainImage: "img/products/catalogo_carbec (226).png",
    gallery: ["img/products/catalogo_carbec (227).png",
      "img/products/catalogo_carbec (228).png",
    ],
    category: "Bebés",
  },

  {
    id: 'BB-200',
    name: "ESPONJAS DE BAÑO",
    shortDescription: "Esponjas de baño 25G 200/1",
    longDescription:
      "Esponjas de baño de alta calidad, ideales para la limpieza y cuidado de la piel del bebé durante el baño. Fabricadas con materiales suaves y delicados para un uso seguro.",
    mainImage: "img/products/catalogo_carbec (229).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'BC20-6',
    name: "CORTINA DE BAÑO LISO",
    shortDescription: "Cortina de baño liso 60/1 180X180CM",
    longDescription:
      "Cortina de baño liso de alta calidad, ideal para decorar y proteger el área de la ducha o bañera. Fabricada con materiales duraderos y resistentes al agua para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (232).png",
    gallery: ["img/products/catalogo_carbec (231).png",
      "img/products/catalogo_carbec (230).png",
    ],
    category: "Hogar",
  },

  {
    id: 'BC20-7',
    name: "CORTINA DE BAÑO ESTAMPA",
    shortDescription: "Cortina de baño estampa 60/1 180X180CM",
    longDescription:
      "Cortina de baño con estampado de alta calidad, ideal para decorar y proteger el área de la ducha o bañera. Fabricada con materiales duraderos y resistentes al agua para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (233).png",
    gallery: ["img/products/catalogo_carbec (234).png",
      "img/products/catalogo_carbec (235).png",
    ],
    category: "Hogar",
  },

  {
    id: 'HB34623-02',
    name: "CORTINA DE BAÑO PVC",
    shortDescription: "Cortina de baño PVC DISEÑO VARIADO",
    longDescription:
      "Cortina de baño de PVC de alta calidad, ideal para decorar y proteger el área de la ducha o bañera. Fabricada con materiales duraderos y resistentes al agua para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (236).png",
    gallery: ["img/products/catalogo_carbec (237).png",
      "img/products/catalogo_carbec (238).png",
    ],
    category: "Hogar",
  },

  {
    id: 'CBM13667',
    name: "ALFOMBRA PLASTICA",
    shortDescription: "Alfombra plástica 36X67CM 360G",
    longDescription:
      "Alfombra plástica de alta calidad, ideal para decorar y proteger el suelo en áreas húmedas como el baño. Fabricada con materiales duraderos y resistentes al agua para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (239).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'CCBM23667',
    name: "ALFOMBRA PLASTICA",
    shortDescription: "Alfombra plástica 36X67CM 360G",
    longDescription:
      "Alfombra plástica de alta calidad, ideal para decorar y proteger el suelo en áreas húmedas como el baño. Fabricada con materiales duraderos y resistentes al agua para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (240).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'CBM14242',
    name: "ALFOMBRA PLASTICA",
    shortDescription: "Alfombra plástica 36X67CM 360G",
    longDescription:
      "Alfombra plástica de alta calidad, ideal para decorar y proteger el suelo en áreas húmedas como el baño. Fabricada con materiales duraderos y resistentes al agua para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (241).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'CBM33667',
    name: "ALFOMBRA PLASTICA",
    shortDescription: "Alfombra plástica 36X67CM 360G",
    longDescription:
      "Alfombra plástica de alta calidad, ideal para decorar y proteger el suelo en áreas húmedas como el baño. Fabricada con materiales duraderos y resistentes al agua para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (242).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'CES320',
    name: "RAQUETA MATA MOSCA C/LINTERNA",
    shortDescription: "Raqueta mata mosca con linterna 60/1",
    longDescription:
      "Raqueta mata mosca con linterna de alta calidad, ideal para eliminar insectos voladores de manera efectiva. Cuenta con una linterna integrada para su uso en condiciones de poca luz.",
    mainImage: "img/products/catalogo_carbec (243).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'CASI8B',
    name: "CONTROL MINI TECLADO I8",
    shortDescription: "Control mini teclado 100/1",
    longDescription:
      "Control mini teclado i8 de alta calidad, ideal para controlar dispositivos electrónicos de manera cómoda y eficiente. Cuenta con un diseño compacto y teclas sensibles para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (244).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'CG-320',
    name: "SOMBRILLA FLORES",
    shortDescription: "55CM 60/1",
    longDescription:
      "Sombrilla con diseño de flores de alta calidad, ideal para protegerse del sol y la lluvia. Fabricada con materiales duraderos y un diseño elegante para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (245).png",
    gallery: [],
    category: "Hogar",
  },

    {
    id: 'CG-321',
    name: "SOMBRILLA NEGRA",
    shortDescription: "55CM 60/1",
    longDescription:
      "Sombrilla negra de alta calidad, ideal para protegerse del sol y la lluvia. Fabricada con materiales duraderos y un diseño elegante para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (246).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'SU588',
    name: "SOMBRILLA VARIOS DISEÑOS",
    shortDescription: "SOMBRILLA VARIOS DISEÑOS",
    longDescription:
      "Sombrilla con varios diseños de alta calidad, ideal para protegerse del sol y la lluvia. Fabricada con materiales duraderos y un diseño elegante para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (247).png",
    gallery: ["img/products/catalogo_carbec (248).png",
      "img/products/catalogo_carbec (249).png",
    ],
    category: "Hogar",
  },

  {
    id: 'U-608',
    name: "SOMBRILLA",
    shortDescription: "SOMBRILLA 60CM",
    longDescription:
      "Sombrilla de 60CM de alta calidad, ideal para protegerse del sol y la lluvia. Fabricada con materiales duraderos y un diseño elegante para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (250).png",
    gallery: ["img/products/catalogo_carbec (251).png",
    ],
    category: "Hogar",
  },

  {
    id: 'CRM4060',
    name: "ALFOMBRA",
    shortDescription: "ALFOMBRA 40X60CM",
    longDescription:
      "Alfombra de 40X60CM de alta calidad, ideal para decorar y proteger el suelo en el hogar. Fabricada con materiales duraderos para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (252).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'JD140',
    name: "ALFOMBRA",
    shortDescription: "ALFOMBRA 40X60CM 200G VARIOS COLORES",
    longDescription:
      "Alfombra de 40X60CM de alta calidad, ideal para decorar y proteger el suelo en el hogar. Fabricada con materiales duraderos para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (253).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'YH-2118',
    name: "CEPILLO DE BAÑO",
    shortDescription: "Cepillo de baño AZUL",
    longDescription:
      "Cepillo de baño de alta calidad, ideal para la limpieza y cuidado del baño. Fabricado con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (254).png",
    gallery: ["img/products/catalogo_carbec (255).png",
      "img/products/catalogo_carbec (256).png",
    ],
    category: "Hogar",
  },

  {
    id: 'YH-8105',
    name: "CEPILLO DE BAÑO",
    shortDescription: "Cepillo de baño VERDE",
    longDescription:
      "Cepillo de baño de alta calidad, ideal para la limpieza y cuidado del baño. Fabricado con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (257).png",
    gallery: ["img/products/catalogo_carbec (258).png",
      "img/products/catalogo_carbec (259).png",
    ],
    category: "Hogar",
  },

  {
    id: 'FG-7070',
    name: "CEPILLO OVALADO",
    shortDescription: "CEPILLO OVALADO FREGABEN",
    longDescription:
      "Cepillo ovalado de alta calidad, ideal para la limpieza y cuidado del hogar. Fabricado con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (260).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'RPN-27',
    name: "SET DE AGUJAS",
    shortDescription: "Set de agujas",
    longDescription:
      "Set de agujas de alta calidad, ideal para manualidades y costura. Incluye una variedad de tamaños para adaptarse a diferentes proyectos.",
    mainImage: "img/products/catalogo_carbec (261).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'CBYQ1103',
    name: "CEPILLO PLASTICO GRANDE",
    shortDescription: "Cepillo plástico grande 12/12",
    longDescription:
      "Cepillo plástico grande de alta calidad, ideal para la limpieza y cuidado del hogar. Fabricado con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (262).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'GP8058',
    name: "BARAJAS",
    shortDescription: "Barajas 10 CARTAS",
    longDescription:
      "Barajas de alta calidad, ideales para juegos de cartas en familia y con amigos. Cada set incluye 10 cartas duraderas para un entretenimiento prolongado.",
    mainImage: "img/products/catalogo_carbec (263).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'L-809',
    name: "BARAJAS",
    shortDescription: "BARAJA LINCE 809",
    longDescription:
      "Barajas de alta calidad, ideales para juegos de cartas en familia y con amigos. Cartas duraderas para un entretenimiento prolongado.",
    mainImage: "img/products/catalogo_carbec (264).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'T5211',
    name: "DOMINO BLANCO",
    shortDescription: "Domino blanco",
    longDescription:
      "Domino blanco de alta calidad, ideal para juegos en familia y con amigos. Piezas duraderas para un entretenimiento prolongado.",
    mainImage: "img/products/catalogo_carbec (265).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'RD5010M',
    name: "DOMINO JAPIAO",
    shortDescription: "Domino Japiao",
    longDescription:
      "Domino Japiao de alta calidad, ideal para juegos en familia y con amigos. Piezas duraderas para un entretenimiento prolongado.",
    mainImage: "img/products/catalogo_carbec (266).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'KC1612',
    name: "PALITOS DE ROPA JUMBO",
    shortDescription: "Palitos de ropa jumbo 144/24PCS",
    longDescription:
      "Palitos de ropa jumbo de alta calidad, ideales para colgar ropa de manera segura y eficiente. Fabricados con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (267).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'R6 UM-3',
    name: "PILAS POKER AA",
    shortDescription: "Pilas Poker AA",
    longDescription:
      "Pilas Poker AA de alta calidad, ideales para alimentar una variedad de dispositivos electrónicos. Fabricadas con materiales duraderos para un rendimiento óptimo y una larga duración.",
    mainImage: "img/products/catalogo_carbec (268).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'R03 UM-4',
    name: "PILAS POKER AAA",
    shortDescription: "Pilas Poker AAA",
    longDescription:
      "Pilas Poker AAA de alta calidad, ideales para alimentar una variedad de dispositivos electrónicos. Fabricadas con materiales duraderos para un rendimiento óptimo y una larga duración.",
    mainImage: "img/products/catalogo_carbec (269).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'KF-64',
    name: "KANFOR 64 (ALCANFOR TABLETAS)",
    shortDescription: "Kanfor 64 (Alcanfor Tabletas) 50/64 PCS",
    longDescription:
      "Kanfor 64 (Alcanfor Tabletas) de alta calidad, ideal para aliviar dolores musculares y articulares. Cada paquete contiene 64 tabletas para su uso conveniente.",
    mainImage: "img/products/catalogo_carbec (270).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'FXFJ',
    name: "CONTROL REMOTO PARA SANYO",
    shortDescription: "Control remoto para Sanyo",
    longDescription:
      "Control remoto de alta calidad, ideal para controlar televisores Sanyo de manera cómoda y eficiente. Cuenta con un diseño ergonómico y botones sensibles para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (271).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'KT-508',
    name: "CONTROL REMOTO UNIVERSAL A/C",
    shortDescription: "Control remoto universal A/C",
    longDescription:
      "Control remoto universal de alta calidad, ideal para controlar una variedad de unidades de aire acondicionado de manera cómoda y eficiente. Cuenta con un diseño ergonómico y botones sensibles para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (272).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'RCU-404',
    name: "CONTROL REMOTO",
    shortDescription: "Control remoto",
    longDescription:
      "Control remoto de alta calidad, ideal para controlar una variedad de dispositivos electrónicos de manera cómoda y eficiente. Cuenta con un diseño ergonómico y botones sensibles para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (273).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'RM-9511',
    name: "CONTROL REMOTO",
    shortDescription: "Control remoto",
    longDescription:
      "Control remoto de alta calidad, ideal para controlar una variedad de dispositivos electrónicos de manera cómoda y eficiente. Cuenta con un diseño ergonómico y botones sensibles para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (274).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'RM-D1078',
    name: "CONTROL REMOTO SMART PARA SAMSUNG",
    shortDescription: "Control remoto smart para Samsung",
    longDescription:
      "Control remoto smart de alta calidad, ideal para controlar televisores Samsung de manera cómoda y eficiente. Cuenta con un diseño ergonómico y botones sensibles para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (275).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'RM-L1346',
    name: "CONTROL REMOTO SMART SHARP",
    shortDescription: "Control remoto smart SHARP",
    longDescription:
      "Control remoto smart de alta calidad. Cuenta con un diseño ergonómico y botones sensibles para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (276).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'RM-L1370',
    name: "CONTROL REMOTO SMART SONY",
    shortDescription: "Control remoto smart SONY",
    longDescription:
      "Control remoto smart de alta calidad. Cuenta con un diseño ergonómico y botones sensibles para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (277).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'RM-L930+3',
    name: "CONTROL REMOTO SMART LG",
    shortDescription: "Control remoto smart LG",
    longDescription:
      "Control remoto smart de alta calidad. Cuenta con un diseño ergonómico y botones sensibles para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (278).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'RM-Y173',
    name: "CONTROL REMOTO PARA SONY",
    shortDescription: "Control remoto para SONY",
    longDescription:
      "Control remoto de alta calidad, ideal para controlar televisores SONY de manera cómoda y eficiente. Cuenta con un diseño ergonómico y botones sensibles para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (279).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'TZ-011SN',
    name: "CONTROL REMOTO UNIVERSAL",
    shortDescription: "Control remoto universal para SONY",
    longDescription:
      "Control remoto universal de alta calidad, ideal para controlar televisores SONY de manera cómoda y eficiente. Cuenta con un diseño ergonómico y botones sensibles para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (280).png",
    gallery: [],
    category: "Hogar",
  },

    {
    id: 'PK-F18',
    name: "ABANICO PEDESTAL 18 DE 5 ASPA",
    shortDescription: "Abanico pedestal 18 de 5 aspa POKER",
    longDescription:
      "Abanico pedestal de alta calidad, ideal para refrescar y ventilar espacios en el hogar u oficina. Cuenta con 5 aspas para un flujo de aire óptimo y un diseño elegante.",
    mainImage: "img/products/catalogo_carbec (281).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'PKWF1812',
    name: "ABANICO PARED 18 REMOTO",
    shortDescription: "Abanico pared 18 remoto POKER",
    longDescription:
      "Abanico de pared de alta calidad, ideal para refrescar y ventilar espacios en el hogar u oficina. Cuenta con control remoto para un uso cómodo y un diseño elegante.",
    mainImage: "img/products/catalogo_carbec (282).png",
    gallery: [],
    category: "Hogar",
  },

   {
    id: 'PKWF1812R',
    name: "ABANICO PARED 18 CON CONTROL REMOTO",
    shortDescription: "Abanico pared 18 remoto POKER",
    longDescription:
      "Abanico de pared de alta calidad, ideal para refrescar y ventilar espacios en el hogar u oficina. Cuenta con control remoto para un uso cómodo y un diseño elegante.",
    mainImage: "img/products/catalogo_carbec (283).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'SDM03',
    name: "ROCIADOR PLASTICO",
    shortDescription: "Rociador plastico 500ML",
    longDescription:
      "Rociador plástico de alta calidad, ideal para aplicar líquidos de manera uniforme en plantas, superficies y más. Capacidad de 500ML para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (284).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'SLX-5815',
    name: "RAQUETA MATA MOSCA",
    shortDescription: "Raqueta mata mosca",
    longDescription:
      "Raqueta mata mosca de alta calidad, ideal para eliminar insectos voladores de manera efectiva. Cuenta con un diseño ergonómico para un uso cómodo.",
    mainImage: "img/products/catalogo_carbec (285).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'SP40-BL',
    name: "ILUSTRADOR NEGRO",
    shortDescription: "Ilustrador negro CHEARY",
    longDescription:
      "Ilustrador negro de alta calidad, ideal para dibujar y pintar con precisión. Cuenta con un diseño ergonómico para un uso cómodo.",
    mainImage: "img/products/catalogo_carbec (286).png",
    gallery: [],
    category: "Hogar",
  },

  {
    id: 'SP40-NE',
    name: "ILUSTRADOR NATURAL",
    shortDescription: "Ilustrador natural CHEARY",
    longDescription:
      "Ilustrador natural de alta calidad, ideal para dibujar y pintar con precisión. Cuenta con un diseño ergonómico para un uso cómodo.",
    mainImage: "img/products/catalogo_carbec (287).png",
    gallery: [],
    category: "Hogar",
  },

   {
    id: 'KOLAV-F2805',
    name: "BOCINA",
    shortDescription: "Bocina 8X2 USB/FM/BT/TWS 18W",
    longDescription:
      "Bocina de alta calidad con potencia de 18W, ideal para escuchar música con claridad y profundidad. Cuenta con conectividad USB, FM, Bluetooth y TWS para una experiencia auditiva completa.",
    mainImage: "img/products/catalogo_carbec (288).png",
    gallery: ["img/products/catalogo_carbec (289).png",
      "img/products/catalogo_carbec (290).png",
      "img/products/catalogo_carbec (291).png",
    ],
    category: "Hogar",
  },

  {
    id: 'KOLAV-F2805',
    name: "BOCINA",
    shortDescription: "Bocina 8X2 USB/FM/BT/TWS 18W",
    longDescription:
      "Bocina de alta calidad con potencia de 18W, ideal para escuchar música con claridad y profundidad. Cuenta con conectividad USB, FM, Bluetooth y TWS para una experiencia auditiva completa.",
    mainImage: "img/products/catalogo_carbec (288).png",
    gallery: ["img/products/catalogo_carbec (289).png",
    ],
    category: "Hogar",
  },

   {
    id: 'KOLAV-F604',
    name: "BOCINA",
    shortDescription: "Bocina 6.5 USB/FM/BT/TWS 5W",
    longDescription:
      "Bocina de alta calidad con potencia de 5W, ideal para escuchar música con claridad y profundidad. Cuenta con conectividad USB, FM, Bluetooth y TWS para una experiencia auditiva completa.",
    mainImage: "img/products/catalogo_carbec (290).png",
    gallery: ["img/products/catalogo_carbec (291).png",
      "img/products/catalogo_carbec (292).png",
    ],
    category: "Hogar",
  },

  {
    id: 'KOLAV-J806F',
    name: "BOCINA",
    shortDescription: "Bocina 8 USB/FM/BT/TWS/AUX 7W",
    longDescription:
      "Bocina de alta calidad con potencia de 7W, ideal para escuchar música con claridad y profundidad. Cuenta con conectividad USB, FM, Bluetooth, TWS y AUX para una experiencia auditiva completa.",
    mainImage: "img/products/catalogo_carbec (293).png",
    gallery: ["img/products/catalogo_carbec (294).png",
      "img/products/catalogo_carbec (295).png",
    ],
    category: "Hogar",
  },

  {
    id: 'KOLAV-S803K',
    name: "BOCINA",
    shortDescription: "Bocina 8X2 USB/FM/TF/BT/TWS/AUX 7W",
    longDescription:
      "Bocina de alta calidad con potencia de 7W, ideal para escuchar música con claridad y profundidad. Cuenta con conectividad USB, FM, Bluetooth, TWS y AUX para una experiencia auditiva completa.",
    mainImage: "img/products/catalogo_carbec (296).png",
    gallery: ["img/products/catalogo_carbec (297).png",
      "img/products/catalogo_carbec (298).png",
    ],
    category: "Hogar",
  },

  {
    id: 'KOLAV-F1208',
    name: "BOCINA",
    shortDescription: "Bocina 8X2 USB",
    longDescription:
      "Bocina de alta calidad con potencia de 7W, ideal para escuchar música con claridad y profundidad. Cuenta con conectividad USB, FM, Bluetooth, TWS y AUX para una experiencia auditiva completa.",
    mainImage: "img/products/catalogo_carbec (299).png",
    gallery: ["img/products/catalogo_carbec (300).png",
      "img/products/catalogo_carbec (301).png",
    ],
    category: "Hogar",
  },

  {
    id: 'YG-518URT',
    name: "RADIO CON LINTERNA RECARGABLE",
    shortDescription: "Radio con linterna recargable AM/FM/SW/USB/TF",
    longDescription:
      "Radio con linterna recargable de alta calidad, ideal para escuchar música y noticias en cualquier lugar. Cuenta con sintonizador AM/FM/SW, conectividad USB/TF y una linterna integrada para mayor comodidad.",
    mainImage: "img/products/catalogo_carbec (302).png",
    gallery: ["img/products/catalogo_carbec (303).png",
      "img/products/catalogo_carbec (304).png",
      "img/products/catalogo_carbec (305).png",
    ],
    category: "Hogar",
  },

  {
    id: '711',
    name: "LAPIZ COLOR PEQ",
    shortDescription: "Lápiz de colores pequeño 12PCS",
    longDescription:
      "Lápiz de colores pequeño de alta calidad, ideal para dibujo y coloreado. Cada set incluye 12 lápices en una variedad de colores vibrantes para estimular la creatividad.",
    mainImage: "img/products/catalogo_carbec (306).png",
    gallery: ["img/products/catalogo_carbec (307).png",
      "img/products/catalogo_carbec (308).png",
    ],
    category: "Escolar",
  },

   {
    id: '712',
    name: "LAPIZ COLOR GDE",
    shortDescription: "Lápiz de colores grande 12PCS",
    longDescription:
      "Lápiz de colores grande de alta calidad, ideal para dibujo y coloreado. Cada set incluye 12 lápices en una variedad de colores vibrantes para estimular la creatividad.",
    mainImage: "img/products/catalogo_carbec (309).png",
    gallery: ["img/products/catalogo_carbec (310).png",
      "img/products/catalogo_carbec (311).png",
    ],
    category: "Escolar",
  },

  {
    id: '9005',
    name: "TIJERA PEQ",
    shortDescription: "Tijera pequeña 5.5X1.2MM 600/1",
    longDescription:
      "Tijera pequeña de alta calidad, ideal para cortar papel y otros materiales en proyectos escolares y de oficina. Fabricada con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (312).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: '11000',
    name: "TIJERA GDE",
    shortDescription: "Tijera grande 7.5 X1.5MM",
    longDescription:
      "Tijera grande de alta calidad, ideal para cortar papel y otros materiales en proyectos escolares y de oficina. Fabricada con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (313).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: '9009',
    name: "TIJERA GDE",
    shortDescription: "Tijera grande 9.5X1.5MM 360/1",
    longDescription:
      "Tijera grande de alta calidad, ideal para cortar papel y otros materiales en proyectos escolares y de oficina. Fabricada con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (314).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: '115208',
    name: "SET DE MEDIDAS",
    shortDescription: "Set de medidas, DOCENA",
    longDescription:
      "Set de medidas de alta calidad, ideal para proyectos escolares y de oficina. Incluye una variedad de herramientas de medición para un uso versátil.",
    mainImage: "img/products/catalogo_carbec (315).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'A102',
    name: "VELA SILICONA",
    shortDescription: "Vela de silicona CRUBEC, 11X300MM 25/33PCS",
    longDescription:
      "Vela de silicona de alta calidad, ideal para proyectos escolares y de oficina. Fabricada con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (316).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'YL-40W',
    name: "PISTOLA DE SILICONE",
    shortDescription: "Pistola de silicona 11MM 40W",
    longDescription:
      "Pistola de silicona de alta calidad, ideal para proyectos escolares y de oficina. Fabricada con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (317).png",
    gallery: ["img/products/catalogo_carbec (318).png",
      "img/products/catalogo_carbec (319).png",
    ],
    category: "Escolar",
  },

   {
    id: 'CE51177',
    name: "BORRA GDE",
    shortDescription: "Borra grande 17X51X7MM 60/20PC",
    longDescription:
      "Borra grande de alta calidad, ideal para borrar lápiz y otros materiales en proyectos escolares y de oficina. Fabricada con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (320).png",
    gallery: [
    ],
    category: "Escolar",
  },

  {
    id: 'CR-211-BK',
    name: "MARCADORES CRUBEC NEGRO",
    shortDescription: "Marcadores de tinta negra 60/12",
    longDescription:
      "Marcadores de tinta negra de alta calidad, ideales para escribir y dibujar en una variedad de superficies. Cada set incluye 12 marcadores con punta resistente para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (321).png",
    gallery: [
    ],
    category: "Escolar",
  },

  {
    id: 'CR-211-BU',
    name: "MARCADORES CRUBEC AZUL",
    shortDescription: "Marcadores de tinta azul 60/12",
    longDescription:
      "Marcadores de tinta azul de alta calidad, ideales para escribir y dibujar en una variedad de superficies. Cada set incluye 12 marcadores con punta resistente para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (322).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'CR-36',
    name: "BOLIGRAFOS",
    shortDescription: "Bolígrafos NEGROS/AZUL/ROJO 80/36PCS",
    longDescription:
      "Bolígrafos de alta calidad, ideales para escribir en una variedad de superficies. Cada set incluye 36 bolígrafos con tinta de duración prolongada para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (323).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'CR-36BL',
    name: "BOLIGRAFOS",
    shortDescription: "Bolígrafos AZUL 100/12PCS",
    longDescription:
      "Bolígrafos de alta calidad, ideales para escribir en una variedad de superficies. Cada set incluye 12 bolígrafos con tinta de duración prolongada para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (324).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'CR-C7',
    name: "LAPIZ CORRECTOR",
    shortDescription: "Lápiz corrector 8ML 48/12",
    longDescription:
      "Lápiz corrector de alta calidad, ideal para corregir errores en proyectos escolares y de oficina. Fabricado con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (325).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'CR-EG120, CR-EG125, CR-EG150',
    name: "EGA BLANCA",
    shortDescription: "Ega blanca",
    longDescription:
      "Ega blanca de alta calidad, ideal para corregir errores en proyectos escolares y de oficina. Fabricada con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (326).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'CR-P24',
    name: "BOLIGRAFO",
    shortDescription: "Bolígrafo 24 PCS",
    longDescription:
      "Bolígrafo de alta calidad, ideal para escribir en una variedad de superficies. Cada set incluye 24 bolígrafos con tinta de duración prolongada para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (327).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'CR2402',
    name: "BOLIGRAFO NEGRO",
    shortDescription: "Bolígrafo negro 12PCS",
    longDescription:
      "Bolígrafo negro de alta calidad, ideal para escribir en una variedad de superficies. Cada set incluye 12 bolígrafos con tinta de duración prolongada para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (328).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'CR2404',
    name: "BOLIGRAFO AZUL",
    shortDescription: "Bolígrafo azul 12PCS",
    longDescription:
      "Bolígrafo azul de alta calidad, ideal para escribir en una variedad de superficies. Cada set incluye 12 bolígrafos con tinta de duración prolongada para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (329).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'CR2408',
    name: "BOLIGRAFO MIXTO",
    shortDescription: "Bolígrafo MIXTO Rojo/azul/negro 12PCS",
    longDescription:
      "Bolígrafo mixto de alta calidad, ideal para escribir en una variedad de superficies. Cada set incluye 12 bolígrafos con tinta de duración prolongada para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (330).png",
    gallery: [],
    category: "Escolar",
  },

   {
    id: 'CS18421',
    name: "SETS DE MEDIDAS",
    shortDescription: "Sets de medidas",
    longDescription:
      "Sets de medidas de alta calidad, ideales para proyectos escolares y de oficina. Fabricados con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (331).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'CWM1813RD',
    name: "MARCADOR DE PIZARRA",
    shortDescription: "Marcador de pizarra ROJO",
    longDescription:
      "Marcador de pizarra de alta calidad, ideal para escribir en pizarras blancas y negras. Fabricado con tinta resistente para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (332).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'E-218',
    name: "BORRA COLORES",
    shortDescription: "Borra colores",
    longDescription:
      "Borra colores de alta calidad, ideal para borrar lápiz y otros materiales en proyectos escolares y de oficina. Fabricada con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (333).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'HC6122',
    name: "TIJERA ESCOLAR",
    shortDescription: "Tijera escolar",
    longDescription:
      "Tijera escolar de alta calidad, ideal para cortar papel y otros materiales en proyectos escolares. Fabricada con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (334).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'KK-185A',
    name: "CALCULADORA KENKO",
    shortDescription: "Calculadora Kenko",
    longDescription:
      "Calculadora Kenko de alta calidad, ideal para realizar cálculos matemáticos de manera rápida y eficiente. Cuenta con una pantalla clara y botones sensibles para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (335).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'KK-328A',
    name: "CALCULADORA KENKO",
    shortDescription: "Calculadora Kenko",
    longDescription:
      "Calculadora Kenko de alta calidad, ideal para realizar cálculos matemáticos de manera rápida y eficiente. Cuenta con una pantalla clara y botones sensibles para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (336).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'KK-6103',
    name: "CALCULADORA KENKO",
    shortDescription: "Calculadora Kenko",
    longDescription:
      "Calculadora Kenko de alta calidad, ideal para realizar cálculos matemáticos de manera rápida y eficiente. Cuenta con una pantalla clara y botones sensibles para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (337).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'KK-82MS',
    name: "CALCULADORA KENKO",
    shortDescription: "Calculadora Kenko",
    longDescription:
      "Calculadora Kenko de alta calidad, ideal para realizar cálculos matemáticos de manera rápida y eficiente. Cuenta con una pantalla clara y botones sensibles para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (338).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'LG401',
    name: "EGA TRANSPARENTE",
    shortDescription: "EGA transparente",
    longDescription:
      "Ega transparente de alta calidad, ideal para corregir errores en proyectos escolares y de oficina. Fabricada con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (339).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'MH547',
    name: "RESALTADOR FLUORECENTE",
    shortDescription: "Resaltador fluorescente",
    longDescription:
      "Resaltador fluorescente de alta calidad, ideal para resaltar texto y notas importantes en proyectos escolares y de oficina. Fabricado con tinta vibrante para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (340).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'MP-A',
    name: "MARCADOR PIZARRA AZUL",
    shortDescription: "Marcador pizarra azul CRUBEC 60/12",
    longDescription:
      "Marcador de pizarra azul de alta calidad, ideal para escribir en pizarras blancas y negras. Fabricado con tinta resistente para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (341).png",
    gallery: [],
    category: "Escolar",
  },

   {
    id: 'MP-N',
    name: "MARCADOR PIZARRA NEGRO",
    shortDescription: "Marcador pizarra negro CRUBEC 60/12",
    longDescription:
      "Marcador de pizarra negro de alta calidad, ideal para escribir en pizarras blancas y negras. Fabricado con tinta resistente para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (342).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'MP-R',
    name: "MARCADOR PIZARRA ROJO",
    shortDescription: "Marcador pizarra rojo CRUBEC 60/12",
    longDescription:
      "Marcador de pizarra rojo de alta calidad, ideal para escribir en pizarras blancas y negras. Fabricado con tinta resistente para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (343).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'ST9986-GN',
    name: "MARCADORES DE PIZARRA VERDE",
    shortDescription: "Marcador pizarra verde 10 PCS",
    longDescription:
      "Marcador de pizarra verde de alta calidad, ideal para escribir en pizarras blancas y negras. Fabricado con tinta resistente para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (344).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'PK-8036',
    name: "LAPIZ MULTIUSO",
    shortDescription: "Lápiz multiuso POKER",
    longDescription:
      "Lápiz multiuso de alta calidad, ideal para escribir y dibujar en una variedad de superficies. Fabricado con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (345).png",
    gallery: ["img/products/catalogo_carbec (346).png",
      "img/products/catalogo_carbec (347).png",
    ],
    category: "Escolar",
  },

  {
    id: 'RED-36',
    name: "LAPIZ SUPERIOR",
    shortDescription: "Lapiz superior CRUBEC",
    longDescription:
      "Lápiz superior de alta calidad, ideal para escribir y dibujar en una variedad de superficies. Fabricado con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (348).png",
    gallery: ["img/products/catalogo_carbec (349).png",
      "img/products/catalogo_carbec (350).png",
    ],
    category: "Escolar",
  },

  {
    id: 'TH508',
    name: "CRAYONES DE 8 COLORES",
    shortDescription: "Crayones de 8 colores",
    longDescription:
      "Lápiz superior de alta calidad, ideal para escribir y dibujar en una variedad de superficies. Fabricado con materiales duraderos para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (351).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'HY-102',
    name: "HIGHLIGHTS",
    shortDescription: "Highlights 4 COLORES",
    longDescription:
      "Highlights de alta calidad, ideal para resaltar texto y notas importantes en proyectos escolares y de oficina. Fabricado con tinta vibrante para un rendimiento óptimo.",
    mainImage: "img/products/catalogo_carbec (352).png",
    gallery: [],
    category: "Escolar",
  },

  {
    id: 'TBN-07',
    name: "CEPILLO DENTAL",
    shortDescription: "Cepillo dental CRUBEC",
    longDescription:
      "Cepillo dental de alta calidad, ideal para mantener una buena higiene bucal. Cuenta con cerdas suaves para una limpieza efectiva y cómoda.",
    mainImage: "img/products/catalogo_carbec (353).png",
    gallery: [],
    category: "Higiene",
  },

  {
    id: 'TBN-02',
    name: "CEPILLO DENTAL",
    shortDescription: "Cepillo dental CRUBEC",
    longDescription:
      "Cepillo dental de alta calidad, ideal para mantener una buena higiene bucal. Cuenta con cerdas suaves para una limpieza efectiva y cómoda.",
    mainImage: "img/products/catalogo_carbec (354).png",
    gallery: [],
    category: "Higiene",
  },

  {
    id: 'TBN-03',
    name: "CEPILLO DENTAL",
    shortDescription: "Cepillo dental CRUBEC",
    longDescription:
      "Cepillo dental de alta calidad, ideal para mantener una buena higiene bucal. Cuenta con cerdas suaves para una limpieza efectiva y cómoda.",
    mainImage: "img/products/catalogo_carbec (355).png",
    gallery: [],
    category: "Higiene",
  },

  {
    id: 'TBN-04',
    name: "CEPILLO DENTAL",
    shortDescription: "Cepillo dental CRUBEC",
    longDescription:
      "Cepillo dental de alta calidad, ideal para mantener una buena higiene bucal. Cuenta con cerdas suaves para una limpieza efectiva y cómoda.",
    mainImage: "img/products/catalogo_carbec (356).png",
    gallery: [],
    category: "Higiene",
  },

  {
    id: 'TBN-05',
    name: "CEPILLO DENTAL",
    shortDescription: "Cepillo dental CRUBEC",
    longDescription:
      "Cepillo dental de alta calidad, ideal para mantener una buena higiene bucal. Cuenta con cerdas suaves para una limpieza efectiva y cómoda.",
    mainImage: "img/products/catalogo_carbec (357).png",
    gallery: [],
    category: "Higiene",
  },

  {
    id: 'TBN-06',
    name: "CEPILLO DENTAL",
    shortDescription: "Cepillo dental CRUBEC",
    longDescription:
      "Cepillo dental de alta calidad, ideal para mantener una buena higiene bucal. Cuenta con cerdas suaves para una limpieza efectiva y cómoda.",
    mainImage: "img/products/catalogo_carbec (358).png",
    gallery: [],
    category: "Higiene",
  },

  {
    id: 'TBN-08',
    name: "CEPILLO DENTAL",
    shortDescription: "Cepillo dental CRUBEC",
    longDescription:
      "Cepillo dental de alta calidad, ideal para mantener una buena higiene bucal. Cuenta con cerdas suaves para una limpieza efectiva y cómoda.",
    mainImage: "img/products/catalogo_carbec (359).png",
    gallery: [],
    category: "Higiene",
  },

  {
    id: 'TBN-09',
    name: "CEPILLO DENTAL ADULTO. BLISTERS",
    shortDescription: "Cepillo dental adulto",
    longDescription:
      "Cepillo dental de alta calidad, ideal para mantener una buena higiene bucal. Cuenta con cerdas suaves para una limpieza efectiva y cómoda.",
    mainImage: "img/products/catalogo_carbec (360).png",
    gallery: [],
    category: "Higiene",
  },

  {
    id: 'TBN-011',
    name: "CEPILLO DENTAL ADULTO. BLISTERS",
    shortDescription: "Cepillo dental adulto",
    longDescription:
      "Cepillo dental de alta calidad, ideal para mantener una buena higiene bucal. Cuenta con cerdas suaves para una limpieza efectiva y cómoda.",
    mainImage: "img/products/catalogo_carbec (361).png",
    gallery: [],
    category: "Higiene",
  },

  {
    id: '11216',
    name: "PANTE DIS. AMARILLO",
    shortDescription: "Pante dis. amarillo",
    longDescription:
      "Preservativo Pante de alta calidad, diseñado para brindar protección y comodidad durante las relaciones. Fabricado con materiales seguros y confiables para una experiencia placentera.",
    mainImage: "img/products/catalogo_carbec (362).png",
    gallery: [],
    category: "Higiene",
  },

  {
    id: '11218',
    name: "PANTE GRANEL",
    shortDescription: "Pante Granel 20/100UNDS",
    longDescription:
      "Preservativo Pante de alta calidad, diseñado para brindar protección y comodidad durante las relaciones. Fabricado con materiales seguros y confiables para una experiencia placentera.",
    mainImage: "img/products/catalogo_carbec (363).png",
    gallery: [],
    category: "Higiene",
  },

  {
    id: 'CB148',
    name: "HISOPO",
    shortDescription: "Hisofo 100PCS 40/12",
    longDescription:
      "Hisopo de alta calidad, ideal para limpieza y cuidado personal. Cada paquete contiene 100 hisopos con puntas suaves para un uso seguro y efectivo.",
    mainImage: "img/products/catalogo_carbec (364).png",
    gallery: [],
    category: "Higiene",
  },

  {
    id: 'MF-812',
    name: "HISOPO CORAZON",
    shortDescription: "Hisopo corazon 200PCS",
    longDescription:
      "Hisopo de alta calidad, ideal para limpieza y cuidado personal. Cada paquete contiene 200 hisopos con puntas suaves para un uso seguro y efectivo.",
    mainImage: "img/products/catalogo_carbec (365).png",
    gallery: [],
    category: "Higiene",
  },

  {
    id: 'PM395',
    name: "HISOPO ESTRELLA",
    shortDescription: "Hisopo estrella 300 PCS",
    longDescription:
      "Hisopo de alta calidad, ideal para limpieza y cuidado personal. Cada paquete contiene 300 hisopos con puntas suaves para un uso seguro y efectivo.",
    mainImage: "img/products/catalogo_carbec (366).png",
    gallery: [],
    category: "Higiene",
  },

  {
    id: 'NAILP-602,  NAILP-817, NAILP-818',
    name: "CORTA UÑA",
    shortDescription: "Corta uñas CRUBEC NAILP-602,  NAILP-817, NAILP-818. PEQUEÑO, MEDIANO, GRANDE",
    longDescription:
      "Corta uñas de alta calidad, ideal para el cuidado personal. Fabricado con materiales duraderos para un rendimiento óptimo y un corte preciso.",
    mainImage: "img/products/catalogo_carbec (367).png",
    gallery: ["img/products/catalogo_carbec (368).png",
      "img/products/catalogo_carbec (369).png",
    ],
    category: "Higiene",
  },

  {
    id: 'PK-CD2',
    name: "CEPILLO DENTAL BRILLA DE NOCHE",
    shortDescription: "Cepillo dental brilla de noche POKER",
    longDescription:
      "Cepillo dental de alta calidad, ideal para mantener una buena higiene bucal. Cuenta con cerdas suaves que brillan en la oscuridad para una limpieza efectiva y cómoda.",
    mainImage: "img/products/catalogo_carbec (370).png",
    gallery: [],
    category: "Higiene",
  },

  {
    id: 'PK-CD4',
    name: "CEPILLO DENTAL NIÑO/A",
    shortDescription: "CEPILLO DENTAL NIÑO/A POKER",
    longDescription:
      "Cepillo dental de alta calidad, ideal para mantener una buena higiene bucal en niños y niñas. Cuenta con cerdas suaves y un diseño atractivo para fomentar el cuidado dental desde temprana edad.",
    mainImage: "img/products/catalogo_carbec (371).png",
    gallery: [],
    category: "Higiene",
  },

  {
    id: 'PK-CD5',
    name: "CEPILLO DENTAL ADULTO",
    shortDescription: "CEPILLO DENTAL ADULTO POKER",
    longDescription:
      "Cepillo dental de alta calidad, ideal para mantener una buena higiene bucal en adultos. Cuenta con cerdas suaves y un diseño ergonómico para una limpieza efectiva y cómoda.",
    mainImage: "img/products/catalogo_carbec (372).png",
    gallery: [],
    category: "Higiene",
  },

   {
    id: '7027P',
    name: "PINCHO MUJERCITA",
    shortDescription: "Pincho Mujercita 30/1",
    longDescription:
      "Pincho mujercita de alta calidad, ideal para peinar y estilizar el cabello. Fabricado con materiales duraderos para un rendimiento óptimo y un agarre cómodo.",
    mainImage: "img/products/catalogo_carbec (373).png",
    gallery: ["img/products/catalogo_carbec (374).png",
      "img/products/catalogo_carbec (375).png",
    ],
    category: "Belleza",
  },

  {
    id: '0892',
    name: "REDECILLAS",
    shortDescription: "Redecillas wig gap 24 PCS",
    longDescription:
      "Redecillas de alta calidad, ideales para mantener el cabello en su lugar durante el trabajo o actividades diarias. Cada paquete contiene 24 redecillas resistentes y cómodas.",
    mainImage: "img/products/catalogo_carbec (376).png",
    gallery: [],
    category: "Belleza",
  },

   {
    id: 'JY37037',
    name: "REDECILLA NEGRA",
    shortDescription: "Redecilla negra AOYASI 100/12",
    longDescription:
      "Redecilla negra de alta calidad, ideal para mantener el cabello en su lugar durante el trabajo o actividades diarias. Fabricada con materiales resistentes y cómodos para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (377).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'BK06',
    name: "GOMITAS DE TRENZA NEGRA",
    shortDescription: "Gomitas de trenza negra 100/12",
    longDescription:
      "Gomitas de trenza negra de alta calidad, ideales para sujetar y estilizar el cabello. Cada paquete contiene 100 gomitas resistentes y cómodas para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (378).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'AX-9188',
    name: "TOWEL RING",
    shortDescription: "Towel Ring 100/144PCS",
    longDescription:
      "Towel Ring de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 144 unidades resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (379).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: '9511PB',
    name: "CEPILLO DE BLOWER",
    shortDescription: "Cepillo de blower",
    longDescription:
      "Cepillo de blower de alta calidad, ideal para peinar y estilizar el cabello con secador. Fabricado con materiales duraderos para un rendimiento óptimo y un agarre cómodo.",
    mainImage: "img/products/catalogo_carbec (380).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: '9551P',
    name: "CEPILLO DE PELO OVALADO",
    shortDescription: "Cepillo de pelo ovalado",
    longDescription:
      "Cepillo de pelo ovalado de alta calidad, ideal para peinar y estilizar el cabello con secador. Fabricado con materiales duraderos para un rendimiento óptimo y un agarre cómodo.",
    mainImage: "img/products/catalogo_carbec (381).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: '9552P',
    name: "CEPILLO DE PELO RECTANGULAR",
    shortDescription: "Cepillo de pelo rectangular",
    longDescription:
      "Cepillo de pelo rectangular de alta calidad, ideal para peinar y estilizar el cabello con secador. Fabricado con materiales duraderos para un rendimiento óptimo y un agarre cómodo.",
    mainImage: "img/products/catalogo_carbec (382).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'BW06',
    name: "GOMITA DE TRENZA BLANCA Y NEGRA",
    shortDescription: "Gomita de trenza blanca y negra 100/12",
    longDescription:
      "Gomita de trenza blanca y negra de alta calidad, ideales para sujetar y estilizar el cabello. Cada paquete contiene 100 gomitas resistentes y cómodas para un uso prolongado.",
    mainImage: "img/products/catalogo_carbec (383).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'CH22031',
    name: "BALL RING",
    shortDescription: "Ball Ring 6 COLORES 100/12",
    longDescription:
      "Ball Ring de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 12 unidades en 6 colores diferentes, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (384).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'CH22032',
    name: "BALL RING",
    shortDescription: "Ball Ring 3 COLORES 100/12",
    longDescription:
      "Ball Ring de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 12 unidades en 3 colores diferentes, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (385).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'CH22033',
    name: "BALL RING",
    shortDescription: "Ball Ring BLANCO Y ROJO 100/12",
    longDescription:
      "Ball Ring de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 12 unidades en colores blanco y rojo, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (386).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'CH22034',
    name: "BALL RING",
    shortDescription: "Ball Ring 6 COLORES 100/12",
    longDescription:
      "Ball Ring de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 12 unidades en 6 colores diferentes, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (387).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'CH22035',
    name: "BALL RING",
    shortDescription: "Ball Ring 6 COLORES 100/12",
    longDescription:
      "Ball Ring de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 12 unidades en 6 colores diferentes, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (388).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'CH22036',
    name: "BALL RING",
    shortDescription: "Ball Ring MORADO Y BLANCO 100/12",
    longDescription:
      "Ball Ring de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 12 unidades en colores morado y blanco, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (389).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'CH22037',
    name: "BALL RING",
    shortDescription: "Ball Ring BLANCO Y ROSADO 100/12",
    longDescription:
      "Ball Ring de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 12 unidades en colores blanco y rosado, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (390).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'CH22038',
    name: "BALL RING",
    shortDescription: "Ball Ring BLANCO Y NEGRO 100/12",
    longDescription:
      "Ball Ring de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 12 unidades en colores blanco y negro, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (391).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'CH8112',
    name: "BOLITAS DE PELO",
    shortDescription: "Bolitas de pelo 12MMX14PAIRS 30/12",
    longDescription:
      "Bolitas de pelo de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 12 unidades en colores blanco y negro, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (392).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'CH8115',
    name: "BOLITAS DE PELO",
    shortDescription: "Bolitas de pelo 15MMX12PAIRS 30/12",
    longDescription:
      "Bolitas de pelo de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 12 unidades en colores blanco y negro, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (393).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'CH8119',
    name: "BOLITAS DE PELO",
    shortDescription: "Bolitas de pelo 19MMX8PAIRS 30/12",
    longDescription:
      "Bolitas de pelo de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 12 unidades en colores blanco y negro, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (394).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'CL06',
    name: "GOMITAS DE TRENZA DE COLORES",
    shortDescription: "Gomitas de trenza de colores 100/12",
    longDescription:
      "Gomitas de trenza de colores de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 12 unidades en colores blanco y negro, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (395).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'HA101',
    name: "BOLITA DE PELO",
    shortDescription: "Bolita de pelo 10 PCS",
    longDescription:
      "Bolita de pelo de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 10 unidades en colores blanco y negro, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (396).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'HA103',
    name: "BOLITA DE PELO",
    shortDescription: "Bolita de pelo 10 PCS",
    longDescription:
      "Bolita de pelo de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 10 unidades en colores blanco y negro, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (397).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'HA601',
    name: "BOLITA DE PELO",
    shortDescription: "Bolita de pelo 10 PCS",
    longDescription:
      "Bolita de pelo de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 10 unidades en colores blanco y negro, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (398).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'HA602',
    name: "BOLITA DE PELO",
    shortDescription: "Bolita de pelo 10 PCS",
    longDescription:
      "Bolita de pelo de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 10 unidades en colores blanco y negro, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (399).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'HA603',
    name: "BOLITA DE PELO",
    shortDescription: "Bolita de pelo 10 PCS",
    longDescription:
      "Bolita de pelo de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 10 unidades en colores blanco y negro, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (400).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'HA604',
    name: "BOLITA DE PELO",
    shortDescription: "Bolita de pelo 10 PCS",
    longDescription:
      "Bolita de pelo de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 10 unidades en colores blanco y negro, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (401).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'HA605',
    name: "BOLITA DE PELO",
    shortDescription: "Bolita de pelo 10 PCS",
    longDescription:
      "Bolita de pelo de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 10 unidades en colores blanco y negro, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (402).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'HA8081',
    name: "ACCESORIO DE PELO",
    shortDescription: "Accesorio de pelo 6.8MM 60/12",
    longDescription:
      "Accesorio de pelo de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 12 unidades en colores blanco y negro, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (403).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'HA8082',
    name: "ACCESORIO DE PELO",
    shortDescription: "Accesorio de pelo 6.8MM 60/12",
    longDescription:
      "Accesorio de pelo de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 12 unidades en colores blanco y negro, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (404).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'HA8083',
    name: "ACCESORIO DE PELO",
    shortDescription: "Accesorio de pelo 6.8MM 60/12",
    longDescription:
      "Accesorio de pelo de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 12 unidades en colores blanco y negro, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (405).png",
    gallery: [],
    category: "Belleza",
  },
  
  {
    id: 'HA8084',
    name: "ACCESORIO DE PELO",
    shortDescription: "Accesorio de pelo 6.8MM 60/12",
    longDescription:
      "Accesorio de pelo de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 12 unidades en colores blanco y negro, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (406).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'HA8085',
    name: "ACCESORIO DE PELO",
    shortDescription: "Accesorio de pelo 6.8MM 60/12",
    longDescription:
      "Accesorio de pelo de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 12 unidades en colores blanco y negro, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (407).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'HA8086',
    name: "ACCESORIO DE PELO",
    shortDescription: "Accesorio de pelo 6.8MM 60/12",
    longDescription:
      "Accesorio de pelo de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 12 unidades en colores blanco y negro, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (408).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'HA8087',
    name: "ACCESORIO DE PELO",
    shortDescription: "Accesorio de pelo 6.8MM 60/12",
    longDescription:
      "Accesorio de pelo de alta calidad, ideal para sujetar toallas de manera segura. Cada paquete contiene 12 unidades en colores blanco y negro, resistentes y fáciles de usar.",
    mainImage: "img/products/catalogo_carbec (409).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'CA-ANT-1',
    name: "CABELLO 90 GM",
    shortDescription: "Cabello 90 GM ANTIBACTERIAL #1",
    longDescription:
      "Cabello 90 GM ANTIBACTERIAL #1",
    mainImage: "img/products/catalogo_carbec (410).png",
    gallery: ["img/products/catalogo_carbec (411).png",],
    category: "Belleza",
  },

  {
    id: 'HAIR 22',
    name: "CABELLO 43G",
    shortDescription: "Cabello 43G RUBIO CHAMPAGNE CARIOCA",
    longDescription:
      "Cabello 43G RUBIO CHAMPAGNE CARIOCA",
    mainImage: "img/products/catalogo_carbec (412).png",
    gallery: [],
    category: "Belleza",
  },

  {
    id: 'CA-ANT-27',
    name: "CABELLO 43G",
    shortDescription: "Cabello 43G RUBIO CLARO CARIOCA",
    longDescription:
      "Cabello 43G RUBIO CLARO CARIOCA",
    mainImage: "img/products/catalogo_carbec (413).png",
    gallery: ["img/products/catalogo_carbec (414).png",],
    category: "Belleza",
  },

  {
    id: 'HAIR 30',
    name: "CABELLO 43G",
    shortDescription: "Cabello 43G CASTAÑO CARIOCA",
    longDescription:
      "Cabello 43G CASTAÑO CARIOCA",
    mainImage: "img/products/catalogo_carbec (415).png",
    gallery: ["img/products/catalogo_carbec (416).png",],
    category: "Belleza",
  },

  // --- CABELLO TRENZA CARIOCA (colores adicionales) ---
  {
    id: 'CA-ANT-CASTAOSCURO',
    name: "CABELLO DE TRENZA 43G",
    shortDescription: "Castaño Oscuro - CARIOCA",
    longDescription: "Cabello para trenza de 43G, color castaño oscuro. Marca CARIOCA, ideal para trenzas y estilos variados.",
    mainImage: "img/products/catalogo_carbec (417).png",
    gallery: ["img/products/catalogo_carbec (418).png"],
    category: "Belleza",
  },
  {
    id: 'CA-ANT-PELIROJO',
    name: "CABELLO DE TRENZA 43G",
    shortDescription: "Pelirojo - CARIOCA",
    longDescription: "Cabello para trenza de 43G, color pelirojo. Marca CARIOCA, ideal para trenzas y estilos variados.",
    mainImage: "img/products/catalogo_carbec (419).png",
    gallery: ["img/products/catalogo_carbec (420).png"],
    category: "Belleza",
  },
  {
    id: 'CA-ANT-CHOCOLATE',
    name: "CABELLO DE TRENZA 43G",
    shortDescription: "Chocolate - CARIOCA",
    longDescription: "Cabello para trenza de 43G, color chocolate. Marca CARIOCA, ideal para trenzas y estilos variados.",
    mainImage: "img/products/catalogo_carbec (421).png",
    gallery: ["img/products/catalogo_carbec (422).png"],
    category: "Belleza",
  },
  {
    id: 'CA-ANT-RUBIO-DORADO',
    name: "CABELLO DE TRENZA 43G",
    shortDescription: "Rubio Dorado - CARIOCA",
    longDescription: "Cabello para trenza de 43G, color rubio dorado. Marca CARIOCA, ideal para trenzas y estilos variados.",
    mainImage: "img/products/catalogo_carbec (423).png",
    gallery: ["img/products/catalogo_carbec (424).png"],
    category: "Belleza",
  },
  {
    id: 'CA-ANT-NEGRO',
    name: "CABELLO DE TRENZA 43G",
    shortDescription: "Negro - CARIOCA",
    longDescription: "Cabello para trenza de 43G, color negro. Marca CARIOCA, ideal para trenzas y estilos variados.",
    mainImage: "img/products/catalogo_carbec (425).png",
    gallery: ["img/products/catalogo_carbec (426).png"],
    category: "Belleza",
  },
  {
    id: 'CA-ANT-ROJO',
    name: "CABELLO DE TRENZA 43G",
    shortDescription: "Rojo - CARIOCA",
    longDescription: "Cabello para trenza de 43G, color rojo. Marca CARIOCA, ideal para trenzas y estilos variados.",
    mainImage: "img/products/catalogo_carbec (427).png",
    gallery: ["img/products/catalogo_carbec (428).png"],
    category: "Belleza",
  },
  {
    id: 'HAIR-GREEN',
    name: "CABELLO DE TRENZA 43G",
    shortDescription: "Verde - CARIOCA (HAIR GREEN)",
    longDescription: "Cabello para trenza de 43G, color verde. Marca CARIOCA, ideal para trenzas y estilos creativos.",
    mainImage: "img/products/catalogo_carbec (429).png",
    gallery: ["img/products/catalogo_carbec (430).png"],
    category: "Belleza",
  },
  {
    id: 'HAIR-WHITE-00',
    name: "CABELLO DE TRENZA 43G",
    shortDescription: "Blanco - CARIOCA (HAIR WHITE 00)",
    longDescription: "Cabello para trenza de 43G, color blanco. Marca CARIOCA, ideal para trenzas y estilos creativos.",
    mainImage: "img/products/catalogo_carbec (431).png",
    gallery: [],
    category: "Belleza",
  },
  {
    id: 'HPM02-HPL03',
    name: "DONA PARA PELO",
    shortDescription: "Tamaño M (HPM02) y Tamaño L (HPL03)",
    longDescription: "Dona para pelo de alta calidad para lograr recogidos perfectos. Disponible en tamaño M (CÓD. HPM02) y tamaño L (CÓD. HPL03).",
    mainImage: "img/products/catalogo_carbec (432).png",
    gallery: [],
    category: "Belleza",
  },
  {
    id: 'JYD701B',
    name: "PEINE PALITO NEGROS",
    shortDescription: "Peine palito negros 100/12 CÓD. JYD701B",
    longDescription: "Peine palito negro de alta calidad, ideal para peinar y estilizar el cabello con precisión.",
    mainImage: "img/products/catalogo_carbec (433).png",
    gallery: [],
    category: "Belleza",
  },
  {
    id: 'JYD703C',
    name: "PEINE PALITO COLORES",
    shortDescription: "Peine palito colores 230/12 CÓD. JYD703C",
    longDescription: "Peine palito de colores de alta calidad, ideal para peinar y estilizar el cabello.",
    mainImage: "img/products/catalogo_carbec (434).png",
    gallery: [],
    category: "Belleza",
  },
  {
    id: 'TOWEL-RING-COLORS',
    name: "TOWEL RING COLORES",
    shortDescription: "Towel Ring colores 120/12 PCS",
    longDescription: "Towel Ring de colores de alta calidad, ideal para sujetar el cabello de manera segura y cómoda.",
    mainImage: "img/products/catalogo_carbec (435).png",
    gallery: [],
    category: "Belleza",
  },
  {
    id: 'TR2-45',
    name: "TOWEL RING BLANCO Y NEGRO",
    shortDescription: "Towel Ring Blanco y Negro CÓD. TR2-45",
    longDescription: "Towel Ring en colores blanco y negro de alta calidad.",
    mainImage: "img/products/catalogo_carbec (436).png",
    gallery: [],
    category: "Belleza",
  },
  {
    id: 'TR2-47',
    name: "TOWEL RING BLANCO Y AZUL",
    shortDescription: "Towel Ring Blanco y Azul CÓD. TR2-47",
    longDescription: "Towel Ring en colores blanco y azul de alta calidad.",
    mainImage: "img/products/catalogo_carbec (437).png",
    gallery: [],
    category: "Belleza",
  },
  {
    id: 'TR2-42',
    name: "TOWEL RING ROJO Y BLANCO",
    shortDescription: "Towel Ring Rojo y Blanco CÓD. TR2-42",
    longDescription: "Towel Ring en colores rojo y blanco de alta calidad.",
    mainImage: "img/products/catalogo_carbec (438).png",
    gallery: [],
    category: "Belleza",
  },
  {
    id: 'TR2-40',
    name: "TOWEL RING CREMA VERDE BLANCO",
    shortDescription: "Towel Ring Crema, Verde y Blanco CÓD. TR2-40",
    longDescription: "Towel Ring en colores crema, verde y blanco de alta calidad.",
    mainImage: "img/products/catalogo_carbec (440).png",
    gallery: ["img/products/catalogo_carbec (439).png"],
    category: "Belleza",
  },
  {
    id: 'TR20301',
    name: "MULTI TOWEL RING NEON",
    shortDescription: "Multi Towel Ring Neon 144PCS CÓD. TR20301",
    longDescription: "Multi Towel Ring de colores neón de alta calidad. 144 unidades en colores vibrantes.",
    mainImage: "img/products/catalogo_carbec (441).png",
    gallery: [],
    category: "Belleza",
  },
  {
    id: 'ESPIRAL-MINI',
    name: "ESPIRAL MINI",
    shortDescription: "Espiral Mini de colores",
    longDescription: "Espiral mini de colores de alta calidad, ideal para sujetar el cabello de manera elegante.",
    mainImage: "img/products/catalogo_carbec (442).png",
    gallery: [],
    category: "Belleza",
  },
  {
    id: 'TR20302',
    name: "TOWEL RING MIX COLORS",
    shortDescription: "Towel Ring Mix Colors CÓD. TR20302",
    longDescription: "Towel Ring en mezcla de colores de alta calidad.",
    mainImage: "img/products/catalogo_carbec (443).png",
    gallery: [],
    category: "Belleza",
  },
  {
    id: 'DTR3201',
    name: "COLAS PARA CABELLO",
    shortDescription: "Colas para cabello CÓD. DTR3201",
    longDescription: "Colas decorativas para cabello con diseños variados y coloridos.",
    mainImage: "img/products/catalogo_carbec (444).png",
    gallery: [],
    category: "Belleza",
  },

  // --- EVENTOS ---
  { id: 'XS908', name: "GLOBOS", shortDescription: "100 PAQ DE 144 GLOBOS CÓD. XS908", longDescription: "Paquete de 100 bolsas con 144 globos cada una. Colores variados, ideales para fiestas y eventos.", mainImage: "img/products/catalogo_carbec (446).png", gallery: [], category: "Eventos" },
  { id: 'FC001', name: "CORTINA DE FLECO", shortDescription: "Dorado / Plateado / Rosado CÓD. FC001", longDescription: "Cortina de fleco decorativa en colores dorado, plateado y rosado. Perfecta para fiestas y celebraciones.", mainImage: "img/products/catalogo_carbec (447).png", gallery: [], category: "Eventos" },
  { id: 'GB01', name: "GLOBILIN GLOBOS BLANCO", shortDescription: "Globos blancos GLOBILIN CÓD. GB01", longDescription: "Globos blancos GLOBILIN de alta calidad para decorar fiestas y eventos.", mainImage: "img/products/catalogo_carbec (448).png", gallery: [], category: "Eventos" },
  { id: 'GB018', name: "GLOBOS METAL COLOR", shortDescription: "Globos metal color CÓD. GB018", longDescription: "Globos metálicos de colores variados para fiestas y eventos especiales.", mainImage: "img/products/catalogo_carbec (449).png", gallery: [], category: "Eventos" },
  { id: 'GB028', name: "GLOBOS METAL", shortDescription: "Globos metal CÓD. GB028", longDescription: "Globos metálicos de alta calidad para fiestas y eventos.", mainImage: "img/products/catalogo_carbec (450).png", gallery: [], category: "Eventos" },
  { id: 'GB036', name: "GENDER REVEAL GLOBO", shortDescription: "Globo Gender Reveal CÓD. GB036", longDescription: "Globo especial para revelación de género, ideal para celebraciones únicas.", mainImage: "img/products/catalogo_carbec (451).png", gallery: [], category: "Eventos" },
  { id: 'GB04', name: "GLOBILIN GLOBOS AMARILLO", shortDescription: "Globos amarillos GLOBILIN CÓD. GB04", longDescription: "Globos amarillos GLOBILIN de alta calidad.", mainImage: "img/products/catalogo_carbec (452).png", gallery: [], category: "Eventos" },
  { id: 'GB05', name: "GLOBILIN GLOBOS VERDE", shortDescription: "Globos verdes GLOBILIN CÓD. GB05", longDescription: "Globos verdes GLOBILIN de alta calidad.", mainImage: "img/products/catalogo_carbec (453).png", gallery: [], category: "Eventos" },
  { id: 'GB06', name: "GLOBILIN GLOBOS AZUL", shortDescription: "Globos azules GLOBILIN CÓD. GB06", longDescription: "Globos azules GLOBILIN de alta calidad.", mainImage: "img/products/catalogo_carbec (454).png", gallery: [], category: "Eventos" },
  { id: 'GB07', name: "GLOBILIN GLOBOS MORADO", shortDescription: "Globos morados GLOBILIN CÓD. GB07", longDescription: "Globos morados GLOBILIN de alta calidad.", mainImage: "img/products/catalogo_carbec (455).png", gallery: [], category: "Eventos" },
  { id: 'GB08', name: "GLOBILIN GLOBOS ROSADO", shortDescription: "Globos rosados GLOBILIN CÓD. GB08", longDescription: "Globos rosados GLOBILIN de alta calidad.", mainImage: "img/products/catalogo_carbec (456).png", gallery: [], category: "Eventos" },
  { id: 'GB09', name: "GLOBILIN GLOBOS NARANJA", shortDescription: "Globos naranja GLOBILIN CÓD. GB09", longDescription: "Globos naranja GLOBILIN de alta calidad.", mainImage: "img/products/catalogo_carbec (457).png", gallery: [], category: "Eventos" },
  { id: 'PB-240', name: "GLOBOS CON IMPRESION", shortDescription: "Globos con impresión CÓD. PB-240", longDescription: "Globos con impresión para eventos corporativos y celebraciones personalizadas.", mainImage: "img/products/catalogo_carbec (458).png", gallery: [], category: "Eventos" },
  { id: 'RGC186', name: "GLOBOS BLANCO CRUBEC", shortDescription: "Globos blancos CRUBEC CÓD. RGC186", longDescription: "Globos blancos CRUBEC de alta calidad.", mainImage: "img/products/catalogo_carbec (459).png", gallery: [], category: "Eventos" },
  { id: 'RGC187', name: "GLOBOS AZUL METALICO CRUBEC", shortDescription: "Globos azul metálico CRUBEC CÓD. RGC187", longDescription: "Globos azul metálico CRUBEC para fiestas especiales.", mainImage: "img/products/catalogo_carbec (460).png", gallery: [], category: "Eventos" },
  { id: 'RGC189', name: "GLOBOS ROSADO CRUBEC", shortDescription: "Globos rosados CRUBEC CÓD. RGC189", longDescription: "Globos rosados CRUBEC de alta calidad.", mainImage: "img/products/catalogo_carbec (461).png", gallery: [], category: "Eventos" },
  { id: 'RGC191', name: "GLOBOS MORADO CRUBEC", shortDescription: "Globos morados CRUBEC CÓD. RGC191", longDescription: "Globos morados CRUBEC de alta calidad.", mainImage: "img/products/catalogo_carbec (462).png", gallery: [], category: "Eventos" },
  { id: 'RGC192', name: "GLOBOS AMARILLO CRUBEC", shortDescription: "Globos amarillos CRUBEC CÓD. RGC192", longDescription: "Globos amarillos CRUBEC de alta calidad.", mainImage: "img/products/catalogo_carbec (463).png", gallery: [], category: "Eventos" },
  { id: 'RGC194', name: "GLOBOS VERDE CRUBEC", shortDescription: "Globos verdes CRUBEC CÓD. RGC194", longDescription: "Globos verdes CRUBEC de alta calidad.", mainImage: "img/products/catalogo_carbec (464).png", gallery: [], category: "Eventos" },
  { id: 'RGC195', name: "GLOBOS NEGRO CRUBEC", shortDescription: "Globos negros CRUBEC CÓD. RGC195", longDescription: "Globos negros CRUBEC de alta calidad.", mainImage: "img/products/catalogo_carbec (465).png", gallery: [], category: "Eventos" },
  { id: 'RGC197', name: "GLOBOS NARANJA CRUBEC", shortDescription: "Globos naranja CRUBEC CÓD. RGC197", longDescription: "Globos naranja CRUBEC de alta calidad.", mainImage: "img/products/catalogo_carbec (466).png", gallery: [], category: "Eventos" },
  { id: 'RGC41', name: "GLOBO 39PCS", shortDescription: "Globo 39PCS CÓD. RGC41", longDescription: "Set de 39 globos en colores variados para decorar fiestas.", mainImage: "img/products/catalogo_carbec (467).png", gallery: [], category: "Eventos" },
  { id: 'WB001', name: "GLOBO DE AGUA", shortDescription: "Globo de agua 200SET CÓD. WB001", longDescription: "Globos de agua, 200 por set. Perfectos para juegos al aire libre.", mainImage: "img/products/catalogo_carbec (468).png", gallery: [], category: "Eventos" },

  // --- FERRETERÍA ---
  { id: 'PS828', name: "BOTAS DE GOMAS", shortDescription: "Botas de goma CRUBEC Tallas 40/41/42", longDescription: "Botas de goma CRUBEC para trabajo en ambientes húmedos. Tallas 40, 41 y 42.", mainImage: "img/products/catalogo_carbec (470).png", gallery: [], category: "Ferretería" },
  { id: '4ACS-40', name: "BALANZA DIGITAL", shortDescription: "Balanza digital 4/1 CRUBEC CÓD. ACS-40", longDescription: "Balanza digital de alta precisión para uso comercial y doméstico.", mainImage: "img/products/catalogo_carbec (471).png", gallery: [], category: "Ferretería" },
  { id: 'ACS-4K', name: "BALANZA 40KG", shortDescription: "Balanza 40KG plato plástico CRUBEC CÓD. ACS-4K", longDescription: "Balanza de 40kg con plato plástico, ideal para negocios y comercios.", mainImage: "img/products/catalogo_carbec (473).png", gallery: [], category: "Ferretería" },
  { id: '120-41K', name: "CINTA LED 120 12V", shortDescription: "Cinta LED 120 12V 4100K 5M POKER CÓD. 120-41K", longDescription: "Cinta LED 120 luces, 12V, 4100K. Rollo de 5 metros. Marca POKER.", mainImage: "img/products/catalogo_carbec (474).png", gallery: [], category: "Ferretería" },
  { id: 'CINTA-240-LED', name: "CINTA LED 240 12V", shortDescription: "Cinta LED 240 12V 4100K/6500K 5M POKER", longDescription: "Cinta LED 240 luces, 12V. Rollo 5 metros. 4100K y 6500K. Marca POKER.", mainImage: "img/products/catalogo_carbec (475).png", gallery: [], category: "Ferretería" },
  { id: 'PK-120L', name: "CINTA LED 110V POKER", shortDescription: "Cinta LED 120 LEDS 110V 6500K 10M CÓD. PK-120L", longDescription: "Cinta LED 120 luces, 110V, 6500K, 10 metros. Marca POKER.", mainImage: "img/products/catalogo_carbec (476).png", gallery: [], category: "Ferretería" },
  { id: '307', name: "ZOCALO GOMA Y PORCELANA", shortDescription: "Zócalo de goma y porcelana 400PCS POKER CÓD. 307", longDescription: "Zócalo de goma y porcelana de alta calidad. 400 piezas. Marca POKER.", mainImage: "img/products/catalogo_carbec (477).png", gallery: [], category: "Ferretería" },
  { id: '94918', name: "BOMBILLO ESPIRAL 30W", shortDescription: "Bombillo espiral 30W 6500K DUBAI CÓD. 94918", longDescription: "Bombillo espiral 30W, 6500K. Marca DUBAI.", mainImage: "img/products/catalogo_carbec (478).png", gallery: [], category: "Ferretería" },
  { id: '517', name: "RECEPTACULO DE PORCELANA", shortDescription: "Receptáculo de porcelana 240PCS CÓD. 517", longDescription: "Receptáculo de porcelana para instalaciones eléctricas. 240 piezas.", mainImage: "img/products/catalogo_carbec (479).png", gallery: [], category: "Ferretería" },
  { id: 'BS518', name: "PALA DE AGRICULTURA", shortDescription: "Pala de agricultura 12/1 CÓD. BS518", longDescription: "Pala de agricultura robusta y duradera para trabajo en el campo.", mainImage: "img/products/catalogo_carbec (480).png", gallery: [], category: "Ferretería" },
  { id: 'BS819', name: "PALA DE CONSTRUCCION", shortDescription: "Pala de construcción 12/1 CÓD. BS819", longDescription: "Pala de construcción resistente para obras y excavaciones.", mainImage: "img/products/catalogo_carbec (481).png", gallery: [], category: "Ferretería" },
  { id: 'BS525', name: "PALA DE CORTE", shortDescription: "Pala de corte 12/1 CÓD. BS525", longDescription: "Pala de corte para jardinería y trabajo de campo.", mainImage: "img/products/catalogo_carbec (482).png", gallery: [], category: "Ferretería" },
  { id: 'CB-LED', name: "BOMBILLOS LED CRUBEC CB", shortDescription: "Bombillos LED CB-20/30/40/50W CRUBEC", longDescription: "Bombillos LED alta eficiencia. 20W, 30W, 40W y 50W. Marca CRUBEC.", mainImage: "img/products/catalogo_carbec (483).png", gallery: [], category: "Ferretería" },
  { id: 'GB-LED', name: "BOMBILLOS LED CRUBEC GB", shortDescription: "Bombillos LED GB-7/9W/12W/15W CRUBEC", longDescription: "Bombillos LED alta eficiencia. 7W, 9W, 12W y 15W. Marca CRUBEC.", mainImage: "img/products/catalogo_carbec (484).png", gallery: [], category: "Ferretería" },
  { id: 'CET1615PK', name: "TAPE ELECTRICO", shortDescription: "Tape eléctrico 50/10PCS 15 YARDS CÓD. CET1615PK", longDescription: "Tape eléctrico de alta calidad. 10 rollos de 15 yardas.", mainImage: "img/products/catalogo_carbec (485).png", gallery: [], category: "Ferretería" },
  { id: 'CPN071KG', name: "MALLA DE NYLON VERDE", shortDescription: "Malla de nylon verde 1000M 15.4LB CÓD. CPN071KG", longDescription: "Malla de nylon verde de alta resistencia. 1000 metros.", mainImage: "img/products/catalogo_carbec (486).png", gallery: [], category: "Ferretería" },
  { id: 'CPN071KR', name: "MALLA DE NYLON ROJO", shortDescription: "Malla de nylon rojo 1000M 15.4LB CÓD. CPN071KR", longDescription: "Malla de nylon rojo de alta resistencia. 1000 metros.", mainImage: "img/products/catalogo_carbec (487).png", gallery: [], category: "Ferretería" },
  { id: 'CR-0518', name: "LINTERNA CRUBEC LED", shortDescription: "Linterna CRUBEC 4+1 LED con detector dinero CÓD. CR-0518", longDescription: "Linterna CRUBEC con 4+1 LEDs y detector de billetes.", mainImage: "img/products/catalogo_carbec (488).png", gallery: [], category: "Ferretería" },
  { id: 'CR-EXT', name: "EXTENSION CRUBEC", shortDescription: "Extensiones eléctricas CRUBEC 6FT a 50FT", longDescription: "Extensiones eléctricas CRUBEC de 6 a 50 pies para uso doméstico e industrial.", mainImage: "img/products/catalogo_carbec (489).png", gallery: [], category: "Ferretería" },
  { id: 'CR-234', name: "CANDADO CRUBEC 25/30/40", shortDescription: "Candado 25/30/40MM CÓD. CR-234", longDescription: "Candado de alta seguridad en tamaños 25, 30 y 40mm.", mainImage: "img/products/catalogo_carbec (490).png", gallery: [], category: "Ferretería" },
  { id: 'CR-2500', name: "CEMENTO PVC", shortDescription: "Cemento PVC 14G CÓD. CR-2500", longDescription: "Cemento PVC de alta calidad para instalaciones de plomería.", mainImage: "img/products/catalogo_carbec (491).png", gallery: [], category: "Ferretería" },
  { id: 'CR-2B1', name: "LINTERNA CRUBEC 1 LED", shortDescription: "Linterna CRUBEC 1 LED 2B CÓD. CR-2B1", longDescription: "Linterna CRUBEC compacta con 1 LED. Para uso cotidiano y emergencias.", mainImage: "img/products/catalogo_carbec (492).png", gallery: [], category: "Ferretería" },
  { id: 'CR-3309', name: "LINTERNA CRUBEC 9 LED", shortDescription: "Linterna CRUBEC negra 9 LED grande CÓD. CR-3309", longDescription: "Linterna CRUBEC con 9 LEDs de alta potencia. Gran iluminación.", mainImage: "img/products/catalogo_carbec (493).png", gallery: [], category: "Ferretería" },
  { id: 'CR-345', name: "CANDADO CRUBEC 30/40/50", shortDescription: "Candado 30/40/50MM CÓD. CR-345", longDescription: "Candado de alta seguridad en tamaños 30, 40 y 50mm.", mainImage: "img/products/catalogo_carbec (494).png", gallery: [], category: "Ferretería" },
  { id: 'CR-CINTA', name: "CINTA ADHESIVA CRUBEC", shortDescription: "Cinta adhesiva CRUBEC CÓD. CR-4080/4100/4300", longDescription: "Cinta adhesiva para uso en oficina, hogar y construcción.", mainImage: "img/products/catalogo_carbec (495).png", gallery: [], category: "Ferretería" },
  { id: 'CR-7404', name: "LINTERNA SOLAR 1 LED", shortDescription: "Linterna solar 1 LED CRUBEC CÓD. CR-7404", longDescription: "Linterna solar recargable. Ideal para zonas sin electricidad.", mainImage: "img/products/catalogo_carbec (496).png", gallery: [], category: "Ferretería" },
  { id: 'CR-8686', name: "LINTERNA LED + USB", shortDescription: "Linterna 1 LED + USB CRUBEC CÓD. CR-8686", longDescription: "Linterna con LED y puerto USB para carga de dispositivos.", mainImage: "img/products/catalogo_carbec (497).png", gallery: [], category: "Ferretería" },
  { id: 'CR-Y10', name: "EXTENSION AMARILLA CRUBEC", shortDescription: "Extensión amarilla CRUBEC 10/15/20FT 2000W", longDescription: "Extensión eléctrica amarilla. 10, 15 y 20 pies. 2000W.", mainImage: "img/products/catalogo_carbec (498).png", gallery: [], category: "Ferretería" },
  { id: 'CR-NARANJA', name: "EXTENSION NARANJA CON REGLETA", shortDescription: "Extensión naranja con regleta CRUBEC 12/15/20FT", longDescription: "Extensión naranja con regleta integrada. 12, 15 y 20 pies.", mainImage: "img/products/catalogo_carbec (499).png", gallery: [], category: "Ferretería" },
  { id: 'CRP-40', name: "CANDADO CRUBEC CRP", shortDescription: "Candado CRUBEC CÓD. CRP-40/50/60 (40/50/60MM)", longDescription: "Candado CRUBEC de alta seguridad. Tamaños 40, 50 y 60mm.", mainImage: "img/products/catalogo_carbec (500).png", gallery: [], category: "Ferretería" },
  { id: 'EECR-EXT', name: "EXTENSION BLANCA CRUBEC", shortDescription: "Extensión eléctrica blanca CRUBEC 12/15/50FT", longDescription: "Extensión eléctrica blanca CRUBEC para uso doméstico.", mainImage: "img/products/catalogo_carbec (501).png", gallery: [], category: "Ferretería" },
  { id: 'EPK-EXT', name: "EXTENSION BLANCA POKER", shortDescription: "Extensión eléctrica blanca POKER 9/12/15FT", longDescription: "Extensión eléctrica blanca POKER de alta calidad.", mainImage: "img/products/catalogo_carbec (502).png", gallery: [], category: "Ferretería" },
  { id: 'EPS016', name: "REGLETA 6 ENTRADAS", shortDescription: "Regleta 1200W 6 entradas CÓD. EPS016", longDescription: "Regleta con 6 entradas y 1200W. Ideal para múltiples dispositivos.", mainImage: "img/products/catalogo_carbec (503).png", gallery: [], category: "Ferretería" },
  { id: 'EPS18', name: "REGLETA CRUBEC USB", shortDescription: "Regleta CRUBEC con USB CÓD. EPS18", longDescription: "Regleta con puertos USB para carga de dispositivos.", mainImage: "img/products/catalogo_carbec (504).png", gallery: [], category: "Ferretería" },
  { id: 'PK-608N', name: "REGLETA POKER 6 ENTRADAS", shortDescription: "Regleta POKER 600W 6 entradas CÓD. PK-608N", longDescription: "Regleta POKER con 6 entradas y 600W.", mainImage: "img/products/catalogo_carbec (505).png", gallery: [], category: "Ferretería" },
  { id: 'FZ-100', name: "BOMBILLO FROZEN POKER", shortDescription: "Bombillo incandescente Frozen POKER CÓD. FZ-100", longDescription: "Bombillo de diseño especial Frozen. Marca POKER.", mainImage: "img/products/catalogo_carbec (506).png", gallery: [], category: "Ferretería" },
  { id: 'GO-12', name: "SUPER GLUE GOTA LOCA", shortDescription: "Super Glue Gota Loca CÓD. GO-12", longDescription: "Super Glue de alta resistencia. Pega metal, cerámica, plástico y más.", mainImage: "img/products/catalogo_carbec (507).png", gallery: [], category: "Ferretería" },
  { id: 'GR-168', name: "REGULADOR DE GAS POKER", shortDescription: "Regulador de gas 13CM POKER CÓD. GR-168", longDescription: "Regulador de gas para uso doméstico. Marca POKER.", mainImage: "img/products/catalogo_carbec (508).png", gallery: [], category: "Ferretería" },
  { id: 'HLH60', name: "CANDADO HENGBAO 60MM", shortDescription: "Candado Hengbao 60MM CÓD. HLH60", longDescription: "Candado Hengbao 60mm de alta seguridad.", mainImage: "img/products/catalogo_carbec (509).png", gallery: [], category: "Ferretería" },
  { id: 'HLH70', name: "CANDADO SHI-HUAN 70MM", shortDescription: "Candado Shi-Huan 70MM CÓD. HLH70", longDescription: "Candado Shi-Huan 70mm de alta seguridad.", mainImage: "img/products/catalogo_carbec (510).png", gallery: [], category: "Ferretería" },
  { id: 'HLS60', name: "CANDADO 60MM", shortDescription: "Candado 60MM CÓD. HLS60", longDescription: "Candado 60mm de alta seguridad.", mainImage: "img/products/catalogo_carbec (511).png", gallery: [], category: "Ferretería" },
  { id: 'HS1540', name: "CANDADO #40", shortDescription: "Candado 2205 #40 CÓD. HS1540", longDescription: "Candado 2205 tamaño #40 de alta calidad.", mainImage: "img/products/catalogo_carbec (512).png", gallery: [], category: "Ferretería" },
  { id: 'HS1801', name: "CANDADO GUSAN FANAL", shortDescription: "Candado Gusan Fanal #32MM CÓD. HS1801", longDescription: "Candado Gusan Fanal 32mm de alta seguridad.", mainImage: "img/products/catalogo_carbec (513).png", gallery: [], category: "Ferretería" },
  { id: 'HS1802', name: "CANDADO GUSAN FORZA", shortDescription: "Candado Gusan Forza #38MM CÓD. HS1802", longDescription: "Candado Gusan Forza 38mm de alta seguridad.", mainImage: "img/products/catalogo_carbec (514).png", gallery: [], category: "Ferretería" },
  { id: 'MT37175', name: "MASKING TAPE", shortDescription: "Masking tape 18MMX25YDS CÓD. MT37175", longDescription: "Masking tape de alta calidad para pintura y uso general.", mainImage: "img/products/catalogo_carbec (515).png", gallery: [], category: "Ferretería" },
  { id: 'PK-LED-P', name: "BOMBILLO LED POKER P", shortDescription: "Bombillo LED POKER P20/P30/P40/P50W", longDescription: "Bombillos LED POKER de alta eficiencia. 20W, 30W, 40W y 50W.", mainImage: "img/products/catalogo_carbec (516).png", gallery: [], category: "Ferretería" },
  { id: 'PCF-140', name: "CINTA PVC", shortDescription: "Cinta PVC 35CM CÓD. PCF-140/PCF-180", longDescription: "Cinta PVC de alta calidad para embalaje y construcción.", mainImage: "img/products/catalogo_carbec (517).png", gallery: [], category: "Ferretería" },
  { id: 'PDY-40', name: "CANDADO CRUBEC PDY", shortDescription: "Candado CRUBEC PDY-40/50/60MM", longDescription: "Candado CRUBEC de alta seguridad. Tamaños 40, 50 y 60mm.", mainImage: "img/products/catalogo_carbec (518).png", gallery: [], category: "Ferretería" },
  { id: 'PG-EXT', name: "EXTENSION VERDE POKER", shortDescription: "Extensión eléctrica verde POKER PG-12/15/18FT", longDescription: "Extensión eléctrica verde POKER. 12, 15 y 18 pies.", mainImage: "img/products/catalogo_carbec (519).png", gallery: [], category: "Ferretería" },
  { id: 'PG-168', name: "PEGA LOCA", shortDescription: "Pega Loca 3G CÓD. PG-168", longDescription: "Pega loca de alta resistencia. Secado ultra rápido.", mainImage: "img/products/catalogo_carbec (520).png", gallery: [], category: "Ferretería" },
  { id: 'PGL5050', name: "GUANTE MIX COLORS CRUBEC", shortDescription: "Guante mix colors CRUBEC CÓD. PGL5050", longDescription: "Guantes de trabajo en mezcla de colores CRUBEC. Resistentes y cómodos.", mainImage: "img/products/catalogo_carbec (521).png", gallery: [], category: "Ferretería" },
  { id: 'PK-113', name: "ROSETA DE PORCELANA POKER", shortDescription: "Roseta de porcelana 113MM POKER CÓD. PK-113", longDescription: "Roseta de porcelana para instalaciones eléctricas. 113mm. Marca POKER.", mainImage: "img/products/catalogo_carbec (522).png", gallery: [], category: "Ferretería" },
  { id: 'PK-1010', name: "LINTERNA RECARGABLE POKER", shortDescription: "Linterna recargable LED POKER CÓD. PK-1010", longDescription: "Linterna LED recargable POKER de alta potencia.", mainImage: "img/products/catalogo_carbec (523).png", gallery: [], category: "Ferretería" },
  { id: 'PK-2121', name: "LINTERNA 1 LED POKER", shortDescription: "Linterna 1 LED recargable POKER CÓD. PK-2121", longDescription: "Linterna LED recargable POKER compacta y eficiente.", mainImage: "img/products/catalogo_carbec (524).png", gallery: [], category: "Ferretería" },
  { id: 'PK-8070', name: "LINTERNA USB POKER", shortDescription: "Linterna recargable USB POKER CÓD. PK-8070", longDescription: "Linterna recargable vía USB POKER.", mainImage: "img/products/catalogo_carbec (525).png", gallery: [], category: "Ferretería" },
  { id: 'PK-EXT-MAMEY', name: "EXTENSION MAMEY POKER", shortDescription: "Extensión mamey POKER PK-6FTN/9FTN 2000W", longDescription: "Extensión mamey POKER. 6 y 9 pies. 2000W.", mainImage: "img/products/catalogo_carbec (526).png", gallery: [], category: "Ferretería" },
  { id: 'PK-200', name: "CANDADO POKER PK", shortDescription: "Candado POKER PK-200/300/400 (25/30/40MM)", longDescription: "Candado POKER de alta seguridad. 25, 30 y 40mm.", mainImage: "img/products/catalogo_carbec (527).png", gallery: [], category: "Ferretería" },
  { id: 'PK-QB60', name: "BOMBA DE AGUA POKER", shortDescription: "Bomba de agua POKER 0.37KW 0.5HP CÓD. PK-QB60", longDescription: "Bomba de agua eléctrica POKER 0.37KW / 0.5HP para uso doméstico.", mainImage: "img/products/catalogo_carbec (528).png", gallery: [], category: "Ferretería" },
  { id: 'PK-R9W', name: "BOMBILLO RECARGABLE POKER", shortDescription: "Bombillo LED recargable POKER PK-R9W/R12W (9W/12W)", longDescription: "Bombillo LED recargable POKER. 9W y 12W. Funciona con y sin electricidad.", mainImage: "img/products/catalogo_carbec (529).png", gallery: [], category: "Ferretería" },
  { id: 'PL-LED', name: "BOMBILLO LED POKER PL", shortDescription: "Bombillo LED POKER PL-7/9/12W", longDescription: "Bombillos LED POKER de alta eficiencia. 7W, 9W y 12W.", mainImage: "img/products/catalogo_carbec (530).png", gallery: [], category: "Ferretería" },
  { id: 'PL-CUAD', name: "PANEL LED CUADRADO POKER", shortDescription: "Panel LED cuadrado POKER 12W/18W", longDescription: "Panel LED cuadrado POKER. 12W y 18W. Iluminación uniforme.", mainImage: "img/products/catalogo_carbec (531).png", gallery: [], category: "Ferretería" },
  { id: 'PL-REDON', name: "PANEL LED REDONDO POKER", shortDescription: "Panel LED redondo POKER 12W/18W", longDescription: "Panel LED redondo POKER. 12W y 18W. Iluminación uniforme.", mainImage: "img/products/catalogo_carbec (532).png", gallery: [], category: "Ferretería" },
  { id: 'PK-MAMEY-R', name: "EXTENSION MAMEY CON REGLETA POKER", shortDescription: "Extensión mamey con regleta POKER 9FT 1900W", longDescription: "Extensión mamey con regleta POKER. 9 pies, 1900W. Múltiples salidas.", mainImage: "img/products/catalogo_carbec (533).png", gallery: [], category: "Ferretería" },
  { id: 'PN-SOGA', name: "SOGA JERAMA", shortDescription: "Soga JERAMA 6MM/8MM/12MM 20LBS", longDescription: "Soga JERAMA de alta resistencia. Calibres 6, 8 y 12mm. 20 libras.", mainImage: "img/products/catalogo_carbec (534).png", gallery: [], category: "Ferretería" },
  { id: 'PR-E90', name: "LAMPARA LED EXTERIOR POKER", shortDescription: "Lámpara LED exterior POKER 90W/120W", longDescription: "Lámpara LED para exteriores POKER. 90W y 120W.", mainImage: "img/products/catalogo_carbec (535).png", gallery: [], category: "Ferretería" },
  { id: 'PR-L15', name: "BOMBILLO EMERGENCIA POKER", shortDescription: "Bombillo LED recargable emergencia POKER 15W CÓD. PR-L15", longDescription: "Bombillo LED recargable de emergencia 15W POKER. Funciona en cortes de luz.", mainImage: "img/products/catalogo_carbec (536).png", gallery: [], category: "Ferretería" },
  { id: 'RB-100', name: "BANDA ELASTICA JERAMA", shortDescription: "Banda elástica JERAMA 100G/200G/400G", longDescription: "Banda elástica JERAMA. Presentaciones de 100g, 200g y 400g.", mainImage: "img/products/catalogo_carbec (537).png", gallery: [], category: "Ferretería" },
  { id: 'RAT-01', name: "TRAMPA PARA RATONES", shortDescription: "Trampa para ratones Peq/Med/Gde CÓD. RAT-01/02/03", longDescription: "Trampa para ratones en tamaños pequeño, mediano y grande.", mainImage: "img/products/catalogo_carbec (538).png", gallery: [], category: "Ferretería" },
  { id: 'RTSR-41', name: "SOGA 4MM JERAMA", shortDescription: "Soga 4MM JERAMA 20LBS (Verde/Rojo/Amarillo)", longDescription: "Soga de 4mm JERAMA 20 libras. Verde, rojo y amarillo.", mainImage: "img/products/catalogo_carbec (539).png", gallery: [], category: "Ferretería" },
  { id: 'UF-30', name: "LAMPARA LED 30W", shortDescription: "Lámpara LED 30W CÓD. UF-30", longDescription: "Lámpara LED 30W de alta eficiencia para espacios amplios.", mainImage: "img/products/catalogo_carbec (540).png", gallery: [], category: "Ferretería" },
  { id: 'M205-18M', name: "MACHETE MANGO DE MADERA", shortDescription: "Machete mango de madera CÓD. M205-18M", longDescription: "Machete con mango de madera de alta calidad para trabajo agrícola.", mainImage: "img/products/catalogo_carbec (541).png", gallery: [], category: "Ferretería" },
  { id: 'M205-22', name: "MACHETE CON FILO", shortDescription: "Machete con filo CÓD. M205-22", longDescription: "Machete con filo de alta calidad para trabajo agrícola.", mainImage: "img/products/catalogo_carbec (542).png", gallery: [], category: "Ferretería" },
  { id: 'M205-22CF', name: "MACHETE MANGO BLANCO", shortDescription: "Machete mango blanco CÓD. M205-22CF", longDescription: "Machete con mango blanco de alta calidad para trabajo agrícola.", mainImage: "img/products/catalogo_carbec (543).png", gallery: [], category: "Ferretería" },
  { id: 'M205-22M', name: "MACHETE MANGO MADERA", shortDescription: "Machete mango de madera CÓD. M205-22M", longDescription: "Machete con mango de madera. Diseño ergonómico para campo.", mainImage: "img/products/catalogo_carbec (544).png", gallery: [], category: "Ferretería" },
  { id: 'M205-22PN', name: "MACHETE MANGO MADERA NEGRO", shortDescription: "Machete mango de madera negro CÓD. M205-22PN", longDescription: "Machete con mango de madera negro. Resistente y ergonómico.", mainImage: "img/products/catalogo_carbec (545).png", gallery: [], category: "Ferretería" },
  { id: 'SRC021', name: "SOGA RAFINA JERAMA", shortDescription: "Soga rafina JERAMA 1 LBR CÓD. SRC021", longDescription: "Soga rafina JERAMA de alta resistencia. Presentación de 1 libra.", mainImage: "img/products/catalogo_carbec (546).png", gallery: [], category: "Ferretería" },





];


// no modificar
window.products = products;

window.getProductById = function(id) {
  return products.find((p) => String(p.id) === String(id));
};


