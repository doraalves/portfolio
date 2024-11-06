import React from 'react'

import {
  Container
} from "../styleds"

import {
  Perfil,
  Wrapper,
  Section,
  Title,
  Subtitle
} from "./styled"

import perfil from "../../assets/perfil.png"
import css from "../../assets/icons/css3.svg"
import django from "../../assets/icons/django.svg"
import git from "../../assets/icons/git.svg"
import html from "../../assets/icons/html5.svg"
import js from "../../assets/icons/javascript.svg"
import python from "../../assets/icons/python.svg"
import react from "../../assets/icons/react.svg"
import sass from "../../assets/icons/sass.svg"
import ts from "../../assets/icons/typescript.svg"

const Home = () => {
  return (
    <Container>
        <Perfil>
          <img src={perfil} />
          <h1>Desenvolvedora Front-End.</h1>
          <ul>
            <li><img src={git} /></li>
            <li><img src={html} /></li>
            <li><img src={css} /></li>
            <li><img src={sass} /></li>
            <li><img src={python} /></li>
            <li><img src={js} /></li>
            <li><img src={ts} /></li>
            <li><img src={react} /></li>
            <li><img src={django} /></li>
          </ul>
        </Perfil>
        <Wrapper>
          <Section>
            <div>
              <Title>
                <h5>Sobre mim</h5>
                <h4>Quem sou eu?</h4>
              </Title>
              <article>
                Lorem ipsum dolor sit amet.
              </article>
            </div>
            <div>
              <Title>
                <h5>Formação Academica</h5>
                <h4>Ciência da Computação</h4>
                <h6>Universidade Veiga de Almeida</h6>
              </Title>
              <article>
                Lorem ipsum dolor sit amet.
              </article>
            </div>
          </Section>
          <Section>
            <div>
              <Title>
                <h5>Experiências</h5>
                <h4>Desenvolvedora de Software </h4>
                <Subtitle>
                  <h6>Americanas</h6>
                  <h6>mes 0000 - mes 0000</h6>
                </Subtitle> 
              </Title>
              <article>
                Lorem ipsum dolor sit amet.
              </article>
            </div>
            <div>
              <Title>
                <h4>Estagiária Tech</h4>
                <Subtitle>
                  <h6>Americanas</h6>
                  <h6>mes 0000 - mes 0000</h6>
                </Subtitle> 
              </Title>
              <article>
                Lorem ipsum dolor sit amet.
              </article>
            </div>
            <div>
              <Title>
                <h4>Estagiária</h4>
                <Subtitle>
                  <h6>Prefeitura de Niterói</h6>
                  <h6>mes 0000 - mes 0000</h6>
                </Subtitle> 
              </Title>
              <article>
                Lorem ipsum dolor sit amet.
              </article>
            </div>
          </Section>
        </Wrapper>
    </Container>
  )
}

export default Home