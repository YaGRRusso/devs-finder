import styled, { keyframes } from "styled-components";
import SearchImg from './svgs/search.svg'

export const Container = styled.div`
    padding: 60px 0;
    width: 95vw;
    max-width: 1440px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1{
        display: flex;
        align-items: center;
        font-size: 3rem;
        color: ${props => props.theme.primaryColor};

        img {
            height: 48px;
            margin-right: 12px;
        }
    }

    input{
        margin-bottom: 80px;
        padding: 10px;
        font-size: 16px;
        width: 95%;
        max-width: 600px;
        border-radius: 6px;
        border: none;
        background-image: url(${SearchImg});
        background-repeat: no-repeat;
        background-position: calc(100% - 12px);
        background-size: 20px;
        outline: none;
    }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
    width: 60px;
    height: 60px;
    border: 3px solid ${props => `${props.theme.primaryColor}25`};
    border-bottom: 3px solid ${props => props.theme.primaryColor};
    border-radius: 50%;
    animation: ${rotate} .75s infinite linear;
`