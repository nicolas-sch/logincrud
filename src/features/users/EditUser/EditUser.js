import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/Button/Button";
import TextField from "../../../components/TextField/TextField";
import { editUser } from "../userSlice";
import { EditUserContainer, EditUserWrapper } from "./styles";

const EditUser = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const users = useSelector(store => store.users);
    const navigate = useNavigate();
    const existingUser = users.filter(user => user.id === params.id);
    const { name, email } = existingUser[0];
    const [values, setValues] = useState({
        name,
        email
    });

    const handleEditUser = () => {
        setValues({ name: '', email: '' });
        try {
            dispatch(editUser({
                id: params.id,
                name: values.name,
                email: values.email
            }));
            alert('Usuário editado')
        } catch (e) {
            alert('Erro ao editar o usuário')
        }
        
        
        navigate('/user-list');
    }

    return (
        <EditUserWrapper>
            <EditUserContainer>
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
                    inputProps={{ type: 'email', placeholder: 'Email...'}}
                />
                <Button submit={true} onClick={handleEditUser}>Edit</Button>
            </EditUserContainer>
        </EditUserWrapper>
    )
}

export default EditUser;