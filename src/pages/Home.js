import React, { useState, useEffect, useRef, useCallback } from 'react'
import ParticleCanvas from '../components/ParticleCanvas'
import {
  Wrapper, Content, Inner, Tag, RoleText, Title, Bio,
  Actions, BtnPrimary, BtnOutline,
  VerticalTicker, VerticalTrack, VerticalItem,
  FooterLine, Location, Avail, Dot,
} from '../styles/Home.styled'

const ROLES = [
  'Desenvolvedora Full Stack',
  'Ilustradora Digital',
  'UI Designer',
]

const TICKER_ITEMS = [
  'React', 'Node.js', 'Python', 'Vue.js', 'D3.js',
  'Django', 'TypeScript', 'SCSS', 'Docker', 'p5.js',
  'WebSockets', 'PostgreSQL', 'Figma', 'Meta Quest',
]

const TICKER_ALL = [...TICKER_ITEMS, ...TICKER_ITEMS]

export default function Home({ onNavigate }) {
  const [roleIdx, setRoleIdx] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setExiting(true)
      setTimeout(() => {
        setRoleIdx((i) => (i + 1) % ROLES.length)
        setExiting(false)
      }, 350)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  const btnPrimaryRef = useRef(null)
  const btnOutlineRef = useRef(null)

  const applyMagnet = useCallback((ref, e) => {
    const el = ref.current
    if (!el) return
    el.style.transform = ''
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < 80) {
      const strength = (1 - dist / 80) * 6
      el.style.transform = `translate(${(dx / dist) * strength}px, ${(dy / dist) * strength}px)`
    } else {
      el.style.transform = ''
    }
  }, [])

  const resetMagnet = useCallback((ref) => {
    if (ref.current) ref.current.style.transform = ''
  }, [])

  useEffect(() => {
    const handler = (e) => {
      applyMagnet(btnPrimaryRef, e)
      applyMagnet(btnOutlineRef, e)
    }
    window.addEventListener('mousemove', handler, { passive: true })
    return () => window.removeEventListener('mousemove', handler)
  }, [applyMagnet])

  return (
    <Wrapper>
      <ParticleCanvas />
      <Content>
        <Inner>
          <Tag>
            <RoleText $exiting={exiting} key={roleIdx}>
              {ROLES[roleIdx]}
            </RoleText>
          </Tag>
          <Title>Izadora<br /><em>Alves</em></Title>
          <Bio>
            Desenvolvedora Full Stack com experiência real em Americanas S.A.
            e pesquisa em realidade virtual. Construo produtos digitais do design
            à infraestrutura: interfaces, APIs e dashboards que escalam.
          </Bio>
          <Actions>
            <BtnPrimary
              ref={btnPrimaryRef}
              onClick={() => onNavigate('projects')}
              onMouseLeave={() => resetMagnet(btnPrimaryRef)}
            >
              Ver projetos →
            </BtnPrimary>
            <BtnOutline
              ref={btnOutlineRef}
              onClick={() => onNavigate('contact')}
              onMouseLeave={() => resetMagnet(btnOutlineRef)}
            >
              Entrar em contato
            </BtnOutline>
          </Actions>
        </Inner>
      </Content>

      <VerticalTicker>
        <VerticalTrack aria-hidden="true">
          {TICKER_ALL.map((item, i) => (
            <VerticalItem key={i}>{item}</VerticalItem>
          ))}
        </VerticalTrack>
      </VerticalTicker>

      <FooterLine>
        <Location>São Gonçalo · RJ</Location>
        <Avail><Dot />disponível para projetos</Avail>
      </FooterLine>
    </Wrapper>
  )
}
