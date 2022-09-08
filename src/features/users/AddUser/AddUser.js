import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";
import TextField from "../../../components/TextField/TextField";
import { addUser } from "../userSlice";
import {v4 as uuidv4} from 'uuid';
import { AddUserContainer, AddUserWrapper } from "./styles";

const AddUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        email: '',
        telephone: '',
    });

    const handleAddUser = () => {
        setValues({ name: '', email: '' });
        try {
            dispatch(addUser({
                id: uuidv4(),
                name: values.name,
                email: values.email
            }));
            alert('Usuário cadastrado')
        } catch (e) {
            alert('Erro ao cadastrar o usuário')
        }
        
        
        navigate('/user-list');
    }

    return (
        <AddUserWrapper>
            <AddUserContainer>
                <TextField
                    label="Name"
                    value={values.name}
                    onChange={(e) => setValues({...values, name: e.target.value})}
                    inputProps={{ type: 'text', placeholder: 'Nome...'}}
                />
                <TextField
                    label="Email"
                    value={values.email}
                    onChange={(e) => setValues({...values, email: e.target.value})}
                    inputProps={{ type: 'email', placeholder: 'email...'}}
                />
                <Button submit={true} onClick={handleAddUser} disabled={!values.name || !values.email}>Submit</Button>
            </AddUserContainer>
        </AddUserWrapper>
        
    )
}

export default AddUser;