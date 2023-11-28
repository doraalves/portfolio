import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;

    @media screen and (min-width: 768px){
      display: none;
    }
  }
/* TODO: Descobri pq as linguagens aparece quando clica no hamburguer */
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column nowrap;
    position: fixed;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    
    background-color: #262a2f;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Projetos</li>
      <li>Contato</li>
      <li>Currículo</li>
    </Ul>
  );
};

export default RightNav;
