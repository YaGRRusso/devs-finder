import styled from "styled-components";
import MoonImg from '../../svgs/moon.svg'
import SunImg from '../../svgs/sun.svg'

export const Container = styled.div<{ active: boolean }>`
    display: flex;
    align-items: center;
    width: 55px;
    height: 20px;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${props => props.active ? '#323232aa' : '#d2d2d2aa'};

    ::before{
        content: "";
        display: flex;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: ${props => props.theme.primaryColor};
        transition: all .3s;
        background-image: ${props => props.active ? `url(${MoonImg})` : `url(${SunImg})`};
        background-size: 60%;
        background-repeat: no-repeat;
        background-position: center;
        transform: ${props => props.active ? 'translateX(100%) rotate(0)' : 'translateX(0) rotate(-90deg)'};
    }
`