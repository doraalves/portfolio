import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import {
  Overlay, Box, Header, Num, Title, CloseBtn,
  MainContent, InfoPanel, Desc, StackLabel, StackRow, StackTag,
  PreviewPanel, MonitorWrap, MonitorScreen, MonitorBar, MonitorDots,
  MonitorAddress, MonitorDisplay,
  MonitorNeck, MonitorBase,
  PreviewSkeleton, IframeFallback, FallbackLink, FallbackText,
  Footer, LinkBtn, NoLink,
} from "../styles/Modal.styled";
import { CloseIcon, ExternalIcon, FigmaIcon, GitHubIcon, LockIcon } from "./Icons";

// Largura de referência que o iframe vai "fingir" ter
const IFRAME_W = 1280;
const IFRAME_H = 800;

export default function Modal({ project, onClose }) {
  const open        = !!project;
  const hasPreview  = !!project?.link;
  const overlayRef  = useRef(null);
  const displayRef  = useRef(null);

  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError,  setIframeError]  = useState(false);
  const [scale,        setScale]        = useState(0.3);

  // Resetar ao trocar de projeto
  useEffect(() => {
    setIframeLoaded(false);
    setIframeError(false);
  }, [project?.num]);

  // Calcular escala real com base na largura do container
  useLayoutEffect(() => {
    if (!displayRef.current || !hasPreview) return;
    const calc = () => {
      const w = displayRef.current?.offsetWidth;
      if (w) setScale(w / IFRAME_W);
    };
    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(displayRef.current);
    return () => ro.disconnect();
  }, [hasPreview, open]);

  // ESC para fechar
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // Bloqueia scroll do body
  useEffect(() => {
    const lock = open;
    if (lock) {
      document.body.style.overflow  = "hidden";
      document.body.style.position  = "fixed";
      document.body.style.width     = "100%";
    } else {
      document.body.style.overflow  = "";
      document.body.style.position  = "";
      document.body.style.width     = "";
    }
    return () => {
      document.body.style.overflow  = "";
      document.body.style.position  = "";
      document.body.style.width     = "";
    };
  }, [open]);

  const handleOverlay = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  const displayH = Math.round(IFRAME_H * scale);

  const content = (
    <Overlay $open={open} onClick={handleOverlay} ref={overlayRef}>
      <Box $open={open} $wide={hasPreview}>
        {project && (
          <>
            <Header>
              <div>
                <Num>{project.num}</Num>
                <Title>{project.title}</Title>
              </div>
              <CloseBtn onClick={onClose} aria-label="Fechar">
                <CloseIcon />
              </CloseBtn>
            </Header>

            <MainContent $hasPreview={hasPreview}>
              <InfoPanel $hasPreview={hasPreview}>
                <Desc>{project.desc}</Desc>
                <StackLabel>tecnologias</StackLabel>
                <StackRow>
                  {project.stack.map((t) => (
                    <StackTag key={t}>{t}</StackTag>
                  ))}
                </StackRow>
              </InfoPanel>

              {hasPreview && (
                <PreviewPanel>
                  <MonitorWrap>
                    <MonitorScreen>
                      <MonitorBar>
                        <MonitorDots>
                          <span /><span /><span />
                        </MonitorDots>
                        <MonitorAddress>
                          {project.link.replace("https://", "")}
                        </MonitorAddress>
                      </MonitorBar>

                      {/* Container com tamanho exato da prévia escalada */}
                      <MonitorDisplay
                        ref={displayRef}
                        style={{ height: displayH > 0 ? `${displayH}px` : "220px" }}
                      >
                        {!iframeError ? (
                          <>
                            <iframe
                              src={project.link}
                              sandbox="allow-scripts allow-same-origin"
                              loading="lazy"
                              title={`Preview: ${project.title}`}
                              onLoad={() => setIframeLoaded(true)}
                              onError={() => setIframeError(true)}
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width:  `${IFRAME_W}px`,
                                height: `${IFRAME_H}px`,
                                border: "none",
                                transform: `scale(${scale})`,
                                transformOrigin: "top left",
                                pointerEvents: "none",   // sem scroll interno
                                opacity: iframeLoaded ? 1 : 0,
                                transition: "opacity 0.4s",
                              }}
                            />
                            {!iframeLoaded && <PreviewSkeleton />}
                          </>
                        ) : (
                          <IframeFallback>
                            <FallbackText>preview não disponível</FallbackText>
                            <FallbackLink href={project.link} target="_blank" rel="noreferrer">
                              ↗ abrir projeto
                            </FallbackLink>
                          </IframeFallback>
                        )}
                      </MonitorDisplay>
                    </MonitorScreen>
                    <MonitorNeck />
                    <MonitorBase />
                  </MonitorWrap>
                </PreviewPanel>
              )}
            </MainContent>

            <Footer>
              {project.link && (
                <LinkBtn href={project.link} target="_blank" rel="noreferrer">
                  <ExternalIcon /> Ver projeto ao vivo
                </LinkBtn>
              )}
              {project.github && (
                <LinkBtn href={project.github} target="_blank" rel="noreferrer" $ghost>
                  <GitHubIcon /> Ver código
                </LinkBtn>
              )}
              {project.figma && (
                <LinkBtn href={project.figma} target="_blank" rel="noreferrer" $ghost>
                  <FigmaIcon /> Ver no Figma
                </LinkBtn>
              )}
              {!project.link && !project.github && (
                <NoLink>
                  <LockIcon /> projeto interno · link não disponível
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
