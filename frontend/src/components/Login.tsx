import React, { useState } from 'react';
import { loginAsync, selectLogged } from '../features/loginSlice';
import { useAppSelector, useAppDispatch } from './../app/hooks';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const logged = useAppSelector(selectLogged);
    const dispatch = useAppDispatch();

    const handleLogin = () => {
        dispatch(loginAsync({ username, password }))
            .unwrap()
            .then(() => {
                toast.success('Login successful');
            })
            .catch((error) => {
                toast.error(`Login failed: ${error.message}`);
            });
    };

    return (
        <div>
            <ToastContainer />
            {logged ? <button>Logout</button> :
            <div>
                user name:<input onChange={(e) => setusername(e.target.value)} />
                password:<input onChange={(e) => setpassword(e.target.value)} type="password" />
                <button onClick={handleLogin}>Login</button>
            </div>}
        </div>
    );
}

export default Login;
