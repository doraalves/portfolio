import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: rgba(10, 8, 7, 0.92);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "all" : "none")};
  transition: opacity 0.3s;

  /* Mobile: scroll vertical, modal no topo com padding */
  display: block;
  padding: 5rem 1rem 3rem;

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
  }
`;

export const Box = styled.div`
  background: #1e1a17;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  transform: ${({ $open }) =>
    $open ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)"};
  transition: transform 0.3s;

  @media (min-width: 769px) {
    max-height: 88vh;
    overflow-y: auto;
  }
`;

export const Header = styled.div`
  padding: 1.75rem 1.75rem 1.1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;

export const Num = styled.p`
  font-family: var(--mono);
  font-size: 0.66rem;
  color: #d62828;
  letter-spacing: 0.15em;
  margin-bottom: 0.45rem;
`;

export const Title = styled.h2`
  font-family: var(--serif);
  font-size: 1.5rem;
  color: white;
  line-height: 1.15;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const CloseBtn = styled.button`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  min-width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
  flex-shrink: 0;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    color: white;
  }
`;

export const Body = styled.div`
  padding: 1.5rem 1.75rem;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

export const Desc = styled.p`
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 300;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

export const StackLabel = styled.p`
  font-family: var(--mono);
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.3);
  margin-bottom: 0.65rem;
`;

export const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const StackTag = styled.span`
  font-family: var(--mono);
  font-size: 0.7rem;
  padding: 0.28rem 0.7rem;
  border: 1px solid rgba(200, 25, 26, 0.35);
  border-radius: 2px;
  color: #d62828;
`;

export const Footer = styled.div`
  padding: 1.1rem 1.75rem 1.75rem;
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 1rem 1.25rem 1.5rem;
  }
`;

export const LinkBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.7rem 1.4rem;
  font-family: var(--mono);
  font-size: 0.75rem;
  text-decoration: none;
  border-radius: 2px;
  transition: all 0.2s;
  cursor: pointer;

  ${({ $ghost }) =>
    $ghost
      ? `
    border: 1px solid rgba(255,255,255,0.15);
    color: rgba(255,255,255,0.6);
    &:hover { border-color: rgba(255,255,255,0.35); color: white; transform: translateY(-2px); }
  `
      : `
    background: var(--accent);
    color: white;
    &:hover { background: #A01415; transform: translateY(-2px); }
  `}
`;

export const NoLink = styled.span`
  font-family: var(--mono);
  font-size: 0.73rem;
  color: rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;
