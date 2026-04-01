import styled, { keyframes } from "styled-components";
import { fadeUp, pulse, SectionTag, H2, PageFooter, FooterCopy, FooterDot } from "./shared";

export { SectionTag, H2, PageFooter as Footer, FooterCopy, FooterDot, pulse };

export const Page = styled.div`
  background: var(--bg);
  min-height: 100vh;
  padding-top: 5rem;
  animation: ${fadeUp} 0.4s ease both;
`;

export const Section = styled.section`
  padding: 4.5rem 3rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const SectionHeader = styled.div`
  margin-bottom: 2.5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const AboutText = styled.p`
  font-size: 1rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.8;
  margin-bottom: 1.75rem;

  strong {
    color: var(--ink);
    font-weight: 500;
  }
`;

/* ── Stats strip ── */

export const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 3rem;
`;

export const StatItem = styled.div`
  background: var(--surface);
  padding: 1.1rem 1.25rem;
  text-align: center;
  transition: background 0.3s;

  &:hover {
    background: var(--surface-soft);
  }
`;

export const StatNum = styled.p`
  font-family: var(--serif);
  font-size: 1.8rem;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 0.25rem;
`;

export const StatLabel = styled.p`
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.65;
  line-height: 1.4;
`;

/* ── Skills agrupadas ── */

export const ButtonRow = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

export const DownloadBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-family: var(--mono);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  background: var(--accent);
  color: white;
  transition: all 0.2s;

  &:hover {
    background: #a01415;
    transform: translateY(-2px);
  }
`;

export const SkillGroups = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  margin-top: 1.75rem;
`;

export const SkillGroup = styled.div``;

export const SkillGroupLabel = styled.p`
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.45rem;
  opacity: 0.8;
`;

export const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const TechTag = styled.span`
  font-family: var(--mono);
  font-size: 0.7rem;
  padding: 0.28rem 0.7rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  color: var(--ink-soft);
  background: var(--surface);
  transition: all 0.2s;
  cursor: default;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;

/* ── Experience timeline ── */

export const ExpList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

export const ExpItem = styled.div`
  padding-left: 1.4rem;
  border-left: 2px solid var(--line);
  transition: border-color 0.2s;

  &:hover {
    border-color: var(--accent);
  }
`;

export const ExpPeriod = styled.p`
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 0.25rem;
`;

export const ExpRole = styled.p`
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--ink);
  margin-bottom: 0.2rem;
`;

export const ExpCompany = styled.p`
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--ink-soft);
  margin-bottom: 0.5rem;
`;

export const ExpDesc = styled.p`
  font-size: 0.88rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.65;
`;

export const ExpStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.6rem;
`;

export const ExpStackTag = styled.span`
  font-family: var(--mono);
  font-size: 0.62rem;
  padding: 0.18rem 0.5rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  color: var(--ink-soft);
  opacity: 0.7;
`;

export const ExpProjects = styled.div`
  margin-top: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ExpProjectLabel = styled.p`
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.5;
  margin-bottom: 0.2rem;
`;

export const ExpProjectItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
`;

export const ExpProjectDot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--accent);
  margin-top: 6px;
  flex-shrink: 0;
`;

export const ExpProjectText = styled.div``;

export const ExpProjectName = styled.a`
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const ExpProjectDesc = styled.p`
  font-size: 0.82rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.5;
`;

/* ── Carrossel — animação de slide ── */

const slideIn = keyframes`
  from { opacity: 0; transform: scale(1.03); }
  to   { opacity: 1; transform: scale(1); }
`;

/* ── Illustration section — carrossel ── */

export const IllustrationSection = styled.section`
  background: #0e0b09;
  padding: 5rem 3rem 4rem;

  @media (max-width: 768px) {
    padding: 3.5rem 1.5rem 3rem;
  }
`;

export const IlluInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const IlluInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const IlluTag = styled.p`
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #d62828;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  &::before {
    content: "";
    width: 1.5rem;
    height: 1px;
    background: #d62828;
  }
`;

export const IlluH2 = styled.h2`
  font-family: var(--serif);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  line-height: 1.1;
  color: white;

  em {
    font-style: italic;
    color: #d62828;
  }
`;

export const IlluDesc = styled.p`
  font-size: 0.92rem;
  color: rgba(245, 240, 234, 0.45);
  font-weight: 300;
  line-height: 1.7;
  max-width: 40ch;
`;

export const IlluBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  background: transparent;
  color: rgba(245, 240, 234, 0.7);
  border: 1.5px solid rgba(245, 240, 234, 0.2);
  transition: all 0.2s;
  align-self: flex-start;
  margin-top: 0.5rem;

  &:hover {
    border-color: #d62828;
    color: #d62828;
    transform: translateY(-2px);
  }
`;

/* ── Carrossel ── */

export const CarouselWrap = styled.div`
  position: relative;
`;

export const CarouselSlide = styled.div`
  position: relative;
  background: #080605;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 480px;

  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    display: block;
    border-radius: 2px;
    animation: ${slideIn} 0.45s ease both;
  }

  @media (max-width: 768px) {
    height: 320px;
  }
`;

