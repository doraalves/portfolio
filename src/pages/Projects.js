import React, { useState } from 'react'
import {
  Page, Section, SectionHeader, SectionTag, H2,
  Grid, Card, CardNum, CardTitle, CardDesc,
  StackRow, StackTag, Hint,
  Footer, FooterCopy, FooterDot,
} from '../styles/Projects.styled'
import Modal from '../components/Modal'
import projects from '../data/projects'

export default function Projects() {
  const year = new Date().getFullYear()
  const [selected, setSelected] = useState(null)

  return (
    <Page>
      <Section>
        <SectionHeader>
          <SectionTag>projetos</SectionTag>
          <H2>
            O que <em>construí</em>
          </H2>
        </SectionHeader>
        <Grid>
          {projects.map((p) => (
            <Card key={p.num} onClick={() => setSelected(p)}>
              <CardNum>{p.num}</CardNum>
              <CardTitle>{p.title}</CardTitle>
              <CardDesc>{p.shortDesc}</CardDesc>
              <StackRow>
                {p.stack.slice(0, 4).map((t) => (
                  <StackTag key={t}>{t}</StackTag>
                ))}
              </StackRow>
              <Hint>↗ ver detalhes</Hint>
            </Card>
          ))}
        </Grid>
      </Section>
      <Footer>
        <FooterCopy>© {year} Izadora Alves</FooterCopy>
        <FooterDot />
        <FooterCopy>feito com ♥</FooterCopy>
      </Footer>
      <Modal project={selected} onClose={() => setSelected(null)} />
    </Page>
  );
}
