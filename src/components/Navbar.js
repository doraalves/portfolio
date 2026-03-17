import React, { useState } from "react";
import {
  Nav,
  Logo,
  Links,
  NavBtn,
  Sep,
  IconLink,
  HamburgerBtn,
  MobileMenu,
  MobileNavBtn,
  MobileSocials,
  MobileIconLink,
} from "../styles/Navbar.styled";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "./Icons";

export default function Navbar({ page, onNavigate }) {
  const dark = page === "home";
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (id) => {
    setMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <Nav $dark={dark}>
        <Logo $dark={dark} onClick={() => navigate("home")}>
          iza.dev
        </Logo>

        {/* Desktop links */}
        <Links>
          <li>
            <NavBtn $dark={dark} onClick={() => navigate("about")}>
              sobre
            </NavBtn>
          </li>
          <li>
            <NavBtn $dark={dark} onClick={() => navigate("projects")}>
              projetos
            </NavBtn>
          </li>
          <li>
            <NavBtn $dark={dark} onClick={() => navigate("contact")}>
              contato
            </NavBtn>
          </li>
          <Sep $dark={dark} />
          <li>
            <IconLink
              href="https://github.com/doraalves"
              target="_blank"
              rel="noreferrer"
              $dark={dark}
              aria-label="GitHub"
            >
              <GitHubIcon />
            </IconLink>
          </li>
          <li>
            <IconLink
              href="https://www.linkedin.com/in/izadoraalves/"
              target="_blank"
              rel="noreferrer"
              $dark={dark}
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconLink>
          </li>
          <li>
            <IconLink
              href="https://www.instagram.com/izadoraaalves"
              target="_blank"
              rel="noreferrer"
              $dark={dark}
              aria-label="Instagram"
            >
              <InstagramIcon />
            </IconLink>
          </li>
        </Links>

        {/* Hamburger */}
        <HamburgerBtn
          $dark={dark}
          className={menuOpen ? "open" : ""}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </HamburgerBtn>
      </Nav>

      {/* Mobile drawer */}
      <MobileMenu $open={menuOpen} $dark={dark}>
        <MobileNavBtn $dark={dark} onClick={() => navigate("home")}>
          início
        </MobileNavBtn>
        <MobileNavBtn $dark={dark} onClick={() => navigate("about")}>
          sobre
        </MobileNavBtn>
        <MobileNavBtn $dark={dark} onClick={() => navigate("projects")}>
          projetos
        </MobileNavBtn>
        <MobileNavBtn $dark={dark} onClick={() => navigate("contact")}>
          contato
        </MobileNavBtn>
        <MobileSocials>
          <MobileIconLink
            href="https://github.com/doraalves"
            target="_blank"
            rel="noreferrer"
            $dark={dark}
            aria-label="GitHub"
          >
            <GitHubIcon />
          </MobileIconLink>
          <MobileIconLink
            href="https://www.linkedin.com/in/izadoraalves/"
            target="_blank"
            rel="noreferrer"
            $dark={dark}
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </MobileIconLink>
          <MobileIconLink
            href="https://www.instagram.com/izadoraaalves"
            target="_blank"
            rel="noreferrer"
            $dark={dark}
            aria-label="Instagram"
          >
            <InstagramIcon />
          </MobileIconLink>
        </MobileSocials>
      </MobileMenu>
    </>
  );
}
