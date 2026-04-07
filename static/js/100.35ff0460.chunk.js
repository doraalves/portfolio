"use strict";(globalThis.webpackChunkportfolio_izadora=globalThis.webpackChunkportfolio_izadora||[]).push([[100],{100(e,r,a){a.r(r),a.d(r,{default:()=>W});var t=a(43);class o{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Network Error";this.status=e,this.text=r}}const i={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!==typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,r)=>Promise.resolve(localStorage.setItem(e,r)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},n=e=>e?"string"===typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},s=async function(e,r){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const t=await fetch(i.origin+e,{method:"POST",headers:a,body:r}),n=await t.text(),s=new o(t.status,n);if(t.ok)return s;throw s},m=(e,r,a)=>{if(!e||"string"!==typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!r||"string"!==typeof r)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||"string"!==typeof a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},l=e=>e.webdriver||!e.languages||0===e.languages.length,d=()=>new o(451,"Unavailable For Headless Browser"),c=(e,r)=>{if((e=>!e.list?.length||!e.watchVariable)(e))return!1;((e,r)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!==typeof r)throw"The BlockList watchVariable has to be a string"})(e.list,e.watchVariable);const a=(t=r,o=e.watchVariable,t instanceof FormData?t.get(o):t[o]);var t,o;return"string"===typeof a&&e.list.includes(a)},p=()=>new o(403,"Forbidden"),f=async(e,r,a)=>{if(!r.throttle||!a)return!1;((e,r)=>{if("number"!==typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(r&&"string"!==typeof r)throw"The LimitRate ID has to be a non-empty string"})(r.throttle,r.id);const t=r.id||e,o=await(async(e,r,a)=>{const t=Number(await a.get(e)||0);return r-Date.now()+t})(t,r.throttle,a);return o>0||(await a.set(t,Date.now().toString()),!1)},g=()=>new o(429,"Too Many Requests"),h=async(e,r,a,t)=>{const o=n(t),h=o.publicKey||i.publicKey,b=o.blockHeadless||i.blockHeadless,u=i.storageProvider||o.storageProvider,v={...i.blockList,...o.blockList},x={...i.limitRate,...o.limitRate};if(b&&l(navigator))return Promise.reject(d());const y=(e=>"string"===typeof e?document.querySelector(e):e)(a);m(h,e,r),(e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"})(y);const w=new FormData(y);return c(v,w)?Promise.reject(p()):await f(location.pathname,x,u)?Promise.reject(g()):(w.append("lib_version","4.4.1"),w.append("service_id",e),w.append("template_id",r),w.append("user_id",h),s("/api/v1.0/email/send-form",w))};var b=a(647),u=a(403),v=a(490);const x=u.Ay.div`
  background: var(--bg);
  min-height: 100vh;
  animation: ${v.Qu} 0.4s ease both;
  transition: background 0.3s;
`,y=u.Ay.section`
  background: #0f0d0c;
  padding: 8rem 3rem 4rem;

  @media (max-width: 768px) {
    padding: 8rem 1.5rem 3rem;
  }
`,w=u.Ay.div`
  max-width: 1100px;
  margin: 0 auto;
`,k=u.Ay.p`
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.25rem;

  &::before {
    content: "";
    width: 1.5rem;
    height: 1px;
    background: var(--accent);
  }
`,j=u.Ay.h1`
  font-family: var(--serif);
  font-size: clamp(2.4rem, 5vw, 4rem);
  line-height: 1.05;
  color: #f5f0ea;
  max-width: 14ch;

  em {
    font-style: italic;
    color: var(--accent);
  }
`,A=u.Ay.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 4.5rem 3rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,z=u.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 5rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`,_=u.Ay.div``,T=u.Ay.p`
  font-size: 0.95rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.85;
  margin-bottom: 2rem;
`,S=u.Ay.p`
  font-family: var(--mono);
  font-size: 0.64rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.55;
  margin-bottom: 0.75rem;
`,F=u.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 2rem;
`,H=u.Ay.span`
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.06em;
  padding: 0.3rem 0.8rem;
  border: 1px solid var(--line);
  border-radius: 20px;
  color: var(--ink-soft);
  background: var(--surface);
`,I=u.Ay.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--mono);
  font-size: 0.73rem;
  letter-spacing: 0.08em;
  color: var(--ink-soft);
  text-decoration: none;
  padding: 0.7rem 1.2rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  transition: all 0.2s;
  margin-bottom: 2rem;

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
    transform: translateY(-2px);
  }
