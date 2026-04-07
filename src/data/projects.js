import img001 from "../assets/screenshots/001.jpg";
import img002 from "../assets/screenshots/002.jpg";
import img003 from "../assets/screenshots/003.jpg";
import img004 from "../assets/screenshots/004.jpg";
import botsy from "../assets/screenshots/botsynergy.png";
import cartao from "../assets/screenshots/cartaov.png";

const projects = [
  {
    num: "001",
    title: "BlackVis",
    preview: true,
    status: "em desenvolvimento",
    shortDesc:
      "Visualização interativa em grafo de força de designers negros brasileiros, com filtros por área e nome.",
    desc: "Visualização de dados construída com D3.js v7 como ferramenta de visibilidade para designers negros brasileiros e estrangeiros. Exibe um grafo de força onde nós representam designers, técnicas e áreas do design, conectados por afinidade. Filtros por ano de nascimento, área ou nome permitem exploração não-linear dos dados. Projeto com propósito social e técnica de visualização avançada.",
    stack: ["D3.js", "JavaScript", "HTML", "SCSS"],
    link: "https://blackvisesdi.github.io/BlackVis/",
    github: "https://github.com/blackvisesdi/BlackVis",
    figma: null,
    thumb: img004,
  },
  {
    num: "002",
    title: "Bot Synergy",
    preview: true,
    status: "2026",
    shortDesc:
      "Ferramenta para jogadores de League of Legends escolherem duos de bot lane com base em sinergia e estilo de jogo.",
    desc: "Aplicação full-stack que sugere combinações de campeões para a bot lane do League of Legends em dois modos: 'Jogar Sério' (sinergias meta com tier S) e 'Se Divertir' (combos off-meta). O back-end em Node.js/Express expõe uma REST API que retorna 3 duos randomizados, com regra de garantia de ao menos um S-tier no modo divertido. Os assets dos campeões são carregados diretamente do CDN público do Riot Data Dragon.",
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "JavaScript",
    ],
    link: "https://botsynergy.vercel.app",
    github: "https://github.com/doraalves/botlane-synergy",
    figma: null,
    thumb: botsy,
  },
  {
    num: "003",
    title: "Cartão de Visita Digital",
    preview: true,
    status: "2026",
    shortDesc:
      "Cartão de visita digital interativo com tema de gatinhos, trilha de patinhas animada e links para redes sociais.",
    desc: "Cartão de visita digital desenvolvido em React com Styled Components, com design temático de gatinhos (Frajola e Siamês). Conta com uma trilha de patinhas animada, links diretos para WhatsApp, GitHub e LinkedIn. Projeto que une criatividade visual com técnica de animação em React.",
    stack: ["React", "Styled Components", "JavaScript"],
    link: "https://doraalves.github.io/cartao-visita/",
    github: "https://github.com/doraalves/cartao-visita",
    figma: null,
    thumb: cartao,
  },
  {
    num: "004",
    title: "Jogo de Estoura Balões",
    preview: true,
    status: "2024",
    shortDesc:
      "Jogo interativo com dificuldade crescente, sistema de combos e cursor personalizado.",
    desc: "Projeto desenvolvido em JavaScript Vanilla para explorar a manipulação direta do DOM e lógica de colisão sem dependência de frameworks. Foquei na criação de uma curva de aprendizado progressiva através de algoritmos de velocidade variável e sistemas de pontuação por combo, garantindo uma interface fluida com animações em SVG e feedback visual instantâneo.",
    stack: ["JavaScript", "HTML", "CSS"],
    link: "https://doraalves.github.io/baloes/",
    github: "https://github.com/doraalves/baloes",
    figma: null,
    thumb: img002,
  },
  {
    num: "005",
    title: "Calculadora iOS Clone",
    preview: true,
    status: "2024",
    shortDesc:
      "Calculadora com interface inspirada no iOS, suporte a teclado e histórico de expressões.",
    desc: "Desenvolvimento de uma aplicação web com foco em fidelidade visual (UI/UX) e robustez lógica. O projeto resolve desafios comuns de aritmética computacional, como o tratamento de erros de ponto flutuante e a gestão de estados para encadeamento de operações. Implementei suporte completo a atalhos de teclado e histórico dinâmico, priorizando a acessibilidade e a experiência do usuário.",
    stack: ["JavaScript", "HTML", "CSS"],
    link: "https://doraalves.github.io/calculadora/",
    github: "https://github.com/doraalves/calculadora",
    figma: null,
    thumb: img001,
  },
  {
    num: "006",
    title: "Cronômetro",
    preview: true,
    status: "2024",
    shortDesc:
      "Cronômetro com marcação de voltas, anel SVG animado e destaque da melhor e pior volta.",
    desc: "Cronômetro avançado que utiliza animações sincronizadas via SVG para representação visual do tempo. O diferencial técnico está no algoritmo de análise de performance, que identifica e destaca automaticamente os melhores e piores tempos de volta. Desenvolvido com foco em arquitetura limpa, utilizando atalhos de teclado para otimizar o fluxo de trabalho do usuário. Suporta atalhos de teclado (Espaço, L, R) para uso sem mouse.",
    stack: ["JavaScript", "HTML", "CSS"],
    link: "https://doraalves.github.io/cronometro/",
    github: "https://github.com/doraalves/cronometro",
    figma: null,
    thumb: img003,
  },
  {
    num: "007",
    title: "Galeria Imersiva (Web 3.0 / VR)",
    status: "2025",
    shortDesc:
      "Instalações interativas e espaços imersivos em Meta Quest 3, explorando arte, design e tecnologia.",
    desc: "Prototipagem de instalações interativas e ambientes imersivos para a plataforma Spatial, exibidos em Meta Quest 3. Projeto experimental do MediaLAB/ESDI que explora a fronteira entre arte, design e tecnologia em espaços virtuais tridimensionais. Programação criativa com p5.js integrada ao ambiente 3D.",
    stack: ["Spatial", "Meta Quest 3", "JavaScript", "p5.js", "Figma"],
    link: "https://www.spatial.io/s/Media-Labs-1-0-Claro-6826039af8049f0d7678b6fe?share=1267569543253887910",
    figma:
      "https://www.figma.com/proto/p4XoK4HtQAH3xUZ6u7IRTW/MEDIALAB-UERJ-RIO2C-2025?page-id=0%253A1&node-id=1-3&viewport=116%252C0%252C0.7&t=fgPmz23wxGwTVIsS-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%253A3",
    github: null,
  },
  {
    num: "008",
    title: "Site Institucional MediaLAB",
    status: "2025",
    shortDesc:
      "Site institucional do laboratório de mídia da ESDI/UERJ, integrando identidade visual e arquitetura de conteúdo.",
    desc: "Desenvolvimento completo do site institucional do MediaLAB da ESDI/UERJ. Responsável pela arquitetura de informação, implementação da identidade visual no ambiente digital e publicação de projetos experimentais do laboratório. Desenvolvido em WordPress com customizações em HTML, CSS e JavaScript.",
    stack: ["WordPress", "HTML", "CSS", "JavaScript"],
    link: null,
    github: null,
    figma: null,
    thumb: null,
  },
  {
    num: "009",
    title: "Dashboard de Operações (Real-time)",
    status: "2023",
    shortDesc:
      "Dashboard em tempo real para gestão de equipes na Americanas S.A., com status e setor de cada colaborador.",
    desc: "Dashboard interno desenvolvido na Americanas S.A. para centralizar status, setor e cargo de cada colaborador em tempo real. Substituiu comunicações dispersas por uma visão única e atualizada, melhorando a gestão e resposta das lideranças. Desenvolvido com Vue.js no front e Django + WebSockets no back-end, containerizado com Docker.",
    stack: ["Vue.js", "Django", "Python", "WebSockets", "HTML/SCSS", "Docker"],
    link: null,
    github: null,
    figma: null,
    thumb: null,
  },
  {
    num: "010",
    title: "Hub de Inovação & KPIs",
    status: "2023",
    shortDesc:
      "Plataforma de monitoramento de projetos e métricas de vendas para a equipe de Inovação da Americanas.",
    desc: "Aplicação de monitoramento desenvolvida para a equipe de Inovação da Americanas S.A. Consolidou dados de dezenas de projetos estratégicos, análise de resultados de vendas e métricas de KPIs em uma única interface atualizada em tempo real. Desenvolvida com ReactJS, Node.js e integração com APIs RESTful internas.",
    stack: ["ReactJS", "Node.js", "Styled Components", "API RESTful"],
    link: null,
    github: null,
    figma: null,
    thumb: null,
  },
  {
    num: "011",
    title: "Core de Gerenciamento de Pedidos",
    status: "2023",
    shortDesc:
      "Front-end do sistema de pedidos do Americanas Mercado, com foco em performance e integração com APIs de alto tráfego.",
    desc: "Implementação front-end do sistema de gerenciamento de pedidos para o Americanas Mercado. Foco em performance, acessibilidade e usabilidade em um ambiente de alto volume de transações. Componentização reutilizável com ReactJS e Styled Components, integração com APIs RESTful internas e atenção a estados de loading, erro e sucesso.",
    stack: ["ReactJS", "Node.js", "API RESTful", "Styled Components"],
    link: null,
    github: null,
    figma: null,
    thumb: null,
  },
];

export default projects;
