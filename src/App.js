import { Route, Routes } from 'react-router-dom';
import Login from './features/login/login';
import AddUser from './features/users/AddUser/AddUser';
import EditUser from './features/users/EditUser/EditUser';
import UserList from './features/users/UserList/UserList';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/user-list" element={<UserList />}/>
        <Route path="/add-user" element={<AddUser />}/>
        <Route path="/edit-user/:id" element={<EditUser />}/>
      </Routes>
    </>
  );
}

export default App;
