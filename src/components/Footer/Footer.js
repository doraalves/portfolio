import React from "react";
import {
  FooterContainer,
  Container,
  Title,
  Social,
  Contact,
  FooterContainer
} from "./styled.js"

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Title>
          <h2>Izadora</h2>
          <h4>© 2023 IZADORA ALVES. Todos os direitos reservados.</h4>
        </Title>
        <Social>
          <a>Linkedin</a>
          <a>GitHub</a>
        </Social>
        <Contact>
          <a>zipzop</a>
          <a>email</a>
        </Contact>
      </Container>
    </FooterContainer>
  );
}

export default Footer;