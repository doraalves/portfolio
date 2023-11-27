import styled from "styled-components";
import { colors } from "../Navbar/styled";

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;

  background-color: ${colors.background};

  @media screen and (min-width: 768px) {
    padding: 20px 50px 0;
  }
`;

export const Title = styled.div`
  * {
    margin: 0;
  }
  h2 {
    font-size: 20px;
    font-weight: 400;
    color: ${colors.logo};
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Redes = styled.section`
    display: flex;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    padding-top: 15px;
    gap: 22px;
  }
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    width: 60%;
  }
`;

export const Sociais = styled.a`
  display: flex;
  flex-direction: column;

  & * {
    color: ${colors.font};
  }
  div {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  strong {
    padding-bottom: 10px;
    font-size: 14px;
    font-weight: 400;
  }
  img {
    width: 32px;
    height: 32px;
    padding-right: 10px;
  }
  a {
    font-size: 12px;
    font-weight: 300;
  }
`;

export const Copyright = styled.h4`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  h4 {
    font-size: 12px;
    font-weight: 300;
    color: ${colors.font};
  }
  @media screen and (min-width: 768px) {
    justify-content: start;
  }
`;