# Bakana Empire — Website

Website profissional para **William Canadá** (Perito Avaliador Imobiliário) e **Bakana Empire** / **Bakana Village**.

- Multilíngue: Português + Inglês  
- Listagens de arrendamento e venda com filtros  
- Página de detalhe de cada imóvel + carrossel de fotos  
- Bakana Village (hospedagem / lazer)  
- Contacto via WhatsApp  
- Gestão simples de imóveis (um único ficheiro de dados)

---

## Estrutura principal

```
├── index.html          → Página inicial
├── about.html          → Sobre William Canadá
├── rentals.html        → Arrendamento (com filtros)
├── sales.html          → Venda (com filtros)
├── village.html        → Bakana Village
├── contact.html        → Contactos + formulário WhatsApp
├── property.html       → Detalhe dinâmico do imóvel (?id=...)
├── admin.html          → Instruções para adicionar imóveis (não publicar no menu)
├── css/styles.css
├── js/
│   ├── main.js              → Menu, idioma, header
│   ├── properties-data.js   → ★ Todos os imóveis (editar aqui)
│   └── listings.js          → Filtros, cards, carrosséis, detalhe
└── assets/             → Colocar fotos próprias aqui (opcional)
```

---

## Como adicionar / editar imóveis

1. Abra `js/properties-data.js`
2. Copie um objecto existente
3. Altere o `id` (tem de ser único, ex: `rent-13` ou `sale-07`)
4. Preencha título, preço, localização, fotos, etc.
5. Guarde o ficheiro e faça deploy

Instruções detalhadas com exemplo: abra **admin.html** no browser.

---

## Deploy (GitHub + Cloudflare Pages)

### 1. Criar repositório no GitHub
- Crie um repositório novo (ex: `bakana-empire`)
- Faça upload de todos os ficheiros desta pasta (ou use `git`)

```bash
git init
git add .
git commit -m "Bakana Empire website"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/bakana-empire.git
git push -u origin main
```

### 2. Ligar ao Cloudflare Pages
1. Entre em [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages**
2. **Create** → **Pages** → **Connect to Git**
3. Escolha o repositório `bakana-empire`
4. Configuração:
   - Framework preset: **None**
   - Build command: *(deixar vazio)*
   - Build output directory: `/` (ou `.`)
5. **Save and Deploy**

Em 1–2 minutos o site fica online num endereço do tipo:  
`https://bakana-empire.pages.dev`

### 3. Domínio personalizado (opcional)
No painel do Cloudflare Pages → **Custom domains** → adicione o domínio do cliente (ex: `bakanaempire.ao` ou `williamcanada.co.ao`).

---

## Contactos no site

- WhatsApp principal: **935 110 735**
- Alternativo: **956 077 348**
- Outros: 922 864 697 · 990 110 735

---

## Notas técnicas

- Site 100% estático (HTML + CSS + JS) — sem servidor nem base de dados
- Filtros e páginas de detalhe funcionam no browser do cliente
- Idioma preferido é guardado em `localStorage`
- Ideal para Cloudflare Pages (plano gratuito é suficiente)

---

© 2026 Bakana Empire · William Canadá — P.A.I.
