import React from "react";
import {
  Container,
  NavContainer,
  Navigation,
  LightMode
} from "./styled.js"

import Moon from "../../assets/moon.svg"

function Navbar() {
  return (
    <Container>
      <NavContainer>
        <h2>Izadora</h2>
        <Navigation>
          <a>Projetos</a>
          <a>Contato</a>
          <a>Currículo</a>
        </Navigation>
      <LightMode>
        {/* TODO: lógica para trocar de svg e tals */}
        <img src={Moon} alt="Dark mode"/>
      </LightMode>
      </NavContainer>
    </Container>
  );
}

export default Navbar;
