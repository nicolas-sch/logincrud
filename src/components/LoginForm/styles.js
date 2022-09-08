import styled from "styled-components";

export const FormWrapper = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #becfed;
`

export const FormContainer = styled.form `
    padding: 30px 0;
    display: flex;
    background: none;
    border: 1px solid;
    border-radius: 3px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`

export const FormInner = styled.div `
    padding: 30px;
    display: flex;
    background: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const FormGroup = styled.div `
    display: flex;
    flex-direction: column;

    input {
        background: transparent;
        border: 1px solid #000;
        padding: 5px;
        border-radius: 3px;
    }
`