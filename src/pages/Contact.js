import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { WhatsAppIcon, GitHubIcon, LinkedInIcon, InstagramIcon, SendIcon } from '../components/Icons'
import {
  Page, Inner, SectionTag, H2, SubText,
  DirectLinks, DirectLink,
  FormCard, FormTitle, FormGroup, Label, Input, Textarea, SendBtn, SuccessMsg, ErrorMsg,
  SocialRow, SocialLink,
  FooterNote,
} from '../styles/Contact.styled'

const EMAILJS_SERVICE_ID = "service_lk5zmy8";
const EMAILJS_TEMPLATE_ID = "template_tfx86s1";
const EMAILJS_PUBLIC_KEY = "oeHkI3XYftME2KOZ_";

export default function Contact() {
  const formRef = useRef()
  const [form, setForm]     = useState({ from_name: '', from_email: '', message: '' })
  const [status, setStatus] = useState('idle') 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      setForm({ from_name: '', from_email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const isValid = form.from_name && form.from_email && form.message
  const isSending = status === 'sending'
  const year = new Date().getFullYear()

  return (
    <Page>
      <Inner>
        <SectionTag>contato</SectionTag>
        <H2>Vamos <em>conversar</em>?</H2>
        <SubText>
          Estou aberta a oportunidades, freelas e projetos experimentais.
          Me manda uma mensagem!
        </SubText>

        <DirectLinks>
          <DirectLink href="https://wa.me/5521982419979" target="_blank" rel="noreferrer">
            <WhatsAppIcon /> WhatsApp
          </DirectLink>
        </DirectLinks>

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
              <Label htmlFor="from_email">Seu email</Label>
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
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Conta um pouco sobre o que você precisa..."
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
              <ErrorMsg>✗ Erro ao enviar. Tente pelo WhatsApp ou email direto.</ErrorMsg>
            )}
          </form>
        </FormCard>

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

        <FooterNote>© {year} Izadora Alves — São Gonçalo, RJ</FooterNote>
      </Inner>
    </Page>
  )
}
