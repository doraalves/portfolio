import styled from "styled-components";

export const colors = {
    background: '#2E353C',
    title: '#FF6060',
    fonts: '#fff',
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    
    background-color: ${colors.background};
`;

export const Perfil = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img{
        width: 200px;
        height: 200px;
    }
    h1{
        font-size: 30px;
        font-weight: 400;
        color: ${colors.fonts};
    }
    ul{
        display: flex;
        flex-direction: row;
        gap: 26px;
        li img{
            height: 50px;
            width: 50px;
            opacity: 0.5;
        }
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;

    & *{
        font-weight: 300;
        color: ${colors.fonts};
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;

    h5{
        font-weight: 400;
        color: ${colors.title};
    }
    h4{
        font-weight: 500;
    }
`;

export const Subtitle = styled.h6`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;