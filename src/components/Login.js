import React from 'react';
import './Login.css';
import { login } from '../features/userSlice';
import { Button } from '@mui/material';
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';


function Login() {
    const dispatch = useDispatch();

    const loginHandler = () => {
        console.log('auth:', auth);
        signInWithPopup(auth, provider)
            .then(({ user }) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
                }));
            })
            .catch(error => alert(error.message));
    };
    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt='gmail logo' />

                <Button variant='contained' color='primary' onClick={loginHandler}>Login</Button>
            </div>
        </div>
    );
}

export default Login;
