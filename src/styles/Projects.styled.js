import styled, { keyframes } from 'styled-components'

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`

export const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
`

export const Page = styled.div`
  background: var(--ink);
  min-height: 100vh;
  padding-top: 5rem;
  animation: ${fadeUp} 0.4s ease both;
`

export const Section = styled.div`
  padding: 4.5rem 3rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`

export const SectionHeader = styled.div`
  margin-bottom: 3rem;
`

export const SectionTag = styled.p`
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #D62828;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.7rem;

  &::before {
    content: '';
    width: 1.5rem;
    height: 1px;
    background: #D62828;
  }
`

export const H2 = styled.h2`
  font-family: var(--serif);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  line-height: 1.1;
  color: white;

  em {
    font-style: italic;
    color: #D62828;
  }
`

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
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 1.75rem;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 3px;
    height: 0;
    background: #D62828;
    transition: height 0.3s;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.07);
    transform: translateY(-4px);
    border-color: rgba(255, 255, 255, 0.2);

    &::before { height: 100%; }
  }
`

export const CardNum = styled.p`
  font-family: var(--mono);
  font-size: 0.68rem;
  color: rgba(255, 255, 255, 0.25);
  letter-spacing: 0.12em;
  margin-bottom: 1.25rem;
`

export const CardTitle = styled.h3`
  font-family: var(--serif);
  font-size: 1.3rem;
  color: white;
  margin-bottom: 0.65rem;
  line-height: 1.2;
`

export const CardDesc = styled.p`
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.55);
  font-weight: 300;
  line-height: 1.7;
  margin-bottom: 1.25rem;
`

export const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`

export const StackTag = styled.span`
  font-family: var(--mono);
  font-size: 0.65rem;
  padding: 0.22rem 0.55rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  color: rgba(255, 255, 255, 0.45);
`

export const Hint = styled.p`
  font-family: var(--mono);
  font-size: 0.63rem;
  color: rgba(255, 255, 255, 0.2);
  margin-top: 1.1rem;
  transition: color 0.2s;

  ${Card}:hover & {
    color: rgba(214, 40, 40, 0.7);
  }
`

export const Footer = styled.footer`
  padding: 1.75rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  background: var(--ink);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.85rem;
    text-align: center;
    padding: 1.75rem 1.5rem;
  }
`

export const FooterCopy = styled.span`
  font-family: var(--mono);
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.22);
`

export const FooterDot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  animation: ${pulse} 2s infinite;
`
