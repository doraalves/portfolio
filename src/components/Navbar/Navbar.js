import React from "react";
import {
  Container,
  Navigation,
  NavLink,
  LightMode
} from "./styled.js"
import Burger from "./BtnBurguer/Burger"
import Moon from "../../assets/moon.svg"

const Navbar = () => {
  return (
    <Container>
      <NavLink to="/">
        {/* TODO: quando clicar, voltar para o topo da página */}
        <h2>Izadora</h2>
      </NavLink>
      <Burger />
      <Navigation>
        {/* TODO: linkar para o pedaço especifico da página */}
        <NavLink>Projetos</NavLink>
        <NavLink>Contato</NavLink>
        <NavLink>Currículo</NavLink>
      </Navigation>
    <LightMode>
      {/* TODO: lógica para trocar de svg e tals */}
      <img src={Moon} alt="Dark mode"/>
    </LightMode>
    </Container>
  );
}

export default Navbar;
