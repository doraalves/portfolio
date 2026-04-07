import styled, { css } from "styled-components";
import { fadeUp } from "./shared";

export const Page = styled.div`
  background: var(--bg);
  min-height: 100vh;
  animation: ${fadeUp} 0.4s ease both;
  transition: background 0.3s;
`;

/* ── Compact dark header ── */

export const Hero = styled.section`
  background: #0f0d0c;
  padding: 8rem 3rem 4rem;

  @media (max-width: 768px) {
    padding: 8rem 1.5rem 3rem;
  }
`;

export const HeroInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const HeroTag = styled.p`
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.25rem;

  &::before {
    content: "";
    width: 1.5rem;
    height: 1px;
    background: var(--accent);
  }
`;

export const BigTitle = styled.h1`
  font-family: var(--serif);
  font-size: clamp(2.4rem, 5vw, 4rem);
  line-height: 1.05;
  color: #f5f0ea;
  max-width: 14ch;

  em {
    font-style: italic;
    color: var(--accent);
  }
`;

/* ── Two-column section ── */

export const Section = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 4.5rem 3rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 5rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const ContactInfo = styled.div``;

export const InfoText = styled.p`
  font-size: 0.95rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.85;
  margin-bottom: 2rem;
`;

export const AvailLabel = styled.p`
  font-family: var(--mono);
  font-size: 0.64rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.55;
  margin-bottom: 0.75rem;
`;

export const AvailChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 2rem;
`;

export const Chip = styled.span`
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.06em;
  padding: 0.3rem 0.8rem;
  border: 1px solid var(--line);
  border-radius: 20px;
  color: var(--ink-soft);
  background: var(--surface);
`;

export const DirectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--mono);
  font-size: 0.73rem;
  letter-spacing: 0.08em;
  color: var(--ink-soft);
  text-decoration: none;
  padding: 0.7rem 1.2rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  transition: all 0.2s;
  margin-bottom: 2rem;

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
    transform: translateY(-2px);
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
`;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  color: var(--ink-soft);
  text-decoration: none;
  padding: 0.55rem 0.95rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  transition: all 0.2s;

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
    transform: translateY(-2px);
  }
`;

/* ── Form ── */

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-family: var(--mono);
  font-size: 0.64rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.65;
  margin-bottom: 0.45rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 0.1rem;
  font-family: var(--sans);
  font-size: 0.9rem;
  color: var(--ink);
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--line);
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;

  &:focus { border-color: var(--accent); }
  &::placeholder { color: var(--ink-soft); opacity: 0.35; }
  &:disabled { opacity: 0.5; }
`;

export const TextareaWrap = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 0.1rem;
  font-family: var(--sans);
  font-size: 0.9rem;
  color: var(--ink);
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--line);
  outline: none;
  transition: border-color 0.2s;
  resize: none;
  min-height: 140px;
  line-height: 1.7;
  box-sizing: border-box;

  &:focus { border-color: var(--accent); }
  &::placeholder { color: var(--ink-soft); opacity: 0.35; }
  &:disabled { opacity: 0.5; }
`;

export const CharCount = styled.span`
  position: absolute;
  bottom: 0.5rem;
  right: 0.25rem;
  font-family: var(--mono);
  font-size: 0.58rem;
  color: var(--ink-soft);
  opacity: 0.4;
  pointer-events: none;

  ${({ $near }) => $near && css`
    color: var(--accent);
    opacity: 0.7;
  `}
`;

export const SendBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 2rem;
  font-family: var(--mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 2px;
  cursor: pointer;
  border: none;
  background: var(--accent);
  color: white;
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
  margin-top: 0.5rem;

  &:hover:not(:disabled) {
    background: #a01415;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(200, 25, 26, 0.3);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

export const SuccessMsg = styled.p`
  font-family: var(--mono);
  font-size: 0.78rem;
  color: #3a7d44;
  margin-top: 1rem;
  letter-spacing: 0.04em;
`;

export const ErrorMsg = styled.p`
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--accent);
  margin-top: 1rem;
  letter-spacing: 0.04em;
`;

export const FooterNote = styled.div`
  border-top: 1px solid var(--line);
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.5rem 3rem;
  font-family: var(--mono);
  font-size: 0.68rem;
  color: var(--ink-soft);
  letter-spacing: 0.08em;
  opacity: 0.5;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;
