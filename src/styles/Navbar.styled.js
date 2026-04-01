import styled, { css, keyframes } from "styled-components";

const fadeDown = keyframes`
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1rem 3rem;
  transition: background 0.4s, border-color 0.4s;

  ${({ $dark }) =>
    $dark
      ? css`
          background: rgba(14, 11, 9, 0.6);
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(14px);
        `
      : css`
          background: rgba(245, 242, 237, 0.93);
          border-bottom: 1px solid var(--line);
          backdrop-filter: blur(14px);
          [data-theme="dark"] & {
            background: rgba(15, 13, 12, 0.93);
            border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          }
        `}

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

export const Logo = styled.button`
  font-family: var(--mono);
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  z-index: 101;
  color: ${({ $dark }) => ($dark ? "rgba(245, 240, 234, 0.85)" : "var(--ink)")};
  transition: color 0.2s;
`;

export const Links = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.button`
  font-family: var(--mono);
  font-size: 0.76rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 0 2px;
  transition: color 0.2s;
  position: relative;

  color: ${({ $dark, $active }) => {
    if ($active) return "var(--accent)";
    if ($dark)   return "rgba(245, 240, 234, 0.5)";
    return "var(--ink-soft)";
  }};

  /* Linha indicadora embaixo */
  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 1.5px;
    background: var(--accent);
    transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
    transform-origin: left;
    transition: transform 0.25s ease;
  }

  &:hover {
    color: var(--accent);
    &::after { transform: scaleX(1); }
  }
`;

export const Sep = styled.li`
  width: 1px;
  height: 1rem;
  background: ${({ $dark }) =>
    $dark ? "rgba(255,255,255,0.15)" : "var(--line)"};
`;

export const IconLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ $dark }) =>
    $dark ? "rgba(245, 240, 234, 0.45)" : "var(--ink-soft)"};
  transition: color 0.2s;

  &:hover {
    color: #d62828;
  }
`;

/* ── THEME TOGGLE ── */
export const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid
    ${({ $dark }) => ($dark ? "rgba(255,255,255,0.12)" : "var(--line)")};
  background: ${({ $dark }) =>
    $dark ? "rgba(255,255,255,0.06)" : "var(--surface-soft)"};
  color: ${({ $dark }) =>
    $dark ? "rgba(245,240,234,0.6)" : "var(--ink-soft)"};
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1rem;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: rotate(20deg);
  }
`;

/* ── HAMBURGER ── */
export const HamburgerBtn = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 101;
  padding: 0;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 2px;
    background: ${({ $dark }) =>
      $dark ? "rgba(245,240,234,0.85)" : "var(--ink)"};
    transition: transform 0.3s, opacity 0.3s;
    transform-origin: center;
  }

  &.open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  &.open span:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
  }
  &.open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }
`;

/* ── MOBILE MENU ── */
export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $open }) => ($open ? "flex" : "none")};
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    padding: 6rem 2rem 3rem;
    gap: 0.5rem;
    animation: ${fadeDown} 0.25s ease both;

    ${({ $themeDark }) =>
      $themeDark
        ? css`
            background: rgba(10, 8, 7, 0.98);
            backdrop-filter: blur(20px);
          `
        : css`
            background: rgba(245, 242, 237, 0.98);
            backdrop-filter: blur(20px);
          `}
  }
`;

export const MobileNavBtn = styled.button`
  font-family: var(--mono);
  font-size: 1.1rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: none;
  border: none;
  cursor: pointer;
  padding: 1rem 0;
  text-align: left;
  border-bottom: 1px solid var(--line);
  transition: color 0.2s;
  color: ${({ $active }) => ($active ? "var(--accent)" : "var(--ink-soft)")};
  width: 100%;

  &:hover {
    color: var(--accent);
  }
`;

export const MobileBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 1.5rem;
`;

export const MobileSocials = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const MobileIconLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--ink-soft);
  transition: color 0.2s;

  &:hover {
    color: #d62828;
  }
`;

export const MobileThemeToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-soft);
  background: none;
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;
