import React from 'react'
import { notifyProjectClick } from '../utils/notifyVisit'
import {
  Page, Section, SectionHeader, SectionTag, H2,
  Grid, GridInternal,
  Card, CardThumb,
  CardBody, CardNum, CardTitle, CardDesc,
  StackRow, StackTag,
  CardLinks, LinkBtn, InternalBadge,
  StatusBadge,
  Divider, DividerLabel,
  Footer, FooterCopy, FooterDot,
} from '../styles/Projects.styled'
import { ExternalIcon, GitHubIcon, FigmaIcon, LockIcon } from '../components/Icons'
import projects from '../data/projects'

export default function Projects() {
  const year = new Date().getFullYear()

  const withPreview  = projects.filter(p => p.thumb)
  const withoutPreview = projects.filter(p => !p.thumb)

  return (
    <Page>
      <Section>
        <SectionHeader>
          <SectionTag>projetos</SectionTag>
          <H2>O que <em>construí</em></H2>
        </SectionHeader>

        {/* Projetos com preview */}
        <Grid>
          {withPreview.map((p) => (
            <Card key={p.num}>
              <CardThumb src={p.thumb} alt={p.title} loading="lazy" />
              <CardBody>
                <CardNum>
                  {p.num}
                  {p.status && (
                    <StatusBadge $wip={p.status === 'em desenvolvimento'}>
                      {p.status}
                    </StatusBadge>
                  )}
                </CardNum>
                <CardTitle>{p.title}</CardTitle>
                <CardDesc>{p.desc}</CardDesc>
                <StackRow>
                  {p.stack.map((t) => <StackTag key={t}>{t}</StackTag>)}
                </StackRow>
                <CardLinks>
                  {p.link && (
                    <LinkBtn href={p.link} target="_blank" rel="noreferrer" onClick={() => notifyProjectClick(p.title)}>
                      <ExternalIcon /> Ver projeto
                    </LinkBtn>
                  )}
                  {p.github && (
                    <LinkBtn href={p.github} target="_blank" rel="noreferrer" $ghost>
                      <GitHubIcon /> Código
                    </LinkBtn>
                  )}
                  {p.figma && (
                    <LinkBtn href={p.figma} target="_blank" rel="noreferrer" $ghost>
                      <FigmaIcon /> Figma
                    </LinkBtn>
                  )}
                </CardLinks>
              </CardBody>
            </Card>
          ))}
        </Grid>

        <Divider>
          <DividerLabel>projetos internos</DividerLabel>
        </Divider>

        {/* Projetos internos */}
        <GridInternal>
          {withoutPreview.map((p) => (
            <Card key={p.num} $internal>
              <CardBody>
                <CardNum>
                  {p.num}
                  {p.status && (
                    <StatusBadge $wip={p.status === 'em desenvolvimento'}>
                      {p.status}
                    </StatusBadge>
                  )}
                </CardNum>
                <CardTitle>{p.title}</CardTitle>
                <CardDesc>{p.desc}</CardDesc>
                <StackRow>
                  {p.stack.map((t) => <StackTag key={t}>{t}</StackTag>)}
                </StackRow>
                <CardLinks>
                  {p.figma && (
                    <LinkBtn href={p.figma} target="_blank" rel="noreferrer" $ghost>
                      <FigmaIcon /> Figma
                    </LinkBtn>
                  )}
                  {!p.link && !p.github && !p.figma && (
                    <InternalBadge>
                      <LockIcon /> projeto interno · link não disponível
                    </InternalBadge>
                  )}
                </CardLinks>
              </CardBody>
            </Card>
          ))}
        </GridInternal>

      </Section>

      <Footer>
        <FooterCopy>© {year} Izadora Alves</FooterCopy>
        <FooterDot />
        <FooterCopy>feito com ♥</FooterCopy>
      </Footer>
    </Page>
  )
}
