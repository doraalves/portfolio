import React, { useEffect } from 'react'
import {
  Overlay, Box, Header, Num, Title, CloseBtn,
  Body, Desc, StackLabel, StackRow, StackTag,
  Footer, LinkBtn, NoLink,
} from '../styles/Modal.styled'
import { CloseIcon, ExternalIcon, GitHubIcon, LockIcon } from './Icons'

export default function Modal({ project, onClose }) {
  const open = !!project

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleOverlay = (e) => { if (e.target === e.currentTarget) onClose() }

  return (
    <Overlay $open={open} onClick={handleOverlay}>
      <Box $open={open}>
        {project && (
          <>
            <Header>
              <div>
                <Num>{project.num}</Num>
                <Title>{project.title}</Title>
              </div>
              <CloseBtn onClick={onClose}><CloseIcon /></CloseBtn>
            </Header>

            <Body>
              <Desc>{project.desc}</Desc>
              <StackLabel>tecnologias</StackLabel>
              <StackRow>
                {project.stack.map((t) => <StackTag key={t}>{t}</StackTag>)}
              </StackRow>
            </Body>

            <Footer>
              {project.link && (
                <LinkBtn href={project.link} target="_blank" rel="noreferrer">
                  <ExternalIcon /> Ver projeto
                </LinkBtn>
              )}
              {project.github && (
                <LinkBtn href={project.github} target="_blank" rel="noreferrer" $ghost>
                  <GitHubIcon /> GitHub
                </LinkBtn>
              )}
              {!project.link && !project.github && (
                <NoLink><LockIcon /> projeto interno — link não disponível</NoLink>
              )}
            </Footer>
          </>
        )}
      </Box>
    </Overlay>
  )
}
