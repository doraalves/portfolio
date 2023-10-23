import React from "react";
import {
  Container,
  Title,
  Social
} from "./styled.js"

import linkedin from "../../assets/icons/linkedin.svg"
import github from "../../assets/icons/github.svg"
import whatsapp from "../../assets/icons/whatsapp.svg"
import gmail from "../../assets/icons/gmail.svg"

function Footer() {
  return (
    <Container>
      <Title>
        <h2>Izadora</h2>
        <h4>© 2023 IZADORA ALVES. Todos os direitos reservados.</h4>
      </Title>
      <Social>
        <strong>Redes Sociais</strong>
        <div>
          <img src={linkedin}></img>
          <a href="linkedin.com/in/izadoraalves">
            /izadoraalves
          </a>
        </div>
        <div>
          <img src={github}></img>
          <a href="https://github.com/doraalves">
            /doraalves
          </a>
        </div>
      </Social>
      <Social>
        <strong>Contatos</strong>
        <div>
          <img src={whatsapp}></img>
          <a href="https://api.whatsapp.com/send?phone=5521982419979&text=Oi,%20gostei%20do%20seu%20trabalho.%20Podemos%20conversar?">
            +55 (021) 98241-xxxx
          </a>
        </div>
        <div>
          <img src={gmail}></img>
          <a href="mailto:izadorapmalves@gmail.com">
            izadorapmalves@
          </a>
        </div>
      </Social>
    </Container>
  );
}

export default Footer;