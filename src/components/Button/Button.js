import React from "react";
import { Button as ContainerButton } from './styles';

const Button = ({onClick, children, ...props}) => {
   
    return (
        <ContainerButton {...props} onClick={onClick}>
            {children}
        </ContainerButton>
    )
}

export default Button;