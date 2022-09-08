import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import UserList from "../users/UserList/UserList";

const Login = () => {
    const adminUser = {
      email: "admin@admin.com",
      password: "admin123"  
    }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const Login = details => {
        if (details.email == adminUser.email && details.password == adminUser.password) {
            setUser({
               name: details.name,
               email: details.email 
            });
            navigate('/user-list')
        } else {
            setError("Details do not match")
        }
    }

    return (
        <div>
            {(user.email != "") ? (
                <UserList />
            ) : (
                <LoginForm Login={Login} error={error}/>
            )}
        </div>
    )
}

export default Login;