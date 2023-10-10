import styled from "styled-components";

export const Header = styled.header`
  `;

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  position: sticky;
  top: 0px;
  /* padding: 0 70px; */
  
  background-color: #262a2f;
  
  @media screen 
  and (max-width: 1200px)
  and (min-width: 768px) {
    & *{
      transition: 2s;
    }
  }
  /* TODO: menu hamburguer para telas menores que 768px */
  `;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  * {
    cursor: pointer;
    font-family: League Spartan;
  }
  h2 {
    font-size: 30px;
    font-weight: 500;

    color: #ff6060;
  }
  @media screen and (max-width: 1200px) {
    h2 {
      padding-right: 60px;
    }
  }
  @media screen and (min-width: 992px) {
    h2 {
      padding-right: 100px;
    }
  }
`;

export const Navigation = styled.nav`
  font-size: 18px;
  font-weight: 300;

  color: #fefefe;

  @media screen and (max-width: 1200px) {
    * {
      padding-right: 60px;
    }
  }
  @media screen and (min-width: 992px) {
    * {
      padding-right: 80px;
    }
  }
`;

export const LightMode = styled.button`
  border: 0;
  background-color: transparent;
`;
