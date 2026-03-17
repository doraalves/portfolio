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

/* Desktop links */
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
  padding: 0;
  transition: color 0.2s;
  color: ${({ $dark }) =>
    $dark ? "rgba(245, 240, 234, 0.5)" : "var(--ink-soft)"};

  &:hover {
    color: ${({ $dark }) => ($dark ? "#D62828" : "var(--accent)")};
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

/* Hamburger button */
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
    transition: transform 0.3s, opacity 0.3s, background 0.3s;
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

/* Mobile drawer */
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

    ${({ $dark }) =>
      $dark
        ? css`
            background: rgba(10, 8, 7, 0.97);
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
  border-bottom: 1px solid
    ${({ $dark }) => ($dark ? "rgba(255,255,255,0.07)" : "var(--line)")};
  transition: color 0.2s;
  color: ${({ $dark }) =>
    $dark ? "rgba(245, 240, 234, 0.6)" : "var(--ink-soft)"};
  width: 100%;

  &:hover {
    color: ${({ $dark }) => ($dark ? "white" : "var(--ink)")};
  }
`;

export const MobileSocials = styled.div`
  display: flex;
  gap: 1.25rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
`;

export const MobileIconLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ $dark }) =>
    $dark ? "rgba(245, 240, 234, 0.4)" : "var(--ink-soft)"};
  transition: color 0.2s;

  &:hover {
    color: #d62828;
  }
`;
