import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { DownloadIcon, InstagramIcon } from "../components/Icons";
import {
  Page, Section, SectionHeader, SectionTag, H2,
  Grid, AboutText, StatsRow, StatItem, StatNum, StatLabel,
  ButtonRow, DownloadBtn,
  SkillGroups, SkillGroup, SkillGroupLabel, TechRow, TechTag,
  ExpList, ExpItem, ExpPeriod, ExpRole, ExpCompany, ExpDesc,
  ExpStack, ExpStackTag,
  ExpProjects, ExpProjectLabel, ExpProjectItem,
  ExpProjectDot, ExpProjectText, ExpProjectName, ExpProjectDesc,
  TccSection, TccInner, TccHeader, TccTag, TccH2, TccDesc,
  TccStack, TccTag2, TccActions, TccBtn,
  TccGrid, TccGridImg,
  IllustrationSection, IlluInner, IlluInfo,
  IlluTag, IlluH2, IlluDesc, IlluBtn,
  CarouselWrap, CarouselSlide, CarouselArrow,
  CarouselBottom, CarouselCounter,
  CarouselDots, CarouselDot,
  LightboxOverlay, LightboxImg, LightboxClose, LightboxNav, LightboxCaption,
  Footer, FooterCopy, FooterDot,
} from "../styles/About.styled";

import experience  from "../data/experience";

import imgBillie   from "../assets/illustrations/billieInsta.jpg";
import imgRihanna  from "../assets/illustrations/rihannaInsta.jpg";
import imgBrunao   from "../assets/illustrations/Brunao2.jpg";
import imgGlei     from "../assets/illustrations/p.gleiInsta.jpg";
import imgRafael   from "../assets/illustrations/p_rafael.jpg";
import imgWA       from "../assets/illustrations/post-instaWA.jpg";
import imgPlaylist from "../assets/illustrations/p-v-a4-musica-playlist.jpg";
import imgDemi     from "../assets/illustrations/demi-rockinrio.png";
import imgLuane    from "../assets/illustrations/Luane__1_.png";
import curriculo from "../assets/docs/curriculo-izadora.pdf";
import tccPdf    from "../assets/docs/tcc-izadora.pdf";

import tccFig40 from "../assets/tcc/tcc_p54_0.jpeg";
import tccFig43 from "../assets/tcc/tcc_p58_0.png";
import tccFig44 from "../assets/tcc/tcc_p59_0.png";
import tccFig46 from "../assets/tcc/tcc_p60_0.jpeg";
import tccFig49 from "../assets/tcc/tcc_p61_1.jpeg";
import tccFig51 from "../assets/tcc/fig51_sprite_correndo.png";
import tccFig56 from "../assets/tcc/tcc_p65_0.jpeg";
import tccFig58 from "../assets/tcc/tcc_p66_1.jpeg";
import tccFig59 from "../assets/tcc/tcc_p67_0.jpeg";

const tccScreenshots = [
  { src: tccFig46, alt: "Figura 46 · tela de menu"            },
  { src: tccFig59, alt: "Figura 59 · 4ª tela de recompensa"   },
  { src: tccFig58, alt: "Figura 58 · 3ª tela de recompensa"   },
  { src: tccFig44, alt: "Figura 44 · fase inicial"            },
  { src: tccFig56, alt: "Figura 56 · 1ª tela de recompensa"   },
  { src: tccFig40, alt: "Figura 40 · criação da arte"         },
  { src: tccFig49, alt: "Figura 49 · tela de fim de jogo"     },
  { src: tccFig43, alt: "Figura 43 · As Aventuras da Garota Ciência" },
  { src: tccFig51, alt: "Figura 51 · sprite correndo"         },
];

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "Vue.js", "TypeScript", "JavaScript", "HTML/CSS", "SCSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Django", "Python", "API RESTful", "WebSockets"],
  },
  {
    label: "Design & criatividade",
    skills: ["Figma", "Illustrator", "p5.js", "D3.js", "Processing"],
  },
  {
    label: "Ferramentas",
    skills: ["Docker", "Git", "Jira", "Scrum"],
  },
  {
    label: "Estudando",
    skills: ["React Native", "Flutter", "Mobile Development"],
  },
];

const stats = [
  { num: "2+", label: "anos de experiência full stack" },
  { num: "10+", label: "anos de estudo em desenvolvimento web" },
  { num: "9",  label: "projetos no portfólio" },
];

