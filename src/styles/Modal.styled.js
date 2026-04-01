import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0%   { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: rgba(10, 8, 7, 0.88);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "all" : "none")};
  transition: opacity 0.3s;

  @media (max-width: 768px) {
    align-items: flex-end;
    padding: 0;
  }
`;

export const Box = styled.div`
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  width: 100%;
  max-width: ${({ $wide }) => ($wide ? "940px" : "580px")};
  transform: ${({ $open }) =>
    $open ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)"};
  transition: transform 0.3s, background 0.3s, max-width 0.3s;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 100%;
    border-radius: 12px 12px 0 0;
    max-height: 92vh;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

export const Header = styled.div`
  padding: 1.5rem 1.75rem 1.1rem;
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
  margin-bottom: 0.35rem;
`;

export const Title = styled.h2`
  font-family: var(--serif);
  font-size: 1.45rem;
  color: var(--ink);
  line-height: 1.15;

  @media (max-width: 768px) {
    font-size: 1.2rem;
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

/* ── Layout principal do modal ── */

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: ${({ $hasPreview }) => ($hasPreview ? "1fr 1.1fr" : "1fr")};
  gap: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoPanel = styled.div`
  padding: 1.5rem 1.75rem;
  border-right: ${({ $hasPreview }) => ($hasPreview ? "1px solid var(--line)" : "none")};

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid var(--line);
    padding: 1.25rem;
  }
`;

export const Desc = styled.p`
  font-size: 0.9rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

export const StackLabel = styled.p`
  font-family: var(--mono);
  font-size: 0.64rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.55;
  margin-bottom: 0.6rem;
`;

export const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const StackTag = styled.span`
  font-family: var(--mono);
  font-size: 0.68rem;
  padding: 0.26rem 0.65rem;
  border: 1px solid var(--accent);
  border-radius: 2px;
  color: var(--accent);
  opacity: 0.7;
`;

/* ── Preview: monitor mockup ── */

export const PreviewPanel = styled.div`
  padding: 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--surface-soft);

  @media (max-width: 768px) {
    padding: 1.25rem;
    order: -1;
  }
`;

export const MonitorWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const MonitorScreen = styled.div`
  width: 100%;
  background: #0e0b09;
  border: 2px solid var(--line);
  border-radius: 8px 8px 4px 4px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
`;

export const MonitorBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: #1a1714;
  border-bottom: 1px solid #2a2522;
`;

export const MonitorDots = styled.div`
  display: flex;
  gap: 0.3rem;
  flex-shrink: 0;

  span {
    display: block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
  }

  span:nth-child(1) { background: #ff5f57; }
  span:nth-child(2) { background: #febc2e; }
  span:nth-child(3) { background: #28c840; }
`;

export const MonitorAddress = styled.span`
  font-family: var(--mono);
  font-size: 0.6rem;
  color: rgba(245, 240, 234, 0.3);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`;

export const MonitorDisplay = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  /* height é definido por inline style no componente (calculado pela escala) */
`;

export const MonitorNeck = styled.div`
  width: 32px;
  height: 20px;
  background: var(--line);
  clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
`;

export const MonitorBase = styled.div`
  width: 80px;
  height: 6px;
  background: var(--line);
  border-radius: 3px;
`;

export const PreviewSkeleton = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    #1a1714 25%,
    #2a2522 50%,
    #1a1714 75%
  );
  background-size: 800px 100%;
  animation: ${shimmer} 1.4s infinite linear;
`;

export const IframeFallback = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 0.75rem;
  background: #1a1714;
`;

export const FallbackLink = styled.a`
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--accent);
  text-decoration: none;
  border: 1px solid var(--accent);
  padding: 0.5rem 1rem;
  border-radius: 2px;
  transition: background 0.2s;

  &:hover {
    background: var(--accent);
    color: white;
  }
`;

export const FallbackText = styled.p`
  font-family: var(--mono);
  font-size: 0.65rem;
  color: rgba(245, 240, 234, 0.3);
`;

/* ── Footer ── */

export const Footer = styled.div`
  padding: 1rem 1.75rem 1.5rem;
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
  padding: 0.65rem 1.3rem;
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
