import styled from "styled-components";
import { colors } from "../Navbar/styled";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    background-color: ${colors.background};
    
    & *{
      font-family: League Spartan;
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;

    h2{ 
        justify-content: flex-start;
        font-size: 20px;
        font-weight: 400;
        color: ${colors.logo};
    }
    h4{
        justify-content: flex-end;
        padding-top: 15px;
        font-size: 12px;
        font-weight: 300;
        color: ${colors.font};
    }
`;

export const Social = styled.a`
    display: flex;
    flex-direction: column;
    margin: 10px;

    & *{
        color: ${colors.font}
    }
    div{
        cursor: pointer;
        display: flex;
        align-items: center;
    }
    strong{
        padding-bottom: 10px;
        font-size: 18px;
        font-weight: 400;
    }
    img {
        width: 32px;
        height: 32px;
        padding-right: 10px;
    }
    a{
        font-size: 16px;
        font-weight: 300;
    }
`;