const illustrations = [
  { src: imgBillie,   alt: "Billie Eilish"     },
  { src: imgRihanna,  alt: "Rihanna"            },
  { src: imgDemi,     alt: "Demi Rock in Rio"   },
  { src: imgBrunao,   alt: "Bruno"              },
  { src: imgGlei,     alt: "Amor da Glei"       },
  { src: imgRafael,   alt: "Amigos do Rafael"   },
  { src: imgWA,       alt: "Wanda Maximoff"     },
  { src: imgLuane,    alt: "Familia da Luane"   },
  { src: imgPlaylist, alt: "Playlist Vicente"   },
];

const N = illustrations.length;

export default function About() {
  const year = new Date().getFullYear();
  const [idx,      setIdx]      = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const prev = useCallback(() => setIdx(i => (i - 1 + N) % N), []);
  const next = useCallback(() => setIdx(i => (i + 1) % N),     []);

  // Auto-advance a cada 3.5s
  useEffect(() => {
    if (lightbox !== null) return;
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [lightbox, next]);

  const prevLight = useCallback(() => setLightbox(i => (i - 1 + N) % N), []);
  const nextLight = useCallback(() => setLightbox(i => (i + 1) % N),     []);

  // Teclado para carrossel e lightbox
  useEffect(() => {
    const handler = (e) => {
      if (lightbox !== null) {
        if (e.key === "Escape")     setLightbox(null);
        if (e.key === "ArrowLeft")  prevLight();
        if (e.key === "ArrowRight") nextLight();
      } else {
        if (e.key === "ArrowLeft")  prev();
        if (e.key === "ArrowRight") next();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, prev, next, prevLight, nextLight]);

  // Bloqueia scroll quando lightbox está aberto
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const current = illustrations[idx];

  return (
    <Page>
      <Section>
        <SectionHeader>
          <SectionTag>sobre mim</SectionTag>
          <H2>
            Código, design<br />e <em>criatividade</em>
          </H2>
        </SectionHeader>

        <StatsRow>
          {stats.map((s) => (
            <StatItem key={s.label}>
              <StatNum>{s.num}</StatNum>
              <StatLabel>{s.label}</StatLabel>
            </StatItem>
          ))}
        </StatsRow>

        <Grid>
          <div>
            <AboutText>
              Sou desenvolvedora Full Stack com experiência real em{" "}
              <strong>uma das maiores varejistas do Brasil</strong> e pesquisa
              em arte e tecnologia. Construo produtos digitais do design à
              infraestrutura, com atenção a performance, usabilidade e código
              que escala.
            </AboutText>
            <AboutText>
              Tenho facilidade em trabalhar em{" "}
              <strong>times multidisciplinares</strong> e gosto de resolver
              problemas complexos com soluções diretas: seja otimizando uma API,
              redesenhando um fluxo de UX ou prototipando em realidade virtual.
            </AboutText>

            <SkillGroups>
              {skillGroups.map((group) => (
                <SkillGroup key={group.label}>
                  <SkillGroupLabel>{group.label}</SkillGroupLabel>
                  <TechRow>
                    {group.skills.map((s) => (
                      <TechTag key={s}>{s}</TechTag>
                    ))}
                  </TechRow>
                </SkillGroup>
              ))}
            </SkillGroups>

            <ButtonRow>
              <DownloadBtn href={curriculo} download="curriculo-izadora.pdf">
                <DownloadIcon /> Baixar currículo
              </DownloadBtn>
            </ButtonRow>
          </div>

          <ExpList>
            {experience.map((e) => (
              <ExpItem key={e.period}>
                <ExpPeriod>{e.period}</ExpPeriod>
                <ExpRole>{e.role}</ExpRole>
                <ExpCompany>{e.company}</ExpCompany>
                <ExpDesc>{e.desc}</ExpDesc>

                {e.stack.length > 0 && (
                  <ExpStack>
                    {e.stack.map((t) => (
                      <ExpStackTag key={t}>{t}</ExpStackTag>
                    ))}
                  </ExpStack>
                )}

                {e.projects.length > 0 && (
                  <ExpProjects>
                    <ExpProjectLabel>projetos desenvolvidos</ExpProjectLabel>
                    {e.projects.map((p) => (
                      <ExpProjectItem key={p.name}>
                        <ExpProjectDot />
                        <ExpProjectText>
                          <ExpProjectName href={p.href} target="_blank" rel="noreferrer">
                            {p.name} ↗
                          </ExpProjectName>
                          <ExpProjectDesc>{p.desc}</ExpProjectDesc>
                        </ExpProjectText>
                      </ExpProjectItem>
                    ))}
                  </ExpProjects>
                )}
              </ExpItem>
            ))}
          </ExpList>
        </Grid>
      </Section>

      {/* ── Carrossel de ilustrações ── */}
      <IllustrationSection>
        <IlluInner>
          <IlluInfo>
            <IlluTag>ilustração</IlluTag>
            <IlluH2>
              Além do código,<br />também <em>desenho</em>
            </IlluH2>
            <IlluDesc>
              Retratos, personagens e composições criativas.
              Transformo ideias em ilustrações digitais.
              <br />
              Use as setas ou as teclas ← → para navegar.
              Clique na imagem para ver em tela cheia.
            </IlluDesc>
            <IlluBtn
              href="https://www.instagram.com/ilustradoradora"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon size={15} /> @ilustradoradora
            </IlluBtn>
          </IlluInfo>

          <CarouselWrap>
            <CarouselSlide onClick={() => setLightbox(idx)}>
              <img key={idx} src={current.src} alt={current.alt} />
            </CarouselSlide>

            <CarouselArrow $side="left"  onClick={prev}>‹</CarouselArrow>
            <CarouselArrow $side="right" onClick={next}>›</CarouselArrow>

            <CarouselBottom>
              <CarouselDots>
                {illustrations.map((_, i) => (
                  <CarouselDot key={i} $active={i === idx} onClick={() => setIdx(i)} />
                ))}
              </CarouselDots>
              <CarouselCounter>{idx + 1} / {N}</CarouselCounter>
            </CarouselBottom>
          </CarouselWrap>
        </IlluInner>
      </IllustrationSection>

      {/* ── Lightbox ── */}
      {lightbox !== null && ReactDOM.createPortal(
        <LightboxOverlay onClick={() => setLightbox(null)}>
          <LightboxImg
            src={illustrations[lightbox].src}
            alt={illustrations[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <LightboxClose onClick={() => setLightbox(null)}>✕</LightboxClose>
          <LightboxNav $side="left"  onClick={(e) => { e.stopPropagation(); prevLight(); }}>‹</LightboxNav>
          <LightboxNav $side="right" onClick={(e) => { e.stopPropagation(); nextLight(); }}>›</LightboxNav>
          <LightboxCaption>{illustrations[lightbox].alt}</LightboxCaption>
        </LightboxOverlay>,
        document.body
      )}

      {/* ── TCC ── */}
      <TccSection>
        <TccInner>
          <TccHeader>
            <TccTag>trabalho de conclusão de curso · UVA · 2021 · nota 10</TccTag>
            <TccH2>
              As Aventuras da <em>Garota Ciência</em>
            </TccH2>
            <TccDesc>
              Meu TCC em Ciência da Computação propõe a{" "}
              <strong>gamificação</strong> como estratégia para discutir a
              sub-representação das mulheres na tecnologia. O produto final é um
              jogo 2D de plataforma onde a <strong>Garota Ciência</strong>, 
              personagem sempre à procura de novas aventuras, embarca em uma
              realidade alternativa para descobrir a história de uma das mulheres
              mais importantes da computação.
            </TccDesc>
            <TccDesc>
              Nessa aventura, o foco é a{" "}
              <strong>Condessa Ada Lovelace</strong>: a matemática que criou o
              primeiro algoritmo para ser processado por uma máquina, no século
              XIX, muito antes do computador pessoal existir. Sua importância é
              tão reconhecida que desde 2009, todo dia 15 de outubro, o mundo
              celebra o <em>Ada Lovelace Day</em> para inspirar mulheres nas
              áreas de ciência, tecnologia, engenharia e matemática.
            </TccDesc>
            <TccDesc>
              No jogo, a Garota Ciência precisa coletar moedas, passar por
              armadilhas e desafios crescentes para desbloquear partes da
              história de Ada. A cada fase vencida, ela se aproxima da sua
              própria resposta: a de que é tão capaz quanto qualquer outro de
              realizar o que sempre sonhou. Todo o código foi escrito em{" "}
              <strong>C# na Unity</strong>; os sprites e cenários foram
              desenhados à mão no <strong>Infinite Painter</strong>.
            </TccDesc>
            <TccStack>
              {["Unity", "C#", "Infinite Painter", "Design de Jogos", "Gamificação"].map(t => (
                <TccTag2 key={t}>{t}</TccTag2>
              ))}
            </TccStack>
            <TccActions>
              <TccBtn href={tccPdf} download="tcc-izadora.pdf" $primary>
                <DownloadIcon /> Baixar TCC (PDF)
              </TccBtn>
            </TccActions>
          </TccHeader>

          <TccGrid>
            {tccScreenshots.map((img, i) => (
              <TccGridImg key={i} src={img.src} alt={img.alt} />
            ))}
          </TccGrid>
        </TccInner>
      </TccSection>

      <Footer>
        <FooterCopy>© {year} Izadora Alves · São Gonçalo, RJ</FooterCopy>
        <FooterDot />
        <FooterCopy>feito com ♥</FooterCopy>
      </Footer>
    </Page>
  );
}
