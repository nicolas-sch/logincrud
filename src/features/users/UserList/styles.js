import styled from "styled-components";

export const UsersListWrapper = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #becfed;
`

export const UsersListContainer = styled.div `
    width: 100%;
    height: 100%;
    padding: 30px 0;
    max-width: 1216px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 100px;
`
export const UsersCardContainer = styled.div `
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const UsersCard = styled.div `
    width: 20rem;
    background: #e2e3de;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    box-shadow: 10px 5px 5px #000000;
    gap: 10px;
`

export const UserInfos = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3px 8px;
    justify-content: center;
    gap: 5px;

    label {
        width: 100%;
        padding: 3px;
        border-radius: 3px;
        background: #a4a7ab;
    }
    h3, span {
        font-size: 16px;
        font-weight: 400;
    }
`

export const UserButtons = styled.div `
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 20px;
    padding: 3px 8px;
    justify-content: center;
`