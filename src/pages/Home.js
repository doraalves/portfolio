import React from 'react'
import ParticleCanvas from '../components/ParticleCanvas'
import {
  Wrapper, Content, Inner, Tag, Title, Bio,
  Actions, BtnPrimary, BtnOutline,
  FooterLine, Location, Avail, Dot,
} from '../styles/Home.styled'

export default function Home({ onNavigate }) {
  return (
    <Wrapper>
      <ParticleCanvas />
      <Content>
        <Inner>
          <Tag>Desenvolvedora Full Stack</Tag>
          <Title>Izadora<br /><em>Alves</em></Title>
          <Bio>
            Construo experiências digitais com código limpo e design pensado.
            Da interface ao back-end, transformo ideias em produtos que funcionam de verdade.
          </Bio>
          <Actions>
            <BtnPrimary onClick={() => onNavigate('projects')}>Ver projetos →</BtnPrimary>
            <BtnOutline onClick={() => onNavigate('contact')}>Entrar em contato</BtnOutline>
          </Actions>
        </Inner>
      </Content>
      <FooterLine>
        <Location>São Gonçalo · RJ</Location>
        <Avail><Dot />disponível para projetos</Avail>
      </FooterLine>
    </Wrapper>
  )
}
