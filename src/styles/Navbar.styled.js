import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1rem 3rem;
  transition: background 0.4s, border-color 0.4s;

  ${({ $dark }) => $dark ? css`
    background: rgba(14, 11, 9, 0.6);
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    backdrop-filter: blur(14px);
  ` : css`
    background: rgba(245, 242, 237, 0.93);
    border-bottom: 1px solid var(--line);
    backdrop-filter: blur(14px);
  `}

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`

export const Logo = styled.button`
  font-family: var(--mono);
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  color: ${({ $dark }) => $dark ? 'rgba(245, 240, 234, 0.85)' : 'var(--ink)'};
  transition: color 0.2s;
`

export const Links = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1.25rem;
  }
`

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
  color: ${({ $dark }) => $dark ? 'rgba(245, 240, 234, 0.5)' : 'var(--ink-soft)'};

  &:hover {
    color: ${({ $dark }) => $dark ? '#D62828' : 'var(--accent)'};
  }
`

export const Sep = styled.li`
  width: 1px;
  height: 1rem;
  background: ${({ $dark }) => $dark ? 'rgba(255,255,255,0.15)' : 'var(--line)'};
`

export const IconLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ $dark }) => $dark ? 'rgba(245, 240, 234, 0.45)' : 'var(--ink-soft)'};
  transition: color 0.2s;

  &:hover { color: #D62828; }
`
