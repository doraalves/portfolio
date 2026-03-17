import styled, { keyframes, css } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
`;

/* Light mode: fundo claro. Dark mode: fundo bem escuro */
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
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 1.75rem;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 0;
    background: var(--accent);
    transition: height 0.3s;
  }

  &:hover {
    background: var(--surface-soft);
    transform: translateY(-4px);
    border-color: var(--accent);

    &::before {
      height: 100%;
    }
  }
`;

export const CardNum = styled.p`
  font-family: var(--mono);
  font-size: 0.68rem;
  color: var(--ink-soft);
  letter-spacing: 0.12em;
  margin-bottom: 1.25rem;
  opacity: 0.5;
`;

export const CardTitle = styled.h3`
  font-family: var(--serif);
  font-size: 1.3rem;
  color: var(--ink);
  margin-bottom: 0.65rem;
  line-height: 1.2;
`;

export const CardDesc = styled.p`
  font-size: 0.88rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.7;
  margin-bottom: 1.25rem;
`;

export const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`;

export const StackTag = styled.span`
  font-family: var(--mono);
  font-size: 0.65rem;
  padding: 0.22rem 0.55rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  color: var(--ink-soft);
`;

export const Hint = styled.p`
  font-family: var(--mono);
  font-size: 0.63rem;
  color: var(--ink-soft);
  opacity: 0.4;
  margin-top: 1.1rem;
  transition: all 0.2s;

  ${Card}:hover & {
    color: var(--accent);
    opacity: 1;
  }
`;

export const Footer = styled.footer`
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
