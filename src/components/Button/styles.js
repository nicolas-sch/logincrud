import styled from "styled-components";

export const Button = styled.button `
    padding: 5px 20px;
    background: #42adf5;
    border-radius: 3px;
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 28px;
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }

    ${ props => props.login && `
        width: 100%;
        font-size: 14px;
    `}

    ${ props => props.submit && `
        width: 300px;
        font-size: 14px;
    `}

    ${ props => props.cardButton && `
        background: transparent;
        color: black;
        border: 1px solid #000;
        padding: 1px 2px;
        align-items: flex-end;
        justify-content: flex-end;
    `}
    &:disabled {
        background: grey;
        color: #000000;
    }
`