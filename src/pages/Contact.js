import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { WhatsAppIcon, GitHubIcon, LinkedInIcon, InstagramIcon, SendIcon } from '../components/Icons'
import {
  Page, Inner, PageHeader, SectionTag, H2,
  TwoCol, ContactInfo, InfoText,
  AvailLabel, AvailChips, Chip,
  DirectLink, SocialRow, SocialLink,
  FormCard, FormTitle, FormGroup, Label, Input, Textarea,
  SendBtn, SuccessMsg, ErrorMsg,
  FooterNote,
} from '../styles/Contact.styled'

const EMAILJS_SERVICE_ID  = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const AVAIL = ["Freelance", "Remoto", "Híbrido", "CLT"];

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

  const isValid  = form.from_name && form.from_email && form.message
  const isSending = status === 'sending'
  const year = new Date().getFullYear()

  return (
    <Page>
      <Inner>
        <PageHeader>
          <SectionTag>contato</SectionTag>
          <H2>Vamos <em>trabalhar juntos</em>?</H2>
        </PageHeader>

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
                <InstagramIcon size={15} /> Instagram
              </SocialLink>
            </SocialRow>
          </ContactInfo>

          <FormCard>
            <FormTitle>Enviar mensagem</FormTitle>
            <form ref={formRef} onSubmit={handleSubmit}>
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
              <FormGroup>
                <Label htmlFor="message">Deixe aqui sua mensagem:</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Conte um pouco sobre o projeto ou oportunidade..."
                  value={form.message}
                  onChange={handleChange}
                  disabled={isSending}
                />
              </FormGroup>
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
          </FormCard>
        </TwoCol>

        <FooterNote>© {year} Izadora Alves · São Gonçalo, RJ</FooterNote>
      </Inner>
    </Page>
  )
}
