import styled, { keyframes } from "styled-components";

/* ── Keyframes compartilhados ── */

export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.8); }
`;

/* ── Componentes compartilhados entre páginas ── */

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

export const PageFooter = styled.footer`
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
