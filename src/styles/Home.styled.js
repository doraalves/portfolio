import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
`;

const roleIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const roleOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(-10px); }
`;

const tickerUp = keyframes`
  from { transform: translateY(0); }
  to   { transform: translateY(-50%); }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  transition: background 0.3s;

  background: #f0ebe3;

  [data-theme="dark"] & {
    background: #0e0b09;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;
  text-align: center;
  animation: ${fadeUp} 0.9s ease both;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export const Inner = styled.div`
  max-width: 660px;
`;

export const Tag = styled.p`
  font-family: var(--mono);
  font-size: 0.74rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  min-height: 1.2em;

  &::before,
  &::after {
    content: "";
    width: 2rem;
    height: 1px;
    background: var(--accent);
    flex-shrink: 0;
  }
`;

export const RoleText = styled.span`
  display: inline-block;
  animation: ${({ $exiting }) => ($exiting ? roleOut : roleIn)} 0.35s ease both;
`;

export const Title = styled.h1`
  font-family: var(--serif);
  font-size: clamp(2.8rem, 6vw, 5.5rem);
  line-height: 1;
  margin-bottom: 1.4rem;
  color: var(--ink);

  [data-theme="dark"] & {
    color: #f5f0ea;
  }

  em {
    font-style: italic;
    color: var(--accent);
  }
`;

export const Bio = styled.p`
  font-size: 1rem;
  max-width: 50ch;
  margin: 0 auto 2.5rem;
  font-weight: 300;
  line-height: 1.85;
  color: var(--ink-soft);

  [data-theme="dark"] & {
    color: rgba(245, 240, 234, 0.5);
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BtnPrimary = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.6rem;
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 2px;
  cursor: pointer;
  border: none;
  background: var(--accent);
  color: white;
  transition: background 0.2s, box-shadow 0.2s;
  will-change: transform;

  &:hover {
    background: #a01415;
    box-shadow: 0 6px 20px rgba(200, 25, 26, 0.3);
  }
`;

export const BtnOutline = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.6rem;
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 2px;
  cursor: pointer;
  background: transparent;
  color: var(--ink);
  border: 1.5px solid var(--line);
  transition: border-color 0.2s, color 0.2s;
  will-change: transform;

  &:hover {
    border-color: var(--ink);
  }

  [data-theme="dark"] & {
    color: rgba(245, 240, 234, 0.8);
    border-color: rgba(245, 240, 234, 0.2);

    &:hover {
      border-color: rgba(245, 240, 234, 0.6);
      color: white;
    }
  }
`;

/* ── Vertical ticker lateral ── */

export const VerticalTicker = styled.div`
  position: absolute;
  right: 2rem;
  top: 12%;
  bottom: 12%;
  width: 16px;
  overflow: hidden;
  z-index: 2;
  pointer-events: none;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const VerticalTrack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${tickerUp} 32s linear infinite;
`;

export const VerticalItem = styled.span`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-family: var(--mono);
  font-size: 0.58rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.18;
  padding: 1rem 0;
  white-space: nowrap;

  [data-theme="dark"] & {
    color: rgba(245, 240, 234, 0.12);
    opacity: 1;
  }
`;

export const FooterLine = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 3rem;
  right: 3rem;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    left: 1.5rem;
    right: 1.5rem;
  }
`;

export const Location = styled.span`
  font-family: var(--mono);
  font-size: 0.67rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--ink-soft);
  opacity: 0.5;

  [data-theme="dark"] & {
    color: rgba(245, 240, 234, 0.22);
    opacity: 1;
  }

  &::before {
    content: "";
    width: 1.5rem;
    height: 1px;
    background: currentColor;
  }
`;

export const Avail = styled.span`
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--ink-soft);
  opacity: 0.6;

  [data-theme="dark"] & {
    color: rgba(245, 240, 234, 0.35);
    opacity: 1;
  }

  @media (min-width: 1200px) {
    font-size: 0.95rem;
  }
`;

export const Dot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #5ebb7c;
  animation: ${pulse} 2s infinite;
  opacity: 1 !important;
`;
