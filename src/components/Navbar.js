import React from 'react'
import { Nav, Logo, Links, NavBtn, Sep, IconLink } from '../styles/Navbar.styled'
import { GitHubIcon, LinkedInIcon, InstagramIcon } from './Icons'

export default function Navbar({ page, onNavigate }) {
  const dark = page === 'home'

  return (
    <Nav $dark={dark}>
      <Logo $dark={dark} onClick={() => onNavigate('home')}>iza.dev</Logo>
      <Links>
        <li><NavBtn $dark={dark} onClick={() => onNavigate('about')}>sobre</NavBtn></li>
        <li><NavBtn $dark={dark} onClick={() => onNavigate('projects')}>projetos</NavBtn></li>
        <li><NavBtn $dark={dark} onClick={() => onNavigate('contact')}>contato</NavBtn></li>
        <Sep $dark={dark} />
        <li>
          <IconLink href="https://github.com/doraalves" target="_blank" rel="noreferrer" $dark={dark} aria-label="GitHub">
            <GitHubIcon />
          </IconLink>
        </li>
        <li>
          <IconLink href="https://www.linkedin.com/in/izadoraalves/" target="_blank" rel="noreferrer" $dark={dark} aria-label="LinkedIn">
            <LinkedInIcon />
          </IconLink>
        </li>
        <li>
          <IconLink href="https://www.instagram.com/izadoraaalves" target="_blank" rel="noreferrer" $dark={dark} aria-label="Instagram">
            <InstagramIcon />
          </IconLink>
        </li>
      </Links>
    </Nav>
  )
}
