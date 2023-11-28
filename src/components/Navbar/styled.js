import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';

export const colors = {
  background: '#262a2f',
  logo: '#ff6060',
  font: '#fefefe',
  hover: '#ff6060',

  //TODO: Fazer as cores da lua e do sol
  moon: '',
  sun: '',
};

export const Container = styled.header`
  display: flex;
  justify-content: flex-start;
  top: 0;
  width: 100%;
  position: fixed;

  background-color: ${colors.background};

  & * {
    transition: 1.5s;
    cursor: pointer;
  }
  h2 {
    font-size: 30px;
    font-weight: 500;

    color: ${colors.logo};
  }
  @media screen 
  and (min-width: 768px) {
    padding: 0 50px;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;

  &:hover {
    color: ${colors.hover};
  }
`;

export const Navigation = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  white-space: nowrap;
  font-size: 18px;
  font-weight: 300;

  & * {
    color: ${colors.font};
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LightMode = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;

  background-color: transparent;

  :hover{

  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
