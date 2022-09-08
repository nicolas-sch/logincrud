import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import { deleteUser } from "../userSlice";
import { UserButtons, UserInfos, UsersCard, UsersCardContainer, UsersListContainer, UsersListWrapper } from "./styles";

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector(store => store.users);

    const handleDeleteUser = (id) => {
        try {
            dispatch(deleteUser({id: id}));
            alert('Usuário deletado')
        } catch (e) {
            alert('Erro ao deletar o usuário')
        }
        
    }


    const renderCard = () => users.map(user => (
        <UsersCard key={user.id}>
            <UserInfos>
                <label>Nome</label>
                <h3>{user.name}</h3>
                <label>Email</label>
                <span>{user.email}</span>
            </UserInfos>
            <UserButtons>
                <Link to={`/edit-user/${user.id}`}>
                    <Button cardButton={true}>
                    <span class="material-symbols-outlined">
                        edit
                    </span>
                    </Button>
                </Link>
                
                <Button
                    cardButton={true}
                    onClick={() => handleDeleteUser(user.id)}
                >
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                </Button>
            </UserButtons>
        </UsersCard>
    ))

    return (
        <UsersListWrapper>
            <UsersListContainer>
                <Link to="/add-user">
                    <Button>Add User</Button>
                </Link>
                
                <UsersCardContainer>
                    {users.length ? renderCard() : <p>No User</p>}
                </UsersCardContainer>
            </UsersListContainer>
        </UsersListWrapper>
    )
}

export default UserList;