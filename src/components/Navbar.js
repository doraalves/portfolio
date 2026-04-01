import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import {
  Nav,
  Logo,
  Links,
  NavBtn,
  Sep,
  IconLink,
  ThemeToggle,
  HamburgerBtn,
  MobileMenu,
  MobileNavBtn,
  MobileBottom,
  MobileSocials,
  MobileIconLink,
  MobileThemeToggle,
} from "../styles/Navbar.styled";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "./Icons";

function SunIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar({ page, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { dark: themeDark, toggle } = useTheme();
  const navDark = page === "home" && themeDark;

  const navigate = (id) => {
    setMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <Nav $dark={navDark}>
        <Logo $dark={navDark} onClick={() => navigate("home")}>
          iza.dev
        </Logo>

        {/* Desktop links — esconde no mobile */}
        <Links>
          <li>
            <NavBtn $dark={navDark} $active={page === "about"} onClick={() => navigate("about")}>
              sobre
            </NavBtn>
          </li>
          <li>
            <NavBtn $dark={navDark} $active={page === "projects"} onClick={() => navigate("projects")}>
              projetos
            </NavBtn>
          </li>
          <li>
            <NavBtn $dark={navDark} $active={page === "contact"} onClick={() => navigate("contact")}>
              contato
            </NavBtn>
          </li>
          <Sep $dark={navDark} />
          <li>
            <IconLink
              href="https://github.com/doraalves"
              target="_blank"
              rel="noreferrer"
              $dark={navDark}
            >
              <GitHubIcon />
            </IconLink>
          </li>
          <li>
            <IconLink
              href="https://www.linkedin.com/in/izadoraalves/"
              target="_blank"
              rel="noreferrer"
              $dark={navDark}
            >
              <LinkedInIcon />
            </IconLink>
          </li>
          <li>
            <IconLink
              href="https://www.instagram.com/izadoraaalves"
              target="_blank"
              rel="noreferrer"
              $dark={navDark}
            >
              <InstagramIcon />
            </IconLink>
          </li>
          <Sep $dark={navDark} />
          {/* Toggle só no desktop — fica no final */}
          <li>
            <ThemeToggle
              $dark={navDark}
              onClick={toggle}
              aria-label="Alternar tema"
            >
              {themeDark ? <SunIcon /> : <MoonIcon />}
            </ThemeToggle>
          </li>
        </Links>

        {/* Mobile: só o hamburguer — toggle fica dentro do menu */}
        <HamburgerBtn
          $dark={navDark}
          className={menuOpen ? "open" : ""}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </HamburgerBtn>
      </Nav>

      {/* Menu mobile */}
      <MobileMenu $open={menuOpen} $themeDark={themeDark}>
        <MobileNavBtn $active={page === "home"}     onClick={() => navigate("home")}>início</MobileNavBtn>
        <MobileNavBtn $active={page === "about"}    onClick={() => navigate("about")}>sobre</MobileNavBtn>
        <MobileNavBtn $active={page === "projects"} onClick={() => navigate("projects")}>projetos</MobileNavBtn>
        <MobileNavBtn $active={page === "contact"}  onClick={() => navigate("contact")}>contato</MobileNavBtn>
        <MobileBottom>
          <MobileSocials>
            <MobileIconLink
              href="https://github.com/doraalves"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </MobileIconLink>
            <MobileIconLink
              href="https://www.linkedin.com/in/izadoraalves/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </MobileIconLink>
            <MobileIconLink
              href="https://www.instagram.com/izadoraaalves"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </MobileIconLink>
          </MobileSocials>
          <MobileThemeToggle onClick={toggle}>
            {themeDark ? <SunIcon /> : <MoonIcon />}
            {themeDark ? "Claro" : "Escuro"}
          </MobileThemeToggle>
        </MobileBottom>
      </MobileMenu>
    </>
  );
}
