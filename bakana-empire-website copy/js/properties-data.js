/**
 * ============================================================
 * BAKANA EMPIRE — Properties Data
 * ============================================================
 * ADMIN INSTRUCTIONS:
 * To add or edit a listing, simply edit this file.
 * 1. Copy an existing object
 * 2. Change the "id" (must be unique, e.g. "rent-09")
 * 3. Fill the fields
 * 4. Save and refresh the website
 *
 * Fields:
 * - id          : unique string (used in URLs)
 * - type        : "rent" | "sale"
 * - category    : "apartamento" | "vivenda" | "escritorio" | "comercial" | "penthouse" | "terreno"
 * - title_pt / title_en
 * - location    : short location string
 * - municipality: for filtering (Patriota, Benfica, Talatona, Cruzeiro, etc.)
 * - price       : number (in kzs)
 * - priceLabel_pt / priceLabel_en  (e.g. "/ mês", "total")
 * - bedrooms    : number or "T3", "T4+" etc. (string is fine)
 * - status      : "disponivel" | "novo" | "usado" | "reservado"
 * - modality_pt / modality_en
 * - description_pt / description_en
 * - features    : array of strings
 * - images      : array of image URLs (first one is main)
 * - whatsappMsg_pt / whatsappMsg_en
 * - featured    : true/false (shows on homepage)
 * ============================================================
 */

