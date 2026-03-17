import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: rgba(10, 8, 7, 0.85);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "all" : "none")};
  transition: opacity 0.3s;
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
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 6px;
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  transform: ${({ $open }) =>
    $open ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)"};
  transition: transform 0.3s, background 0.3s;

  @media (min-width: 769px) {
    max-height: 88vh;
    overflow-y: auto;
  }
`;

export const Header = styled.div`
  padding: 1.75rem 1.75rem 1.1rem;
  border-bottom: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;

export const Num = styled.p`
  font-family: var(--mono);
  font-size: 0.66rem;
  color: var(--accent);
  letter-spacing: 0.15em;
  margin-bottom: 0.45rem;
`;

export const Title = styled.h2`
  font-family: var(--serif);
  font-size: 1.5rem;
  color: var(--ink);
  line-height: 1.15;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const CloseBtn = styled.button`
  background: var(--surface-soft);
  border: 1px solid var(--line);
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--ink-soft);
  flex-shrink: 0;
  transition: all 0.2s;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
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
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

export const StackLabel = styled.p`
  font-family: var(--mono);
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.6;
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
  border: 1px solid var(--accent);
  border-radius: 2px;
  color: var(--accent);
  opacity: 0.7;
`;

export const Footer = styled.div`
  padding: 1.1rem 1.75rem 1.75rem;
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;
  border-top: 1px solid var(--line);

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
    border: 1px solid var(--line);
    color: var(--ink-soft);
    &:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }
  `
      : `
    background: var(--accent);
    color: white;
    &:hover { opacity: 0.85; transform: translateY(-2px); }
  `}
`;

export const NoLink = styled.span`
  font-family: var(--mono);
  font-size: 0.73rem;
  color: var(--ink-soft);
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;
