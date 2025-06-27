import React from "react";
import {
  Container,
  Title,
  Redes,
  Sociais,
  Copyright
} from "./styled.js";

import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import gmail from "../../assets/icons/gmail.svg";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Title>
        <h2>Izadora</h2>
      </Title>
      <Redes>
        <Sociais>
          <strong>Redes Sociais</strong>
          <div>
            <img src={linkedin}></img>
            <a
              href="https://linkedin.com/in/izadoraalves"
              target="_black"
              rel="external"
            >
              /izadoraalves
            </a>
          </div>
          <div>
            <img src={github}></img>
            <a
              href="https://github.com/doraalves"
              target="_blank"
              rel="external"
            >
              /doraalves
            </a>
          </div>
        </Sociais>
        <Sociais>
          <strong>Contatos</strong>
          <div>
            <img src={whatsapp}></img>
            <a
              href="https://api.whatsapp.com/send?phone=5521982419979&text=Oi,%20gostei%20do%20seu%20trabalho.%20Podemos%20conversar?"
              target="_blank"
              rel="external"
            >
              +55 (021) 98241-xxxx
            </a>
          </div>
          <div>
            <img src={gmail}></img>
            <a href="mailto:izadorapmalves@gmail.com">izadorapmalves@</a>
          </div>
        </Sociais>
      </Redes>
      <Copyright>
        <h4>© {currentYear} IZADORA ALVES. Todos os direitos reservados.</h4>
      </Copyright>
    </Container>
  );
}

export default Footer;