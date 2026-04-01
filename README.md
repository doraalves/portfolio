# Izadora Alves — Portfólio

> Portfólio pessoal desenvolvido com React e Styled Components.

**[doraalves.github.io/portfolio](https://doraalves.github.io/portfolio)**

---

## Tecnologias

- [React](https://react.dev/) — biblioteca de interface
- [Styled Components](https://styled-components.com/) — estilização com CSS-in-JS
- [EmailJS](https://www.emailjs.com/) — envio de emails pelo formulário de contato
- [GitHub Pages](https://pages.github.com/) — hospedagem

---

## Estrutura

```
src/
├── assets/
│   ├── docs/               # Currículo e TCC em PDF
│   ├── illustrations/      # Ilustrações digitais
│   └── tcc/                # Screenshots do jogo (TCC)
├── components/
│   ├── CustomCursor.js     # Cursor personalizado
│   ├── Icons.js            # SVG icons
│   ├── Modal.js            # Modal de detalhes dos projetos
│   └── Navbar.js           # Navegação fixa
├── data/
│   ├── experience.js       # Dados de experiência profissional
│   └── projects.js         # Dados dos projetos
├── pages/
│   ├── About.js            # Sobre, experiência, TCC e ilustrações
│   ├── Contact.js          # Contato com formulário
│   ├── Home.js             # Página inicial
│   └── Projects.js         # Lista de projetos
└── styles/
    ├── shared.js           # Animações e componentes base compartilhados
    ├── GlobalStyle.js
    ├── About.styled.js
    ├── Contact.styled.js
    ├── Home.styled.js
    ├── Modal.styled.js
    ├── Navbar.styled.js
    └── Projects.styled.js
```

---

## Rodando localmente

**Pré-requisitos:** Node.js 16+

```bash
git clone https://github.com/doraalves/portfolio.git
cd portfolio
npm install
npm start
```

Abre em `http://localhost:3000`.

---

## Configurando o EmailJS

O formulário de contato usa o [EmailJS](https://www.emailjs.com/). Crie um arquivo `.env` na raiz com suas chaves:

```env
REACT_APP_EMAILJS_SERVICE_ID=seu_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=seu_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=sua_public_key
```

---

## Deploy no GitHub Pages

```bash
npm run deploy
```

---

## Autora

**Izadora Alves** — Desenvolvedora Full Stack & Ilustradora Digital

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/izadoraalves/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/doraalves)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=flat&logo=instagram&logoColor=white)](https://www.instagram.com/izadoraaalves)
[![Ilustrações](https://img.shields.io/badge/Ilustra%C3%A7%C3%B5es-E4405F?style=flat&logo=instagram&logoColor=white)](https://www.instagram.com/ilustradoradora)