const PROPERTIES = [
  // ========== RENTALS ==========
  {
    id: "rent-01",
    type: "rent",
    category: "penthouse",
    title_pt: "Penthouse de Luxo",
    title_en: "Luxury Penthouse",
    location: "Patriota, Estrada Principal",
    municipality: "Patriota",
    price: 1750000,
    priceLabel_pt: "/ mês",
    priceLabel_en: "/ month",
    bedrooms: "T4+",
    status: "disponivel",
    modality_pt: "Semestral",
    modality_en: "Semester",
    description_pt: "Penthouse de alto padrão localizado na Estrada Principal do Patriota. Excelente acabamento, vistas amplas e localização privilegiada. Modalidade semestral.",
    description_en: "High-end penthouse located on the main road of Patriota. Excellent finishes, wide views and privileged location. Semester modality.",
    features: ["Semestral", "Luxo", "Boa localização"],
    images: [
      "assets/properties/rent-01-1.jpg",
      "assets/properties/rent-01-2.jpg",
      "assets/properties/rent-01-3.jpg",
      "assets/properties/rent-01-4.jpg",
      "assets/properties/rent-01-5.jpg",
      "assets/properties/rent-01-6.jpg",
      "assets/properties/rent-01-7.jpg",
      "assets/properties/rent-01-8.jpg",
      "assets/properties/rent-01-9.jpg",
      "assets/properties/rent-01-10.jpg"
    ],
    whatsappMsg_pt: "Olá, tenho interesse no Penthouse em Patriota (1.750.000 kzs/mês)",
    whatsappMsg_en: "Hello, I'm interested in the Penthouse in Patriota (1,750,000 kzs/month)",
    featured: true
  },
  {
    id: "rent-02",
    type: "rent",
    category: "apartamento",
    title_pt: "Apartamento Dolce Vita",
    title_en: "Dolce Vita Apartment",
    location: "Condomínio Dolce Vita, Talatona",
    municipality: "Talatona",
    price: 2000000,
    priceLabel_pt: "/ mês + 99.000 condo",
    priceLabel_en: "/ month + 99,000 condo",
    bedrooms: "T3",
    status: "disponivel",
    modality_pt: "Semestral + Caução",
    modality_en: "Semester + Deposit",
    description_pt: "Apartamento no prestigiado Condomínio Dolce Vita em Talatona. Taxa de condomínio: 99.000 kzs. Modalidade semestral com caução.",
    description_en: "Apartment in the prestigious Dolce Vita Condominium in Talatona. Condo fee: 99,000 kzs. Semester modality with deposit.",
    features: ["Condomínio", "Talatona", "Semestral + Caução"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"
    ],
    whatsappMsg_pt: "Olá, tenho interesse no Apartamento Dolce Vita (2.000.000 kzs)",
    whatsappMsg_en: "Hello, I'm interested in the Dolce Vita Apartment",
    featured: false
  },
  {
    id: "rent-03",
    type: "rent",
    category: "escritorio",
    title_pt: "Escritório Dolce Vita",
    title_en: "Dolce Vita Office",
    location: "Dolce Vita | Talatona",
    municipality: "Talatona",
    price: 500000,
    priceLabel_pt: "/ mês",
    priceLabel_en: "/ month",
    bedrooms: "—",
    status: "disponivel",
    modality_pt: "Semestral + Caução",
    modality_en: "Semester + Deposit",
    description_pt: "Espaço de escritório no Condomínio Dolce Vita, Talatona. Ideal para empresas. Modalidade semestral com caução.",
    description_en: "Office space in Dolce Vita Condominium, Talatona. Ideal for companies. Semester modality with deposit.",
    features: ["Escritório", "Talatona", "Semestral"],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
    ],
    whatsappMsg_pt: "Olá, tenho interesse no Escritório Dolce Vita (500.000 kzs)",
    whatsappMsg_en: "Hello, I'm interested in the Dolce Vita Office",
    featured: false
  },
  {
    id: "rent-04",
    type: "rent",
    category: "vivenda",
    title_pt: "Vivenda T4 — Vereda das Flores",
    title_en: "T4 Villa — Vereda das Flores",
    location: "Condomínio Vereda das Flores",
    municipality: "Benfica",
    price: 900000,
    priceLabel_pt: "/ mês",
    priceLabel_en: "/ month",
    bedrooms: "T4",
    status: "disponivel",
    modality_pt: "Semestral",
    modality_en: "Semester",
    description_pt: "Vivenda T4 no Condomínio Vereda das Flores. Espaçosa e bem localizada. Modalidade semestral.",
    description_en: "T4 villa in Vereda das Flores Condominium. Spacious and well located. Semester modality.",
    features: ["T4", "Condomínio", "Semestral"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd3b?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"
    ],
    whatsappMsg_pt: "Olá, tenho interesse na Vivenda T4 Vereda das Flores (900.000 kzs)",
    whatsappMsg_en: "Hello, I'm interested in the T4 Villa at Vereda das Flores",
    featured: false
  },
  {
    id: "rent-05",
    type: "rent",
    category: "vivenda",
    title_pt: "Vivenda de Luxo — Cruzeiro",
    title_en: "Luxury Villa — Cruzeiro",
    location: "Cruzeiro, Luanda",
    municipality: "Cruzeiro",
    price: 5500000,
    priceLabel_pt: "/ mês",
    priceLabel_en: "/ month",
    bedrooms: "T5+",
    status: "disponivel",
    modality_pt: "Semestral",
    modality_en: "Semester",
    description_pt: "Vivenda de luxo em Cruzeiro, Luanda. Propriedade de alto padrão. Modalidade semestral.",
    description_en: "Luxury villa in Cruzeiro, Luanda. High-standard property. Semester modality.",
    features: ["Luxo", "Cruzeiro", "Semestral"],
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd3b?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80"
    ],
    whatsappMsg_pt: "Olá, tenho interesse na Vivenda de Luxo em Cruzeiro (5.500.000 kzs)",
    whatsappMsg_en: "Hello, I'm interested in the Luxury Villa in Cruzeiro",
    featured: false
  },
  {
    id: "rent-06",
    type: "rent",
    category: "apartamento",
    title_pt: "Imóvel Residencial — Dona Xepa",
    title_en: "Residential Property — Dona Xepa",
    location: "Benfica, Bairro Dona Xepa",
    municipality: "Benfica",
    price: 250000,
    priceLabel_pt: "/ mês",
    priceLabel_en: "/ month",
    bedrooms: "T2",
    status: "disponivel",
    modality_pt: "Semestral",
    modality_en: "Semester",
    description_pt: "Imóvel residencial em Benfica, Bairro Dona Xepa. Boa opção de custo-benefício. Modalidade semestral.",
    description_en: "Residential property in Benfica, Dona Xepa neighborhood. Good value for money. Semester modality.",
    features: ["Benfica", "Semestral"],
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80"
    ],
    whatsappMsg_pt: "Olá, tenho interesse no imóvel em Benfica Dona Xepa (250.000 kzs)",
    whatsappMsg_en: "Hello, I'm interested in the property in Benfica Dona Xepa",
    featured: false
  },
  {
    id: "rent-07",
    type: "rent",
    category: "comercial",
    title_pt: "Espaço Comercial — Patriota",
    title_en: "Commercial Space — Patriota",
    location: "Estrada do Patriota",
    municipality: "Patriota",
    price: 200000,
    priceLabel_pt: "/ mês",
    priceLabel_en: "/ month",
    bedrooms: "—",
    status: "disponivel",
    modality_pt: "Semestral · Anual renovável",
    modality_en: "Semester · Annual renewable",
    description_pt: "Espaço comercial na Estrada do Patriota. Ideal para comércio ou serviços. Modalidade semestral, prazo anual renovável.",
    description_en: "Commercial space on Estrada do Patriota. Ideal for retail or services. Semester modality, annual renewable term.",
    features: ["Comercial", "Patriota", "Anual renovável"],
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80"
    ],
    whatsappMsg_pt: "Olá, tenho interesse no Espaço Comercial Patriota (200.000 kzs)",
    whatsappMsg_en: "Hello, I'm interested in the Commercial Space in Patriota",
    featured: false
  },
  {
    id: "rent-08",
    type: "rent",
    category: "escritorio",
    title_pt: "Escritórios — Benfica",
    title_en: "Offices — Benfica",
    location: "Benfica, Rua Sentinelas do Benfica",
    municipality: "Benfica",
    price: 400000,
    priceLabel_pt: "/ mês (a partir de)",
    priceLabel_en: "/ month (from)",
    bedrooms: "—",
    status: "disponivel",
    modality_pt: "Semestral",
    modality_en: "Semester",
    description_pt: "Escritórios disponíveis a partir de 400.000 kzs/mês na Rua Sentinelas do Benfica. Modalidade semestral.",
    description_en: "Offices available from 400,000 kzs/month on Rua Sentinelas do Benfica. Semester modality.",
    features: ["Escritório", "Benfica", "Semestral"],
    images: [
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    ],
    whatsappMsg_pt: "Olá, tenho interesse em escritórios em Benfica (a partir de 400.000 kzs)",
    whatsappMsg_en: "Hello, I'm interested in offices in Benfica",
    featured: false
  },

  // ========== SALES ==========
  {
    id: "sale-01",
    type: "sale",
    category: "vivenda",
    title_pt: "2 Vivendas T3 — Ramiro Beach",
    title_en: "2 × T3 Villas — Ramiro Beach",
    location: "Condomínio Ramiro Beach",
    municipality: "Ramiros",
    price: 160000000,
    priceLabel_pt: " (total)",
    priceLabel_en: " (total)",
    bedrooms: "T3 × 2",
    status: "disponivel",
    modality_pt: "Venda · Documentação em ordem",
    modality_en: "Sale · Documentation in order",
    description_pt: "Duas vivendas T3 no Condomínio Ramiro Beach. Inclui piscina. Documentação em ordem. Ideal para investimento ou residência familiar.",
    description_en: "Two T3 villas in Ramiro Beach Condominium. Includes swimming pool. Documentation in order. Ideal for investment or family residence.",
    features: ["2 Vivendas", "Piscina", "Documentação OK", "Ramiro Beach"],
    images: [
      "assets/properties/sale-01-1.jpg",
      "assets/properties/sale-01-2.jpg",
      "assets/properties/sale-01-3.jpg",
      "assets/properties/sale-01-4.jpg",
      "assets/properties/sale-01-5.jpg",
      "assets/properties/sale-01-6.jpg",
      "assets/properties/sale-01-7.jpg",
      "assets/properties/sale-01-8.jpg",
      "assets/properties/sale-01-9.jpg"
    ],
    whatsappMsg_pt: "Olá, tenho interesse nas 2 Vivendas T3 em Ramiro Beach (160 milhões)",
    whatsappMsg_en: "Hello, I'm interested in the 2 T3 Villas at Ramiro Beach (160 million)",
    featured: true
  },
  {
    id: "sale-02",
    type: "sale",
    category: "vivenda",
    title_pt: "Vivenda T7 — Benfica",
    title_en: "T7 Villa — Benfica",
    location: "Estrada direita do BFA, Benfica",
    municipality: "Benfica",
    price: 299000000,
    priceLabel_pt: " (total)",
    priceLabel_en: " (total)",
    bedrooms: "T7",
    status: "disponivel",
    modality_pt: "Venda",
    modality_en: "Sale",
    description_pt: "Vivenda T7 localizada na Estrada direita do BFA, Benfica. Propriedade espaçosa e de grande potencial.",
    description_en: "T7 villa located on the right-hand road of BFA, Benfica. Spacious property with great potential.",
    features: ["T7", "Benfica", "Espaçosa"],
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd3b?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80"
    ],
    whatsappMsg_pt: "Olá, tenho interesse na Vivenda T7 em Benfica (299 milhões)",
    whatsappMsg_en: "Hello, I'm interested in the T7 Villa in Benfica (299 million)",
    featured: false
  },
  {
    id: "sale-03",
    type: "sale",
    category: "vivenda",
    title_pt: "Vivenda T2 — Chinguar",
    title_en: "T2 Villa — Chinguar",
    location: "Bairro Chinguar, frente ao Condomínio Palmeiras Village",
    municipality: "Chinguar",
    price: 11000000,
    priceLabel_pt: " (total)",
    priceLabel_en: " (total)",
    bedrooms: "T2",
    status: "disponivel",
    modality_pt: "Venda",
    modality_en: "Sale",
    description_pt: "Vivenda T2 no Bairro Chinguar, frente ao Condomínio Palmeiras Village. Boa oportunidade de aquisição.",
    description_en: "T2 villa in Chinguar neighborhood, in front of Palmeiras Village Condominium. Good acquisition opportunity.",
    features: ["T2", "Chinguar", "Bom preço"],
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
    ],
    whatsappMsg_pt: "Olá, tenho interesse na Vivenda T2 em Chinguar (11 milhões)",
    whatsappMsg_en: "Hello, I'm interested in the T2 Villa in Chinguar (11 million)",
    featured: false
  },

  // ========== ADDITIONAL SAMPLE PROPERTIES ==========
  {
    id: "rent-09",
    type: "rent",
    category: "apartamento",
    title_pt: "Apartamento T3 — Maianga",
    title_en: "T3 Apartment — Maianga",
    location: "Maianga, perto do Kinaxixi",
    municipality: "Maianga",
    price: 650000,
    priceLabel_pt: "/ mês",
    priceLabel_en: "/ month",
    bedrooms: "T3",
    status: "disponivel",
    modality_pt: "Semestral",
    modality_en: "Semester",
    description_pt: "Apartamento T3 bem localizado em Maianga, próximo do Kinaxixi. Ideal para famílias ou profissionais. Modalidade semestral.",
    description_en: "Well-located T3 apartment in Maianga, near Kinaxixi. Ideal for families or professionals. Semester modality.",
    features: ["T3", "Maianga", "Bom acesso"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80"
    ],
    whatsappMsg_pt: "Olá, tenho interesse no Apartamento T3 em Maianga (650.000 kzs)",
    whatsappMsg_en: "Hello, I'm interested in the T3 Apartment in Maianga",
    featured: false
  },
  {
    id: "rent-10",
    type: "rent",
    category: "vivenda",
    title_pt: "Vivenda T5 — Talatona",
    title_en: "T5 Villa — Talatona",
    location: "Talatona, zona residencial",
    municipality: "Talatona",
    price: 1800000,
    priceLabel_pt: "/ mês",
    priceLabel_en: "/ month",
    bedrooms: "T5",
    status: "novo",
    modality_pt: "Semestral + Caução",
    modality_en: "Semester + Deposit",
    description_pt: "Vivenda T5 nova em Talatona. Acabamentos modernos, jardim e estacionamento. Modalidade semestral com caução.",
    description_en: "New T5 villa in Talatona. Modern finishes, garden and parking. Semester modality with deposit.",
    features: ["T5", "Novo", "Jardim", "Talatona"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd3b?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80"
    ],
    whatsappMsg_pt: "Olá, tenho interesse na Vivenda T5 em Talatona (1.800.000 kzs)",
    whatsappMsg_en: "Hello, I'm interested in the T5 Villa in Talatona",
    featured: true
  },
  {
    id: "rent-11",
    type: "rent",
    category: "escritorio",
    title_pt: "Escritório — Ingombota",
    title_en: "Office — Ingombota",
    location: "Ingombota, centro de Luanda",
    municipality: "Ingombota",
    price: 350000,
    priceLabel_pt: "/ mês",
    priceLabel_en: "/ month",
    bedrooms: "—",
    status: "disponivel",
    modality_pt: "Semestral",
    modality_en: "Semester",
    description_pt: "Escritório bem localizado em Ingombota, no centro de Luanda. Ideal para empresas e profissionais liberais.",
    description_en: "Well-located office in Ingombota, central Luanda. Ideal for companies and freelancers.",
    features: ["Centro", "Ingombota", "Semestral"],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
    ],
    whatsappMsg_pt: "Olá, tenho interesse no Escritório em Ingombota (350.000 kzs)",
    whatsappMsg_en: "Hello, I'm interested in the Office in Ingombota",
    featured: false
  },
  {
    id: "rent-12",
    type: "rent",
    category: "comercial",
    title_pt: "Loja / Espaço Comercial — Samba",
    title_en: "Shop / Commercial Space — Samba",
    location: "Samba, zona comercial",
    municipality: "Samba",
    price: 280000,
    priceLabel_pt: "/ mês",
    priceLabel_en: "/ month",
    bedrooms: "—",
    status: "disponivel",
    modality_pt: "Semestral · Anual renovável",
    modality_en: "Semester · Annual renewable",
    description_pt: "Espaço comercial em Samba, ideal para loja, salão ou serviços. Boa visibilidade e fluxo de pessoas.",
    description_en: "Commercial space in Samba, ideal for a shop, salon or services. Good visibility and foot traffic.",
    features: ["Comercial", "Samba", "Boa visibilidade"],
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80"
    ],
    whatsappMsg_pt: "Olá, tenho interesse no Espaço Comercial em Samba (280.000 kzs)",
    whatsappMsg_en: "Hello, I'm interested in the Commercial Space in Samba",
    featured: false
  },
  {
    id: "sale-04",
    type: "sale",
    category: "apartamento",
    title_pt: "Apartamento T4 — Talatona",
    title_en: "T4 Apartment — Talatona",
    location: "Talatona, condomínio fechado",
    municipality: "Talatona",
    price: 85000000,
    priceLabel_pt: " (total)",
    priceLabel_en: " (total)",
    bedrooms: "T4",
    status: "disponivel",
    modality_pt: "Venda · Documentação em ordem",
    modality_en: "Sale · Documentation in order",
    description_pt: "Apartamento T4 em condomínio fechado em Talatona. Documentação regularizada. Excelente para residência ou investimento.",
    description_en: "T4 apartment in a closed condominium in Talatona. Regularized documentation. Excellent for residence or investment.",
    features: ["T4", "Condomínio", "Talatona", "Documentação OK"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"
    ],
    whatsappMsg_pt: "Olá, tenho interesse no Apartamento T4 em Talatona (85 milhões)",
    whatsappMsg_en: "Hello, I'm interested in the T4 Apartment in Talatona (85 million)",
    featured: true
  },
  {
    id: "sale-05",
    type: "sale",
    category: "terreno",
    title_pt: "Terreno — Viana",
    title_en: "Land Plot — Viana",
    location: "Viana, zona de expansão",
    municipality: "Viana",
    price: 25000000,
    priceLabel_pt: " (total)",
    priceLabel_en: " (total)",
    bedrooms: "—",
    status: "disponivel",
    modality_pt: "Venda",
    modality_en: "Sale",
    description_pt: "Terreno em Viana, zona de expansão. Ideal para construção de vivenda ou empreendimento. Documentação disponível.",
    description_en: "Land plot in Viana, expansion area. Ideal for building a villa or development. Documentation available.",
    features: ["Terreno", "Viana", "Expansão"],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800&q=80"
    ],
    whatsappMsg_pt: "Olá, tenho interesse no Terreno em Viana (25 milhões)",
    whatsappMsg_en: "Hello, I'm interested in the Land Plot in Viana (25 million)",
    featured: false
  },
  {
    id: "sale-06",
    type: "sale",
    category: "vivenda",
    title_pt: "Vivenda T4 — Kilamba",
    title_en: "T4 Villa — Kilamba",
    location: "Centralidade do Kilamba",
    municipality: "Kilamba",
    price: 45000000,
    priceLabel_pt: " (total)",
    priceLabel_en: " (total)",
    bedrooms: "T4",
    status: "usado",
    modality_pt: "Venda",
    modality_en: "Sale",
    description_pt: "Vivenda T4 na Centralidade do Kilamba. Boa oportunidade, documentação em ordem.",
    description_en: "T4 villa in Kilamba Centralidade. Good opportunity, documentation in order.",
    features: ["T4", "Kilamba", "Documentação OK"],
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
    ],
    whatsappMsg_pt: "Olá, tenho interesse na Vivenda T4 em Kilamba (45 milhões)",
    whatsappMsg_en: "Hello, I'm interested in the T4 Villa in Kilamba (45 million)",
    featured: false
  },
  {
    id: "rent-13",
    type: "rent",
    category: "apartamento",
    title_pt: "Apartamento T2 — Rangel",
    title_en: "T2 Apartment — Rangel",
    location: "Rangel, Luanda",
    municipality: "Rangel",
    price: 320000,
    priceLabel_pt: "/ mês",
    priceLabel_en: "/ month",
    bedrooms: "T2",
    status: "disponivel",
    modality_pt: "Semestral",
    modality_en: "Semester",
    description_pt: "Apartamento T2 em Rangel. Opção acessível e bem localizada para quem procura praticidade no centro alargado de Luanda.",
    description_en: "T2 apartment in Rangel. Affordable and well-located option for those seeking practicality in greater central Luanda.",
    features: ["T2", "Rangel", "Acessível"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80"
    ],
    whatsappMsg_pt: "Olá, tenho interesse no Apartamento T2 em Rangel (320.000 kzs)",
    whatsappMsg_en: "Hello, I'm interested in the T2 Apartment in Rangel",
    featured: false
  },
  {
    id: "rent-14",
    type: "rent",
    category: "penthouse",
    title_pt: "Penthouse — Miramar",
    title_en: "Penthouse — Miramar",
    location: "Miramar, Luanda",
    municipality: "Miramar",
    price: 2200000,
    priceLabel_pt: "/ mês",
    priceLabel_en: "/ month",
    bedrooms: "T4",
    status: "novo",
    modality_pt: "Semestral + Caução",
    modality_en: "Semester + Deposit",
    description_pt: "Penthouse de luxo em Miramar com vista privilegiada. Acabamentos premium e localização exclusiva.",
    description_en: "Luxury penthouse in Miramar with privileged views. Premium finishes and exclusive location.",
    features: ["Penthouse", "Miramar", "Luxo", "Vista"],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
    ],
    whatsappMsg_pt: "Olá, tenho interesse no Penthouse em Miramar (2.200.000 kzs)",
    whatsappMsg_en: "Hello, I'm interested in the Penthouse in Miramar",
    featured: true
  },
  {
    id: "rent-15",
    type: "rent",
    category: "vivenda",
    title_pt: "Vivenda T3 — Patriota",
    title_en: "T3 Villa — Patriota",
    location: "Patriota, zona residencial",
    municipality: "Patriota",
    price: 780000,
    priceLabel_pt: "/ mês",
    priceLabel_en: "/ month",
    bedrooms: "T3",
    status: "disponivel",
    modality_pt: "Semestral",
    modality_en: "Semester",
    description_pt: "Vivenda T3 em zona residencial do Patriota. Ideal para família. Inclui estacionamento.",
    description_en: "T3 villa in a residential area of Patriota. Ideal for a family. Includes parking.",
    features: ["T3", "Patriota", "Estacionamento"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd3b?w=800&q=80"
    ],
    whatsappMsg_pt: "Olá, tenho interesse na Vivenda T3 em Patriota (780.000 kzs)",
    whatsappMsg_en: "Hello, I'm interested in the T3 Villa in Patriota",
    featured: false
  },
  {
    id: "sale-07",
    type: "sale",
    category: "vivenda",
    title_pt: "Vivenda T5 — Talatona (Condomínio)",
    title_en: "T5 Villa — Talatona (Condominium)",
    location: "Talatona, condomínio fechado",
    municipality: "Talatona",
    price: 175000000,
    priceLabel_pt: " (total)",
    priceLabel_en: " (total)",
    bedrooms: "T5",
    status: "disponivel",
    modality_pt: "Venda · Documentação em ordem",
    modality_en: "Sale · Documentation in order",
    description_pt: "Vivenda T5 em condomínio fechado em Talatona. Piscina, jardim e segurança 24h. Documentação completa.",
    description_en: "T5 villa in a closed condominium in Talatona. Pool, garden and 24h security. Complete documentation.",
    features: ["T5", "Condomínio", "Piscina", "Talatona"],
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd3b?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"
    ],
    whatsappMsg_pt: "Olá, tenho interesse na Vivenda T5 em Talatona (175 milhões)",
    whatsappMsg_en: "Hello, I'm interested in the T5 Villa in Talatona (175 million)",
    featured: true
  },
  {
    id: "sale-08",
    type: "sale",
    category: "apartamento",
    title_pt: "Apartamento T3 — Maculusso",
    title_en: "T3 Apartment — Maculusso",
    location: "Maculusso, Luanda",
    municipality: "Maculusso",
    price: 52000000,
    priceLabel_pt: " (total)",
    priceLabel_en: " (total)",
    bedrooms: "T3",
    status: "usado",
    modality_pt: "Venda",
    modality_en: "Sale",
    description_pt: "Apartamento T3 em Maculusso. Boa localização e potencial de valorização. Documentação disponível.",
    description_en: "T3 apartment in Maculusso. Good location and appreciation potential. Documentation available.",
    features: ["T3", "Maculusso", "Bom preço"],
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"
    ],
    whatsappMsg_pt: "Olá, tenho interesse no Apartamento T3 em Maculusso (52 milhões)",
    whatsappMsg_en: "Hello, I'm interested in the T3 Apartment in Maculusso (52 million)",
    featured: false
  },
  {
    id: "sale-09",
    type: "sale",
    category: "comercial",
    title_pt: "Espaço Comercial — Benfica",
    title_en: "Commercial Space — Benfica",
    location: "Benfica, zona comercial",
    municipality: "Benfica",
    price: 38000000,
    priceLabel_pt: " (total)",
    priceLabel_en: " (total)",
    bedrooms: "—",
    status: "disponivel",
    modality_pt: "Venda",
    modality_en: "Sale",
    description_pt: "Espaço comercial em Benfica, ideal para investimento. Boa exposição e acesso.",
    description_en: "Commercial space in Benfica, ideal for investment. Good exposure and access.",
    features: ["Comercial", "Benfica", "Investimento"],
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80"
    ],
    whatsappMsg_pt: "Olá, tenho interesse no Espaço Comercial em Benfica (38 milhões)",
    whatsappMsg_en: "Hello, I'm interested in the Commercial Space in Benfica (38 million)",
    featured: false
  }
];

// Helper to format price with thousand separators (Angolan style)
function formatPrice(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