export const CarouselArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $side }) => $side === "left" ? "left: -18px;" : "right: -18px;"}
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #0e0b09;
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(245,240,234,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: all 0.2s;
  z-index: 2;

  &:hover {
    border-color: #d62828;
    color: #d62828;
    background: rgba(214,40,40,0.08);
  }
`;

export const CarouselBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 0 2px;
`;

export const CarouselCaption = styled.p`
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(245, 240, 234, 0.3);
`;

export const CarouselCounter = styled.p`
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  color: rgba(245, 240, 234, 0.25);
`;

export const CarouselDots = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const CarouselDot = styled.button`
  width: ${({ $active }) => ($active ? "18px" : "5px")};
  height: 5px;
  border-radius: 3px;
  background: ${({ $active }) => ($active ? "#d62828" : "rgba(245,240,234,0.2)")};
  border: none;
  transition: all 0.3s;
`;

export const ZoomHint = styled.p`
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(245, 240, 234, 0.2);
  text-align: center;
  margin-top: 0.5rem;
`;

/* ── Lightbox ── */

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

export const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: rgba(4, 3, 2, 0.97);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.2s ease;
  backdrop-filter: blur(6px);
`;

export const LightboxImg = styled.img`
  max-width: 90vw;
  max-height: 88vh;
  object-fit: contain;
  border-radius: 2px;
  display: block;
`;

export const LightboxClose = styled.button`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(245,240,234,0.7);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    border-color: #d62828;
    color: #d62828;
  }
`;

export const LightboxNav = styled.button`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  ${({ $side }) => $side === "left" ? "left: 1.5rem;" : "right: 1.5rem;"}
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(245,240,234,0.7);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    border-color: #d62828;
    color: #d62828;
    background: rgba(214,40,40,0.1);
  }
`;

export const LightboxCaption = styled.p`
  position: fixed;
  bottom: 1.75rem;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(245, 240, 234, 0.4);
  white-space: nowrap;
`;

/* ── TCC section ── */

export const TccSection = styled.section`
  background: var(--surface);
  border-top: 1px solid var(--line);
  padding: 5rem 3rem 4.5rem;

  @media (max-width: 768px) {
    padding: 3.5rem 1.5rem 3rem;
  }
`;

export const TccInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const TccHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const TccTag = styled.p`
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 0.6rem;

  &::before {
    content: "";
    width: 1.5rem;
    height: 1px;
    background: var(--accent);
  }
`;

export const TccH2 = styled.h2`
  font-family: var(--serif);
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  line-height: 1.15;
  color: var(--ink);

  em {
    font-style: italic;
    color: var(--accent);
  }
`;

export const TccDesc = styled.p`
  font-size: 0.92rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.75;

  & + & {
    margin-top: 0.75rem;
  }

  strong {
    color: var(--ink);
    font-weight: 500;
  }

  em {
    font-style: italic;
    color: var(--accent);
  }
`;

export const TccStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.25rem;
`;

export const TccTag2 = styled.span`
  font-family: var(--mono);
  font-size: 0.65rem;
  padding: 0.22rem 0.6rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  color: var(--ink-soft);
  background: var(--bg);
`;

export const TccActions = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`;

export const TccBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  transition: all 0.2s;

  ${({ $primary }) => $primary ? `
    background: var(--accent);
    color: white;
    border: 1.5px solid var(--accent);
    &:hover { background: #a01415; border-color: #a01415; transform: translateY(-2px); }
  ` : `
    background: transparent;
    color: var(--ink-soft);
    border: 1.5px solid var(--line);
    &:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }
  `}
`;

export const TccMedia = styled.div`
  position: relative;
`;

export const TccGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const TccGridImg = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: contain;
  background: var(--bg);
  border-radius: 4px;
  border: 1px solid var(--line);
  display: block;
  transition: transform 0.2s, border-color 0.2s;

  &:hover {
    transform: translateY(-3px);
    border-color: var(--accent);
  }
`;

/* ── TCC Gallery ── */

export const TccGallery = styled.div`
  position: relative;
`;

export const TccGallerySlide = styled.div`
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 340px;

  img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    display: block;
    border-radius: 2px;
    animation: ${slideIn} 0.35s ease both;
  }

  @media (max-width: 768px) {
    height: 240px;
  }
`;

export const TccGalleryArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $side }) => $side === "left" ? "left: -16px;" : "right: -16px;"}
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--surface);
  border: 1px solid var(--line);
  color: var(--ink-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  transition: all 0.2s;
  z-index: 2;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;

export const TccGalleryBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.75rem;
  padding: 0 2px;
`;

export const TccGalleryCaption = styled.p`
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.5;
`;

export const TccGalleryDots = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const TccGalleryDot = styled.button`
  width: ${({ $active }) => ($active ? "16px" : "5px")};
  height: 5px;
  border-radius: 3px;
  background: ${({ $active }) => ($active ? "var(--accent)" : "var(--line)")};
  border: none;
  transition: all 0.3s;
`;
