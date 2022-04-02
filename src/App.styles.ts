import styled, { keyframes } from "styled-components";
import SearchImg from './svgs/search.svg'

export const Container = styled.div`
    padding: 60px 0;
    width: 95vw;
    max-width: 920px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input{
        padding: 10px;
        font-size: 16px;
        width: 100%;
        border-radius: 6px;
        /* border: 1px solid ${props => props.theme.primaryColor}; */
        border: 1px solid #00000080;
        background-image: url(${SearchImg});
        background-repeat: no-repeat;
        background-position: calc(100% - 12px);
        background-size: 20px;
        outline: none;
        box-shadow: 3px 5px 10px #00000020;
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
    margin: 40px;
    border: 3px solid ${props => `${props.theme.primaryColor}25`};
    border-bottom: 3px solid ${props => props.theme.primaryColor};
    border-radius: 50%;
    animation: ${rotate} .75s infinite linear;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  img {
      height: 48px;
  }
  div {
    display: flex;
    align-items: center;
  }
  h1{
    display: flex;
    align-items: center;
    font-size: 2.8rem;
    color: ${props => props.theme.primaryColor};
    margin: 0 12px;
  }

  @media (max-width: 490px) {
      flex-direction: column;
  }
`