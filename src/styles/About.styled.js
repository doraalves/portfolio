import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
`;

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
  margin-bottom: 3rem;
`;

export const SectionTag = styled.p`
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
`;

export const H2 = styled.h2`
  font-family: var(--serif);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  line-height: 1.1;
  color: var(--ink);

  em {
    font-style: italic;
    color: var(--accent);
  }
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
  cursor: pointer;
  border: none;
  background: var(--accent);
  color: white;
  transition: all 0.2s;

  &:hover {
    background: #a01415;
    transform: translateY(-2px);
  }
`;

export const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1.75rem;
`;

export const TechTag = styled.span`
  font-family: var(--mono);
  font-size: 0.7rem;
  padding: 0.3rem 0.75rem;
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

export const ExpList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

export const ExpItem = styled.div`
  padding-left: 1.4rem;
  border-left: 2px solid var(--line);
  background: transparent;
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
  line-height: 1.6;
`;

/* ── ILLUSTRATION SECTION ── */

export const IllustrationSection = styled.section`
  position: relative;
  overflow: hidden;
  background: #0e0b09;
  padding: 5rem 3rem;

  @media (max-width: 768px) {
    padding: 3.5rem 1.5rem;
  }
`;

/* Background: tiled with non-gallery images */
export const IllustrationBg = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  opacity: 0.1;
  pointer-events: none;
  filter: blur(2px) saturate(0.6);
`;

export const BgImage = styled.div`
  background-image: url(${({ $src }) => $src});
  background-size: cover;
  background-position: center;
`;

export const IllustrationContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const IllustrationText = styled.div``;

export const IlluTag = styled.p`
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #d62828;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.7rem;

  &::before {
    content: "";
    width: 1.5rem;
    height: 1px;
    background: #d62828;
  }
`;

export const IlluH2 = styled.h2`
  font-family: var(--serif);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  line-height: 1.1;
  color: white;
  margin-bottom: 1.25rem;

  em {
    font-style: italic;
    color: #d62828;
  }
`;

export const IlluDesc = styled.p`
  font-size: 1rem;
  color: rgba(245, 240, 234, 0.55);
  font-weight: 300;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

export const IlluBtn = styled.a`
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
  background: transparent;
  color: rgba(245, 240, 234, 0.8);
  border: 1.5px solid rgba(245, 240, 234, 0.25);
  transition: all 0.2s;

  &:hover {
    border-color: #d62828;
    color: #d62828;
    transform: translateY(-2px);
  }
`;

/*
  Gallery: 3 images
  - First image: full width, taller, centered
  - Second and third: side by side below
*/
export const IllustrationGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 0.75rem;
`;

export const GalleryImgWrap = styled.div`
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.3s, border-color 0.3s;
  cursor: pointer;

  /* First child spans both columns and is taller */
  &:first-child {
    grid-column: 1 / -1;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.03);
  }

  /* Second and third are square */
  &:not(:first-child) {
    aspect-ratio: 1 / 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.4s ease;
  }

  /* Second and third use cover */
  &:not(:first-child) img {
    object-fit: cover;
  }

  &:hover {
    border-color: rgba(214, 40, 40, 0.5);
    transform: scale(1.02);

    img {
      transform: scale(1.06);
    }
  }
`;

/* ── FOOTER ── */

export const Footer = styled.footer`
  padding: 1.75rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--line);
  background: var(--bg);
  transition: background 0.3s;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.85rem;
    text-align: center;
    padding: 1.75rem 1.5rem;
  }
`;

export const FooterCopy = styled.span`
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--ink-soft);
`;

export const FooterDot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  animation: ${pulse} 2s infinite;
`;
