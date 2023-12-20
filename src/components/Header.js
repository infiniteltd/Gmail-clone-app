import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Header.css';
import { Menu, Search, Tune, Apps, HelpOutlineOutlined, Settings } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import { selectUser } from '../features/userSlice';
import { logout } from '../features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOutHandler = () => {
        signOut(auth).then(() => {
            dispatch(logout());
        });
    };

    return (
        <div className='header'>
            <div className="header__left">
                <IconButton>
                    <Menu />
                </IconButton>
                <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png' alt='gmail logo' />
            </div>

            <div className="header__middle">
                <Search />
                <input type='text' placeholder='Search mail' />
                <Tune className="header__inputCaret" />
            </div>

            <div className="header__right">
                <IconButton>
                    <HelpOutlineOutlined />
                </IconButton>
                <IconButton>
                    <Settings />
                </IconButton>
                <IconButton>
                    <Apps />
                </IconButton>
                <Avatar onClick={signOutHandler} src={user?.photoUrl} />
            </div>

        </div>
    );
}

export default Header;