`,L=u.Ay.div`
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
`,P=u.Ay.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  color: var(--ink-soft);
  text-decoration: none;
  padding: 0.55rem 0.95rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  transition: all 0.2s;

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
    transform: translateY(-2px);
  }
`,R=u.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,D=u.Ay.div`
  margin-bottom: 1rem;
`,q=u.Ay.label`
  display: block;
  font-family: var(--mono);
  font-size: 0.64rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.65;
  margin-bottom: 0.45rem;
`,C=u.Ay.input`
  width: 100%;
  padding: 0.75rem 0.1rem;
  font-family: var(--sans);
  font-size: 0.9rem;
  color: var(--ink);
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--line);
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;

  &:focus { border-color: var(--accent); }
  &::placeholder { color: var(--ink-soft); opacity: 0.35; }
  &:disabled { opacity: 0.5; }
`,V=u.Ay.div`
  position: relative;
  margin-bottom: 1rem;
`,E=u.Ay.textarea`
  width: 100%;
  padding: 0.75rem 0.1rem;
  font-family: var(--sans);
  font-size: 0.9rem;
  color: var(--ink);
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--line);
  outline: none;
  transition: border-color 0.2s;
  resize: none;
  min-height: 140px;
  line-height: 1.7;
  box-sizing: border-box;

  &:focus { border-color: var(--accent); }
  &::placeholder { color: var(--ink-soft); opacity: 0.35; }
  &:disabled { opacity: 0.5; }
`,M=u.Ay.span`
  position: absolute;
  bottom: 0.5rem;
  right: 0.25rem;
  font-family: var(--mono);
  font-size: 0.58rem;
  color: var(--ink-soft);
  opacity: 0.4;
  pointer-events: none;

  ${e=>{let{$near:r}=e;return r&&u.AH`
    color: var(--accent);
    opacity: 0.7;
  `}}
`,Y=u.Ay.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 2rem;
  font-family: var(--mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 2px;
  cursor: pointer;
  border: none;
  background: var(--accent);
  color: white;
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
  margin-top: 0.5rem;

  &:hover:not(:disabled) {
    background: #a01415;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(200, 25, 26, 0.3);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,$=u.Ay.p`
  font-family: var(--mono);
  font-size: 0.78rem;
  color: #3a7d44;
  margin-top: 1rem;
  letter-spacing: 0.04em;
`,K=u.Ay.p`
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--accent);
  margin-top: 1rem;
  letter-spacing: 0.04em;
`,N=u.Ay.div`
  border-top: 1px solid var(--line);
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.5rem 3rem;
  font-family: var(--mono);
  font-size: 0.68rem;
  color: var(--ink-soft);
  letter-spacing: 0.08em;
  opacity: 0.5;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;var O=a(579);const B=["Freelance","Remoto","H\xedbrido","CLT"];function W(){const e=(0,t.useRef)(),[r,a]=(0,t.useState)({from_name:"",from_email:"",message:""}),[o,i]=(0,t.useState)("idle"),n=e=>a({...r,[e.target.name]:e.target.value}),s=r.from_name&&r.from_email&&r.message,m="sending"===o,l=(new Date).getFullYear(),d=r.message.length;return(0,O.jsxs)(x,{children:[(0,O.jsx)(y,{children:(0,O.jsxs)(w,{children:[(0,O.jsx)(k,{children:"contato"}),(0,O.jsxs)(j,{children:["Vamos ",(0,O.jsx)("em",{children:"trabalhar"})," juntos?"]})]})}),(0,O.jsx)(A,{children:(0,O.jsxs)(z,{children:[(0,O.jsxs)(_,{children:[(0,O.jsx)(T,{children:"Estou aberta a novos projetos, freelas e oportunidades full-time. Se voc\xea tem um produto para construir ou uma equipe que precisa de refor\xe7o t\xe9cnico, me manda uma mensagem."}),(0,O.jsx)(S,{children:"dispon\xedvel para"}),(0,O.jsx)(F,{children:B.map(e=>(0,O.jsx)(H,{children:e},e))}),(0,O.jsxs)(I,{href:"https://wa.me/5521982419979",target:"_blank",rel:"noreferrer",children:[(0,O.jsx)(b.mr,{})," Chamar no WhatsApp"]}),(0,O.jsxs)(L,{children:[(0,O.jsxs)(P,{href:"https://github.com/doraalves",target:"_blank",rel:"noreferrer",children:[(0,O.jsx)(b.Hk,{})," GitHub"]}),(0,O.jsxs)(P,{href:"https://www.linkedin.com/in/izadoraalves/",target:"_blank",rel:"noreferrer",children:[(0,O.jsx)(b.ky,{})," LinkedIn"]}),(0,O.jsxs)(P,{href:"https://www.instagram.com/izadoraaalves",target:"_blank",rel:"noreferrer",children:[(0,O.jsx)(b.oW,{size:14})," Instagram"]})]})]}),(0,O.jsxs)("form",{ref:e,onSubmit:async r=>{if(r.preventDefault(),!m){i("sending");try{await h("service_lk5zmy8","template_tfx86s1",e.current,"oeHkI3XYftME2KOZ_"),i("success"),a({from_name:"",from_email:"",message:""}),setTimeout(()=>i("idle"),5e3)}catch{console.error("Falha ao enviar formul\xe1rio"),i("error"),setTimeout(()=>i("idle"),5e3)}}},children:[(0,O.jsxs)(R,{children:[(0,O.jsxs)(D,{children:[(0,O.jsx)(q,{htmlFor:"from_name",children:"Nome"}),(0,O.jsx)(C,{id:"from_name",name:"from_name",type:"text",placeholder:"Seu nome",value:r.from_name,onChange:n,disabled:m})]}),(0,O.jsxs)(D,{children:[(0,O.jsx)(q,{htmlFor:"from_email",children:"E-mail"}),(0,O.jsx)(C,{id:"from_email",name:"from_email",type:"email",placeholder:"seu@email.com",value:r.from_email,onChange:n,disabled:m})]})]}),(0,O.jsxs)(V,{children:[(0,O.jsx)(q,{htmlFor:"message",children:"Mensagem"}),(0,O.jsx)(E,{id:"message",name:"message",placeholder:"Conte sobre o projeto ou oportunidade...",value:r.message,onChange:n,disabled:m,maxLength:500}),(0,O.jsxs)(M,{$near:d>400,children:[d,"/",500]})]}),(0,O.jsxs)(Y,{type:"submit",disabled:!s||m,children:[(0,O.jsx)(b.qx,{}),m?"Enviando...":"Enviar mensagem"]}),"success"===o&&(0,O.jsx)($,{children:"\u2713 Mensagem enviada! Responderei em breve."}),"error"===o&&(0,O.jsx)(K,{children:"\u2717 Erro ao enviar. Tente pelo WhatsApp."})]})]})}),(0,O.jsxs)(N,{children:["\xa9 ",l," Izadora Alves \xb7 S\xe3o Gon\xe7alo, RJ"]})]})}},490(e,r,a){a.d(r,{FM:()=>m,H2:()=>s,Qu:()=>o,Zu:()=>d,d3:()=>l,gb:()=>n});var t=a(403);const o=t.i7`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`,i=t.i7`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.8); }
`,n=t.Ay.p`
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
`,s=t.Ay.h2`
  font-family: var(--serif);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  line-height: 1.1;
  color: var(--ink);

  em {
    font-style: italic;
    color: var(--accent);
  }
`,m=t.Ay.footer`
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
`,l=t.Ay.span`
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--ink-soft);
`,d=t.Ay.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  animation: ${i} 2s infinite;
`}}]);
//# sourceMappingURL=100.35ff0460.chunk.js.map