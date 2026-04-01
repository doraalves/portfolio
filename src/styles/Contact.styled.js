import styled from "styled-components";
import { fadeUp } from "./shared";

export const Page = styled.div`
  background: var(--bg);
  min-height: 100vh;
  padding-top: 5rem;
  animation: ${fadeUp} 0.4s ease both;
  transition: background 0.3s;
`;

export const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 4.5rem 3rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const PageHeader = styled.div`
  margin-bottom: 3rem;
`;

export const SectionTag = styled.p`
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.7rem;

  &::before {
    content: "";
    width: 1.5rem;
    height: 1px;
    background: var(--accent);
  }
`;

export const H2 = styled.h2`
  font-family: var(--serif);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  line-height: 1.1;
  color: var(--ink);

  em {
    font-style: italic;
    color: var(--accent);
  }
`;

/* ── Layout duas colunas ── */

export const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const ContactInfo = styled.div``;

export const InfoText = styled.p`
  font-size: 1rem;
  color: var(--ink-soft);
  font-weight: 300;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

export const AvailLabel = styled.p`
  font-family: var(--mono);
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.55;
  margin-bottom: 0.75rem;
`;

export const AvailChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

export const Chip = styled.span`
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.06em;
  padding: 0.35rem 0.85rem;
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
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  color: var(--ink-soft);
  text-decoration: none;
  padding: 0.7rem 1.25rem;
  border: 1px solid var(--line);
  border-radius: 2px;
  transition: all 0.2s;
  margin-bottom: 2.5rem;

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
    transform: translateY(-2px);
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  color: var(--ink-soft);
  text-decoration: none;
  padding: 0.6rem 1rem;
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

export const FormCard = styled.div`
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 2rem;
  transition: background 0.3s, border-color 0.3s;
`;

export const FormTitle = styled.p`
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-soft);
  opacity: 0.6;
  margin-bottom: 1.5rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-soft);
  margin-bottom: 0.4rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.7rem 0.9rem;
  font-family: var(--sans);
  font-size: 0.9rem;
  color: var(--ink);
  background: var(--surface-soft);
  border: 1px solid var(--line);
  border-radius: 2px;
  outline: none;
  transition: border-color 0.2s, background 0.3s;

  &:focus { border-color: var(--accent); }
  &::placeholder { color: rgba(107, 100, 96, 0.5); }
  &:disabled { opacity: 0.6; }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.7rem 0.9rem;
  font-family: var(--sans);
  font-size: 0.9rem;
  color: var(--ink);
  background: var(--surface-soft);
  border: 1px solid var(--line);
  border-radius: 2px;
  outline: none;
  transition: border-color 0.2s, background 0.3s;
  resize: vertical;
  min-height: 120px;
  line-height: 1.6;

  &:focus { border-color: var(--accent); }
  &::placeholder { color: rgba(107, 100, 96, 0.5); }
  &:disabled { opacity: 0.6; }
`;

export const SendBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.75rem;
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
  width: 100%;
  justify-content: center;
  margin-top: 0.5rem;

  &:hover:not(:disabled) {
    background: #a01415;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;

export const SuccessMsg = styled.p`
  font-family: var(--mono);
  font-size: 0.78rem;
  color: #3a7d44;
  text-align: center;
  margin-top: 0.85rem;
  letter-spacing: 0.04em;
`;

export const ErrorMsg = styled.p`
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--accent);
  text-align: center;
  margin-top: 0.85rem;
  letter-spacing: 0.04em;
`;

export const FooterNote = styled.div`
  border-top: 1px solid var(--line);
  margin-top: 3rem;
  padding-top: 1.75rem;
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--ink-soft);
  letter-spacing: 0.08em;
`;
