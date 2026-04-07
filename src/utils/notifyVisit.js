const WEBHOOK_URL = process.env.REACT_APP_DISCORD_WEBHOOK_URL;

let startTime    = null;
const pagesVisited = [];

function formatDuration(ms) {
  const s = Math.floor(ms / 1000);
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  const r = s % 60;
  return r > 0 ? `${m}min ${r}s` : `${m}min`;
}

function post(payload) {
  if (!WEBHOOK_URL) return;
  fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "iza.dev", ...payload }),
  }).catch(() => {});
}

function beacon(payload) {
  if (!WEBHOOK_URL) return;
  const blob = new Blob(
    [JSON.stringify({ username: "iza.dev", ...payload })],
    { type: "application/json" }
  );
  navigator.sendBeacon(WEBHOOK_URL, blob);
}

export function notifyVisit() {
  if (!WEBHOOK_URL) return;
  startTime = Date.now();
  pagesVisited.length = 0;
  pagesVisited.push("Home");

  const isMobile = window.innerWidth < 768;
  const device   = `${isMobile ? "📱 Mobile" : "🖥️ Desktop"} · ${window.screen.width}×${window.screen.height}`;
  const lang     = navigator.language || "—";
  const ref      = document.referrer || "acesso direto";

  post({
    embeds: [
      {
        color: 0x3a7d44,
        title: "👁️  Nova visita",
        fields: [
          { name: "🌍  Idioma", value: `\`${lang}\``, inline: true },
          { name: "📱  Dispositivo", value: `\`${device}\``, inline: true },
          { name: "🔗  Origem", value: ref, inline: false },
        ],
        timestamp: new Date().toISOString(),
        footer: { text: "iza.dev · izadora alves" },
      },
    ],
  });
}

export function trackPage(name) {
  if (pagesVisited[pagesVisited.length - 1] !== name) {
    pagesVisited.push(name);
  }
}

export function notifyProjectClick(title) {
  post({
    embeds: [{
      color: 0xe8a020,
      title: "🔗  Projeto acessado",
      description: `**${title}**`,
      timestamp: new Date().toISOString(),
      footer: { text: "iza.dev · izadora alves" },
    }],
  });
}

export function notifyLeave() {
  if (!startTime) return;
  const duration = formatDuration(Date.now() - startTime);
  const path     = pagesVisited.join(" → ");
  startTime      = null;

  beacon({
    embeds: [{
      color: 0xc8191a,
      title: "🚪  Sessão encerrada",
      fields: [
        { name: "⏱️  Duração",  value: `\`${duration}\``, inline: true  },
        { name: "🗺️  Percurso", value: path,              inline: false },
      ],
      timestamp: new Date().toISOString(),
      footer: { text: "iza.dev · izadora alves" },
    }],
  });
}
