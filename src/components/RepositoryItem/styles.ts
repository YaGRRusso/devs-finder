import styled from "styled-components";

export const Container = styled.div`
    padding: 10px;
    background-color: #ffffff05;
    border-radius: 3px;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 3px;

        h3 {
        display: flex;
        align-items: center;
        margin: 0;
        font-size: 1rem;
        color: ${props => props.theme.primaryColor};

            img{
                filter: ${props => props.theme.active === 'dark' ? 'invert(1)' : ''};
                margin-right: 3px;
                width: 14px;
                height: 14px;
            }
        }

        span{
            font-size: .7rem;
            text-transform: uppercase;
        }
    }

    p{
        font-size: .7rem;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: 2rem;
        color: ${props => props.theme.subColor};
    }
`