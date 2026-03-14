import styled, { keyframes } from 'styled-components'

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
`

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  background: #0E0B09;
  overflow: hidden;
`

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
`

export const Inner = styled.div`
  max-width: 660px;
`

export const Tag = styled.p`
  font-family: var(--mono);
  font-size: 0.74rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #D62828;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  &::before,
  &::after {
    content: '';
    width: 2rem;
    height: 1px;
    background: #D62828;
  }
`

export const Title = styled.h1`
  font-family: var(--serif);
  font-size: clamp(2.8rem, 6vw, 5.5rem);
  line-height: 1;
  margin-bottom: 1.4rem;
  color: #F5F0EA;

  em {
    font-style: italic;
    color: #D62828;
  }
`

export const Bio = styled.p`
  font-size: 1rem;
  color: rgba(245, 240, 234, 0.5);
  max-width: 50ch;
  margin: 0 auto 2.5rem;
  font-weight: 300;
  line-height: 1.85;
`

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`

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
  transition: all 0.2s;

  &:hover {
    background: #A01415;
    transform: translateY(-2px);
  }
`

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
  color: rgba(245, 240, 234, 0.8);
  border: 1.5px solid rgba(245, 240, 234, 0.2);
  transition: all 0.2s;

  &:hover {
    border-color: rgba(245, 240, 234, 0.6);
    color: white;
    transform: translateY(-2px);
  }
`

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
`

export const Location = styled.span`
  font-family: var(--mono);
  font-size: 0.67rem;
  letter-spacing: 0.14em;
  color: rgba(245, 240, 234, 0.22);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  &::before {
    content: '';
    width: 1.5rem;
    height: 1px;
    background: rgba(245, 240, 234, 0.15);
  }
`

export const Avail = styled.span`
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  color: rgba(245, 240, 234, 0.35);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 1200px) {
    font-size: 0.95rem;
  }
`

export const Dot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #5EBB7C;
  animation: ${pulse} 2s infinite;
`
