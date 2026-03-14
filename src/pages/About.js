import React from "react";
import { DownloadIcon, InstagramIcon } from "../components/Icons";
import {
  Page,
  Section,
  SectionHeader,
  SectionTag,
  H2,
  Grid,
  AboutText,
  ButtonRow,
  DownloadBtn,
  TechRow,
  TechTag,
  ExpList,
  ExpItem,
  ExpPeriod,
  ExpRole,
  ExpCompany,
  ExpDesc,
  IllustrationSection,
  IllustrationBg,
  BgImage,
  IllustrationContent,
  IllustrationText,
  IlluTag,
  IlluH2,
  IlluDesc,
  IlluBtn,
  IllustrationGallery,
  GalleryImgWrap,
  Footer,
  FooterCopy,
  FooterDot,
} from "../styles/About.styled";

import imgBillie from "../assets/illustrations/billieInsta.jpg";
import imgRihanna from "../assets/illustrations/rihannaInsta.jpg";
import imgBrunao from "../assets/illustrations/Brunao2.jpg";
import imgGlei from "../assets/illustrations/p.gleiInsta.jpg";
import imgRafael from "../assets/illustrations/p_rafael.jpg";
import imgWA from "../assets/illustrations/post-instaWA.jpg";
import imgPlaylist from "../assets/illustrations/p-v-a4-musica-playlist.jpg";
import imgDemi from "../assets/illustrations/demi-rockinrio.png";
import imgLuane from "../assets/illustrations/Luane__1_.png";
import curriculo from "../assets/cv/curriculo-izadora.pdf";

const skills = [
  "React",
  "Vue.js",
  "Django",
  "Node.js",
  "p5.js",
  "JavaScript",
  "HTML/CSS",
  "Python",
  "Docker",
  "Figma",
  "WordPress",
];

const experience = [
  {
    period: "Jan 2025 — presente",
    role: "Bolsista — Apoio Técnico & Pesquisa",
    company: "ESDI / UERJ — MediaLAB",
    desc: "Apoio em aulas de programação criativa com p5.js, prototipagem em realidade virtual (Meta Quest 3) e instalações interativas na fronteira entre arte, design e tecnologia.",
  },
  {
    period: "Jan 2023 — Jul 2023",
    role: "Desenvolvedora de Software Júnior",
    company: "Americanas S.A",
    desc: "Desenvolvimento de soluções internas, redesenho de interfaces UX/UI e criação de sistema de monitoramento de equipe em tempo real. Atuação em squads ágeis com Scrum e Jira.",
  },
  {
    period: "Jul 2022 — Dez 2022",
    role: "Estagiária em Desenvolvimento de Software",
    company: "Americanas S.A",
    desc: "Atuação em 5 equipes estratégicas desenvolvendo dashboards, sistemas de pedidos e APIs RESTful com ReactJS, Node.js e Django.",
  },
  {
    period: "Jan 2016 — Jul 2022",
    role: "Graduação em Ciência da Computação",
    company: "Universidade Veiga de Almeida",
    desc: "Formação em Ciência da Computação com foco em desenvolvimento de software e sistemas.",
  },
];

const galleryImages = [
  { src: imgBillie, alt: "Ilustração Billie Eilish" },
  { src: imgRihanna, alt: "Ilustração Rihanna" },
  { src: imgBrunao, alt: "Ilustração Brunão" },
];

const bgImages = [
  imgWA,
  imgRafael,
  imgGlei,
  imgDemi,
  imgLuane,
  imgPlaylist,
];

export default function About() {
  const year = new Date().getFullYear();

  return (
    <Page>
      {/* ABOUT + EXPERIENCE */}
      <Section>
        <SectionHeader>
          <SectionTag>sobre mim</SectionTag>
          <H2>
            Código, design
            <br />e <em>criatividade</em>
          </H2>
        </SectionHeader>
        <Grid>
          <div>
            <AboutText>
              Sou desenvolvedora Full Stack com passagem por grandes empresas e
              projetos experimentais. Atualmente, combino minha experiência
              técnica com <strong>pesquisa em arte e tecnologia</strong> no
              MediaLAB da ESDI/UERJ, desenvolvendo instalações interativas e
              projetos em realidade virtual.
            </AboutText>
            <AboutText>
              Tenho facilidade em trabalhar em{" "}
              <strong>times multidisciplinares</strong> e gosto de resolver
              problemas complexos com soluções simples — seja refatorando código
              legado ou desenhando uma nova interface do zero.
            </AboutText>
            <TechRow>
              {skills.map((s) => (
                <TechTag key={s}>{s}</TechTag>
              ))}
            </TechRow>
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
              </ExpItem>
            ))}
          </ExpList>
        </Grid>
      </Section>

      <IllustrationSection>
        <IllustrationBg>
          {bgImages.map((src, i) => (
            <BgImage key={i} $src={src} />
          ))}
        </IllustrationBg>

        <IllustrationContent>
          <IllustrationText>
            <IlluTag>ilustração</IlluTag>
            <IlluH2>
              Além do código,
              <br />
              também <em>desenho</em>
            </IlluH2>
            <IlluDesc>
              Sou ilustradora digital e uso a arte como forma de expressão
              criativa. Retratos, personagens e composições digitais — cada
              traço conta uma história.
            </IlluDesc>
            <IlluBtn
              href="https://www.instagram.com/ilustradoradora"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon size={15} /> @ilustradoradora
            </IlluBtn>
          </IllustrationText>

          <IllustrationGallery>
            {galleryImages.map((img, i) => (
              <GalleryImgWrap key={i}>
                <img src={img.src} alt={img.alt} />
              </GalleryImgWrap>
            ))}
          </IllustrationGallery>
        </IllustrationContent>
      </IllustrationSection>

      <Footer>
        <FooterCopy>© {year} Izadora Alves — São Gonçalo, RJ</FooterCopy>
        <FooterDot />
        <FooterCopy>feito com ♥</FooterCopy>
      </Footer>
    </Page>
  );
}
