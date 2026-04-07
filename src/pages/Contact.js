import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { WhatsAppIcon, GitHubIcon, LinkedInIcon, InstagramIcon, SendIcon } from '../components/Icons'
import {
  Page,
  Hero, HeroInner, HeroTag, BigTitle,
  Section, TwoCol,
  ContactInfo, InfoText,
  AvailLabel, AvailChips, Chip,
  DirectLink, SocialRow, SocialLink,
  FormRow, FormGroup, Label, Input,
  TextareaWrap, Textarea, CharCount,
  SendBtn, SuccessMsg, ErrorMsg,
  FooterNote,
} from '../styles/Contact.styled'

const EMAILJS_SERVICE_ID  = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const MAX_MSG = 500
const AVAIL = ["Freelance", "Remoto", "Híbrido", "CLT"]

export default function Contact() {
  const formRef = useRef()
  const [form, setForm]     = useState({ from_name: '', from_email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSending) return
    setStatus('sending')

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      setForm({ from_name: '', from_email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      console.error('Falha ao enviar formulário')
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const isValid   = form.from_name && form.from_email && form.message
  const isSending = status === 'sending'
  const year      = new Date().getFullYear()
  const msgLen    = form.message.length

  return (
    <Page>
      <Hero>
        <HeroInner>
          <HeroTag>contato</HeroTag>
          <BigTitle>Vamos <em>trabalhar</em> juntos?</BigTitle>
        </HeroInner>
      </Hero>

      <Section>
        <TwoCol>
          <ContactInfo>
            <InfoText>
              Estou aberta a novos projetos, freelas e oportunidades full-time.
              Se você tem um produto para construir ou uma equipe que precisa de
              reforço técnico, me manda uma mensagem.
            </InfoText>

            <AvailLabel>disponível para</AvailLabel>
            <AvailChips>
              {AVAIL.map((a) => <Chip key={a}>{a}</Chip>)}
            </AvailChips>

            <DirectLink href="https://wa.me/5521982419979" target="_blank" rel="noreferrer">
              <WhatsAppIcon /> Chamar no WhatsApp
            </DirectLink>

            <SocialRow>
              <SocialLink href="https://github.com/doraalves" target="_blank" rel="noreferrer">
                <GitHubIcon /> GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/izadoraalves/" target="_blank" rel="noreferrer">
                <LinkedInIcon /> LinkedIn
              </SocialLink>
              <SocialLink href="https://www.instagram.com/izadoraaalves" target="_blank" rel="noreferrer">
                <InstagramIcon size={14} /> Instagram
              </SocialLink>
            </SocialRow>
          </ContactInfo>

          <form ref={formRef} onSubmit={handleSubmit}>
            <FormRow>
              <FormGroup>
                <Label htmlFor="from_name">Nome</Label>
                <Input
                  id="from_name"
                  name="from_name"
                  type="text"
                  placeholder="Seu nome"
                  value={form.from_name}
                  onChange={handleChange}
                  disabled={isSending}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="from_email">E-mail</Label>
                <Input
                  id="from_email"
                  name="from_email"
                  type="email"
                  placeholder="seu@email.com"
                  value={form.from_email}
                  onChange={handleChange}
                  disabled={isSending}
                />
              </FormGroup>
            </FormRow>

            <TextareaWrap>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Conte sobre o projeto ou oportunidade..."
                value={form.message}
                onChange={handleChange}
                disabled={isSending}
                maxLength={MAX_MSG}
              />
              <CharCount $near={msgLen > MAX_MSG * 0.8}>
                {msgLen}/{MAX_MSG}
              </CharCount>
            </TextareaWrap>

            <SendBtn type="submit" disabled={!isValid || isSending}>
              <SendIcon />
              {isSending ? 'Enviando...' : 'Enviar mensagem'}
            </SendBtn>

            {status === 'success' && (
              <SuccessMsg>✓ Mensagem enviada! Responderei em breve.</SuccessMsg>
            )}
            {status === 'error' && (
              <ErrorMsg>✗ Erro ao enviar. Tente pelo WhatsApp.</ErrorMsg>
            )}
          </form>
        </TwoCol>
      </Section>

      <FooterNote>© {year} Izadora Alves · São Gonçalo, RJ</FooterNote>
    </Page>
  )
}
