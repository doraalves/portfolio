import styled, { css } from "styled-components";
import { fadeUp, pulse, SectionTag, H2, PageFooter, FooterCopy, FooterDot } from "./shared";

export { SectionTag, H2, PageFooter as Footer, FooterCopy, FooterDot, pulse };

export const Page = styled.div`
  background: var(--bg);
  min-height: 100vh;
  padding-top: 5rem;
  animation: ${fadeUp} 0.4s ease both;
  transition: background 0.3s;
`;

export const Section = styled.div`
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

/* Grid com thumbnail — 2 colunas, cards maiores */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  align-items: start;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

/* Grid interno — 3 colunas, cards compactos */
export const GridInternal = styled.div`
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
`;

/* Divisor entre seções */
export const Divider = styled.div`
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
`;

export const DividerLabel = styled.span`
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.45;
  white-space: nowrap;
`;

/* Card base */
export const Card = styled.div`
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;

  /* barra lateral nos internos */
  ${({ $internal }) => $internal && css`
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
  `}

  &:hover {
    transform: translateY(-3px);
    border-color: var(--accent);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
`;

export const CardThumb = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
  border-bottom: 1px solid var(--line);
`;

export const CardBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

export const CardNum = styled.p`
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--accent);
  letter-spacing: 0.14em;
  opacity: 0.6;
`;

export const CardTitle = styled.h3`
  font-family: var(--serif);
  font-size: 1.2rem;
  color: var(--ink);
  line-height: 1.2;
  margin-top: -0.2rem;
`;

export const CardDesc = styled.p`
  font-size: 0.86rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.72;
`;

export const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`;

export const StackTag = styled.span`
  font-family: var(--mono);
  font-size: 0.62rem;
  padding: 0.18rem 0.5rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  color: var(--ink-soft);
  background: var(--bg);
`;

export const CardLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--line);
`;

export const LinkBtn = styled.a`
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

  ${({ $ghost }) => $ghost ? css`
    background: transparent;
    color: var(--ink-soft);
    border: 1.5px solid var(--line);
    &:hover { border-color: var(--accent); color: var(--accent); }
  ` : css`
    background: var(--accent);
    color: white;
    border: 1.5px solid var(--accent);
    &:hover { background: #a01415; border-color: #a01415; }
  `}
`;

export const InternalBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--mono);
  font-size: 0.62rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.45;
`;

export const Hint = styled.p``;
