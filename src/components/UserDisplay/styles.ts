import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    a{
        color: currentColor;
    }
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    margin: 50px 0;

    img {
        height: 240px;
        width: 240px;
        border-radius: 10px;
        margin-right: 30px;
    }

    @media (max-width: 700px) {
        flex-direction: column;

        img {
            margin-right: 0;
            margin-bottom: 20px;
        }
    }
`

export const Personal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const PersonalTop = styled.div`
    h2{
        font-size: 2rem;
        margin: 0;
        color: ${props => props.theme.superColor};
    }

    p{
        margin-top: 5px;
        font-size: .9rem;
        color: ${props => props.theme.subColor};
    }

    @media (max-width: 700px) {
        max-width: 400px;
        text-align: center;
    }
`

export const PersonalNumbers = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: .9rem;
    span{
        font-weight: bold;
        color: ${props => props.theme.primaryColor};
    }
`

export const PersonalBottom = styled.ul`
    list-style: none;
    margin: 0;
    margin-top: 20px;
    padding: 0;

    a{
        text-decoration: none;
    }

    li{
        display: flex;
        align-items: center;
        margin: 3px 0;
        font-size: .9rem;
    }

    img{
        width: 16px;
        height: 16px;
        margin-right: 10px;
        margin-bottom: 0;
        filter: ${props => props.theme.active === 'dark' ? 'invert(1)' : ''};
    }

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const Repositories = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;

    @media (max-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 490px) {
        grid-template-columns: 1fr;
    }
`

export const RepoTitle = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    font-size: 2rem;
    border-bottom: 2px solid ${props => props.theme.primaryColor};
    margin-bottom: 10px;

    span{
        font-size: .8rem;
    }
`