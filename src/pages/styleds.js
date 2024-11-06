import styled from "styled-components";

export const colors = {
    background: '#2E353C',
    title: '#FF6060',
    fonts: '#fff',
}

export const Container = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 78px;

    background-color: ${colors.background};
`;