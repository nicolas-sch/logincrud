import React, { useState } from "react";
import Button from "../Button/Button";
import { FormContainer, FormGroup, FormInner, FormWrapper } from "./styles";

const LoginForm = ({ Login, error }) => {
    const [details, setDetails] = useState({ email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <FormWrapper>
            <FormContainer onSubmit={submitHandler}>
                <FormInner>
                    <h2>Login</h2>
                    {(error != "") ? ( <div className="error">{error}</div> ) : ""}
                    <FormGroup>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    </FormGroup>
                    <Button login={true} type="submit">Login</Button>
                </FormInner>
            </FormContainer>
        </FormWrapper>
        
    )
}

export default LoginForm;