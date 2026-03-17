import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import {
  Overlay,
  Box,
  Header,
  Num,
  Title,
  CloseBtn,
  Body,
  Desc,
  StackLabel,
  StackRow,
  StackTag,
  Footer,
  LinkBtn,
  NoLink,
} from "../styles/Modal.styled";
import { CloseIcon, ExternalIcon, GitHubIcon, LockIcon } from "./Icons";

export default function Modal({ project, onClose }) {
  const open = !!project;
  const overlayRef = useRef(null);

  // Fecha com ESC
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // Bloqueia scroll do body e rola overlay pro topo
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      // Aguarda o próximo frame para garantir que o overlay já renderizou
      requestAnimationFrame(() => {
        if (overlayRef.current) overlayRef.current.scrollTop = 0;
      });
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [open]);

  // Clique no fundo fecha o modal
  const handleOverlay = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  const content = (
    <Overlay $open={open} onClick={handleOverlay} ref={overlayRef}>
      <Box $open={open}>
        {project && (
          <>
            <Header>
              <div>
                <Num>{project.num}</Num>
                <Title>{project.title}</Title>
              </div>
              <CloseBtn onClick={onClose}>
                <CloseIcon />
              </CloseBtn>
            </Header>

            <Body>
              <Desc>{project.desc}</Desc>
              <StackLabel>tecnologias</StackLabel>
              <StackRow>
                {project.stack.map((t) => (
                  <StackTag key={t}>{t}</StackTag>
                ))}
              </StackRow>
            </Body>

            <Footer>
              {project.link && (
                <LinkBtn href={project.link} target="_blank" rel="noreferrer">
                  <ExternalIcon /> Ver projeto
                </LinkBtn>
              )}
              {project.github && (
                <LinkBtn
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  $ghost
                >
                  <GitHubIcon /> GitHub
                </LinkBtn>
              )}
              {!project.link && !project.github && (
                <NoLink>
                  <LockIcon /> projeto interno — link não disponível
                </NoLink>
              )}
            </Footer>
          </>
        )}
      </Box>
    </Overlay>
  );

  return ReactDOM.createPortal(content, document.body);
}
