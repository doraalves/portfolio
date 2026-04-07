"use strict";(globalThis.webpackChunkportfolio_izadora=globalThis.webpackChunkportfolio_izadora||[]).push([[847],{42(A,e,a){a.r(e),a.d(e,{default:()=>F});a(43);var r=a(346),t=a(403),o=a(490);const i=t.Ay.div`
  background: var(--bg);
  min-height: 100vh;
  padding-top: 5rem;
  animation: ${o.Qu} 0.4s ease both;
  transition: background 0.3s;
`,n=t.Ay.div`
  padding: 4.5rem 3rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,s=t.Ay.div`
  margin-bottom: 3rem;
`,d=t.Ay.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  align-items: start;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,c=t.Ay.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`,m=t.Ay.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 3.5rem 0 2rem;

  &::before, &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--line);
  }
`,l=t.Ay.span`
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.45;
  white-space: nowrap;
`,p=t.Ay.div`
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;

  /* barra lateral nos internos */
  ${A=>{let{$internal:e}=A;return e&&t.AH`
    opacity: 0.82;

    &::before {
      content: "";
      position: absolute;
      top: 0; left: 0;
      width: 3px;
      height: 0;
      background: var(--accent);
      transition: height 0.3s;
    }

    &:hover::before { height: 100%; }
  `}}

  &:hover {
    transform: translateY(-3px);
    border-color: var(--accent);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
`,u=t.Ay.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
  border-bottom: 1px solid var(--line);
`,v=t.Ay.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`,f=t.Ay.p`
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--accent);
  letter-spacing: 0.14em;
  opacity: 0.6;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,x=t.Ay.h3`
  font-family: var(--serif);
  font-size: 1.2rem;
  color: var(--ink);
  line-height: 1.2;
  margin-top: -0.2rem;
`,g=t.Ay.p`
  font-size: 0.86rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.72;
`,b=t.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`,z=t.Ay.span`
  font-family: var(--mono);
  font-size: 0.62rem;
  padding: 0.18rem 0.5rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  color: var(--ink-soft);
  background: var(--bg);
`,B=t.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--line);
`,P=t.Ay.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.9rem;
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  transition: all 0.2s;

  ${A=>{let{$ghost:e}=A;return e?t.AH`
    background: transparent;
    color: var(--ink-soft);
    border: 1.5px solid var(--line);
    &:hover { border-color: var(--accent); color: var(--accent); }
  `:t.AH`
    background: var(--accent);
    color: white;
    border: 1.5px solid var(--accent);
    &:hover { background: #a01415; border-color: #a01415; }
  `}}
`,V=t.Ay.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.45;
`,h=t.Ay.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.2rem 0.55rem;
  border-radius: 2px;
  border: 1px solid ${A=>{let{$wip:e}=A;return e?"rgba(200,25,26,0.4)":"var(--line)"}};
  color: ${A=>{let{$wip:e}=A;return e?"var(--accent)":"var(--ink-soft)"}};
  background: ${A=>{let{$wip:e}=A;return e?"rgba(200,25,26,0.06)":"transparent"}};
  opacity: ${A=>{let{$wip:e}=A;return e?1:.55}};

  ${A=>{let{$wip:e}=A;return e&&'\n    &::before {\n      content: "";\n      width: 5px;\n      height: 5px;\n      border-radius: 50%;\n      background: var(--accent);\n      animation: pulse 2s infinite;\n    }\n  '}}
`;var q=a(647);const E=a.p+"static/media/001.6fd49cffac98db608edf.jpg",Q=[{num:"001",title:"BlackVis",status:"em desenvolvimento",shortDesc:"Visualiza\xe7\xe3o interativa em grafo de for\xe7a de designers negros brasileiros, com filtros por \xe1rea e nome.",desc:"Visualiza\xe7\xe3o de dados constru\xedda com D3.js v7 como ferramenta de visibilidade para designers negros brasileiros e estrangeiros. Exibe um grafo de for\xe7a onde n\xf3s representam designers, t\xe9cnicas e \xe1reas do design, conectados por afinidade. Filtros por ano de nascimento, \xe1rea ou nome permitem explora\xe7\xe3o n\xe3o-linear dos dados. Projeto com prop\xf3sito social e t\xe9cnica de visualiza\xe7\xe3o avan\xe7ada.",stack:["D3.js","JavaScript","HTML","SCSS"],link:"https://blackvisesdi.github.io/BlackVis/",github:"https://github.com/blackvisesdi/BlackVis",thumb:a.p+"static/media/004.35bb6acc50ad8dfa318c.jpg"},{num:"002",title:"Jogo de Estoura Bal\xf5es",status:"2025",shortDesc:"Jogo interativo com dificuldade crescente, sistema de combos e cursor personalizado.",desc:"Projeto desenvolvido em JavaScript Vanilla para explorar a manipula\xe7\xe3o direta do DOM e l\xf3gica de colis\xe3o sem depend\xeancia de frameworks. Foquei na cria\xe7\xe3o de uma curva de aprendizado progressiva atrav\xe9s de algoritmos de velocidade vari\xe1vel e sistemas de pontua\xe7\xe3o por combo, garantindo uma interface fluida com anima\xe7\xf5es em SVG e feedback visual instant\xe2neo.",stack:["JavaScript","HTML","CSS"],link:"https://doraalves.github.io/baloes/",github:"https://github.com/doraalves/baloes",thumb:"data:image/jpeg;base64,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"},{num:"003",title:"Calculadora iOS Clone",status:"2025",shortDesc:"Calculadora com interface inspirada no iOS, suporte a teclado e hist\xf3rico de express\xf5es.",desc:"Desenvolvimento de uma aplica\xe7\xe3o web com foco em fidelidade visual (UI/UX) e robustez l\xf3gica. O projeto resolve desafios comuns de aritm\xe9tica computacional, como o tratamento de erros de ponto flutuante e a gest\xe3o de estados para encadeamento de opera\xe7\xf5es. Implementei suporte completo a atalhos de teclado e hist\xf3rico din\xe2mico, priorizando a acessibilidade e a experi\xeancia do usu\xe1rio.",stack:["JavaScript","HTML","CSS"],link:"https://doraalves.github.io/calculadora/",github:"https://github.com/doraalves/calculadora",thumb:E},{num:"004",title:"Cron\xf4metro",status:"2025",shortDesc:"Cron\xf4metro com marca\xe7\xe3o de voltas, anel SVG animado e destaque da melhor e pior volta.",desc:"Cron\xf4metro avan\xe7ado que utiliza anima\xe7\xf5es sincronizadas via SVG para representa\xe7\xe3o visual do tempo. O diferencial t\xe9cnico est\xe1 no algoritmo de an\xe1lise de performance, que identifica e destaca automaticamente os melhores e piores tempos de volta. Desenvolvido com foco em arquitetura limpa, utilizando atalhos de teclado para otimizar o fluxo de trabalho do usu\xe1rio. Suporta atalhos de teclado (Espa\xe7o, L, R) para uso sem mouse.",stack:["JavaScript","HTML","CSS"],link:"https://doraalves.github.io/cronometro/",github:"https://github.com/doraalves/cronometro",thumb:"data:image/jpeg;base64,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"},{num:"005",title:"Galeria Imersiva (Web 3.0 / VR)",status:"2025",shortDesc:"Instala\xe7\xf5es interativas e espa\xe7os imersivos em Meta Quest 3, explorando arte, design e tecnologia.",desc:"Prototipagem de instala\xe7\xf5es interativas e ambientes imersivos para a plataforma Spatial, exibidos em Meta Quest 3. Projeto experimental do MediaLAB/ESDI que explora a fronteira entre arte, design e tecnologia em espa\xe7os virtuais tridimensionais. Programa\xe7\xe3o criativa com p5.js integrada ao ambiente 3D.",stack:["Spatial","Meta Quest 3","JavaScript","p5.js","Figma"],link:"https://www.spatial.io/s/Media-Labs-1-0-Claro-6826039af8049f0d7678b6fe?share=1267569543253887910",figma:"https://www.figma.com/proto/p4XoK4HtQAH3xUZ6u7IRTW/MEDIALAB-UERJ-RIO2C-2025?page-id=0%253A1&node-id=1-3&viewport=116%252C0%252C0.7&t=fgPmz23wxGwTVIsS-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%253A3",github:null},{num:"006",title:"Site Institucional MediaLAB",status:"2025",shortDesc:"Site institucional do laborat\xf3rio de m\xeddia da ESDI/UERJ, integrando identidade visual e arquitetura de conte\xfado.",desc:"Desenvolvimento completo do site institucional do MediaLAB da ESDI/UERJ. Respons\xe1vel pela arquitetura de informa\xe7\xe3o, implementa\xe7\xe3o da identidade visual no ambiente digital e publica\xe7\xe3o de projetos experimentais do laborat\xf3rio. Desenvolvido em WordPress com customiza\xe7\xf5es em HTML, CSS e JavaScript.",stack:["WordPress","HTML","CSS","JavaScript"],link:null,github:null},{num:"007",title:"Dashboard de Opera\xe7\xf5es (Real-time)",status:"2023",shortDesc:"Dashboard em tempo real para gest\xe3o de equipes na Americanas S.A., com status e setor de cada colaborador.",desc:"Dashboard interno desenvolvido na Americanas S.A. para centralizar status, setor e cargo de cada colaborador em tempo real. Substituiu comunica\xe7\xf5es dispersas por uma vis\xe3o \xfanica e atualizada, melhorando a gest\xe3o e resposta das lideran\xe7as. Desenvolvido com Vue.js no front e Django + WebSockets no back-end, containerizado com Docker.",stack:["Vue.js","Django","Python","WebSockets","HTML/SCSS","Docker"],link:null,github:null},{num:"008",title:"Hub de Inova\xe7\xe3o & KPIs",status:"2023",shortDesc:"Plataforma de monitoramento de projetos e m\xe9tricas de vendas para a equipe de Inova\xe7\xe3o da Americanas.",desc:"Aplica\xe7\xe3o de monitoramento desenvolvida para a equipe de Inova\xe7\xe3o da Americanas S.A. Consolidou dados de dezenas de projetos estrat\xe9gicos, an\xe1lise de resultados de vendas e m\xe9tricas de KPIs em uma \xfanica interface atualizada em tempo real. Desenvolvida com ReactJS, Node.js e integra\xe7\xe3o com APIs RESTful internas.",stack:["ReactJS","Node.js","Styled Components","API RESTful"],link:null,github:null},{num:"009",title:"Core de Gerenciamento de Pedidos",status:"2023",shortDesc:"Front-end do sistema de pedidos do Americanas Mercado, com foco em performance e integra\xe7\xe3o com APIs de alto tr\xe1fego.",desc:"Implementa\xe7\xe3o front-end do sistema de gerenciamento de pedidos para o Americanas Mercado. Foco em performance, acessibilidade e usabilidade em um ambiente de alto volume de transa\xe7\xf5es. Componentiza\xe7\xe3o reutiliz\xe1vel com ReactJS e Styled Components, integra\xe7\xe3o com APIs RESTful internas e aten\xe7\xe3o a estados de loading, erro e sucesso.",stack:["ReactJS","Node.js","API RESTful","Styled Components"],link:null,github:null}];var j=a(579);function F(){const A=(new Date).getFullYear(),e=Q.filter(A=>A.thumb),a=Q.filter(A=>!A.thumb);return(0,j.jsxs)(i,{children:[(0,j.jsxs)(n,{children:[(0,j.jsxs)(s,{children:[(0,j.jsx)(o.gb,{children:"projetos"}),(0,j.jsxs)(o.H2,{children:["O que ",(0,j.jsx)("em",{children:"constru\xed"})]})]}),(0,j.jsx)(d,{children:e.map(A=>(0,j.jsxs)(p,{children:[(0,j.jsx)(u,{src:A.thumb,alt:A.title,loading:"lazy"}),(0,j.jsxs)(v,{children:[(0,j.jsxs)(f,{children:[A.num,A.status&&(0,j.jsx)(h,{$wip:"em desenvolvimento"===A.status,children:A.status})]}),(0,j.jsx)(x,{children:A.title}),(0,j.jsx)(g,{children:A.desc}),(0,j.jsx)(b,{children:A.stack.map(A=>(0,j.jsx)(z,{children:A},A))}),(0,j.jsxs)(B,{children:[A.link&&(0,j.jsxs)(P,{href:A.link,target:"_blank",rel:"noreferrer",onClick:()=>(0,r.D_)(A.title),children:[(0,j.jsx)(q.XM,{})," Ver projeto"]}),A.github&&(0,j.jsxs)(P,{href:A.github,target:"_blank",rel:"noreferrer",$ghost:!0,children:[(0,j.jsx)(q.Hk,{})," C\xf3digo"]}),A.figma&&(0,j.jsxs)(P,{href:A.figma,target:"_blank",rel:"noreferrer",$ghost:!0,children:[(0,j.jsx)(q._V,{})," Figma"]})]})]})]},A.num))}),(0,j.jsx)(m,{children:(0,j.jsx)(l,{children:"projetos internos"})}),(0,j.jsx)(c,{children:a.map(A=>(0,j.jsx)(p,{$internal:!0,children:(0,j.jsxs)(v,{children:[(0,j.jsxs)(f,{children:[A.num,A.status&&(0,j.jsx)(h,{$wip:"em desenvolvimento"===A.status,children:A.status})]}),(0,j.jsx)(x,{children:A.title}),(0,j.jsx)(g,{children:A.desc}),(0,j.jsx)(b,{children:A.stack.map(A=>(0,j.jsx)(z,{children:A},A))}),(0,j.jsxs)(B,{children:[A.figma&&(0,j.jsxs)(P,{href:A.figma,target:"_blank",rel:"noreferrer",$ghost:!0,children:[(0,j.jsx)(q._V,{})," Figma"]}),!A.link&&!A.github&&!A.figma&&(0,j.jsxs)(V,{children:[(0,j.jsx)(q.XA,{})," projeto interno \xb7 link n\xe3o dispon\xedvel"]})]})]})},A.num))})]}),(0,j.jsxs)(o.FM,{children:[(0,j.jsxs)(o.d3,{children:["\xa9 ",A," Izadora Alves"]}),(0,j.jsx)(o.Zu,{}),(0,j.jsx)(o.d3,{children:"feito com \u2665"})]})]})}},490(A,e,a){a.d(e,{FM:()=>s,H2:()=>n,Qu:()=>t,Zu:()=>c,d3:()=>d,gb:()=>i});var r=a(403);const t=r.i7`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,o=r.i7`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.8); }
`,i=r.Ay.p`
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.7rem;

  &::before {
    content: "";
    width: 1.5rem;
    height: 1px;
    background: var(--accent);
  }
`,n=r.Ay.h2`
  font-family: var(--serif);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  line-height: 1.1;
  color: var(--ink);

  em {
    font-style: italic;
    color: var(--accent);
  }
`,s=r.Ay.footer`
  padding: 1.75rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--line);
  background: var(--bg);
  transition: background 0.3s, border-color 0.3s;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.85rem;
    text-align: center;
    padding: 1.75rem 1.5rem;
  }
`,d=r.Ay.span`
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--ink-soft);
`,c=r.Ay.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  animation: ${o} 2s infinite;
`}}]);
//# sourceMappingURL=847.226f83a3.chunk.js.map