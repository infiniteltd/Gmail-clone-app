import React from 'react';
import './Header.css';
import { Menu, Search, Tune, Apps, Notifications, HelpOutlineOutlined, Settings } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';

function Header() {
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
                <Avatar />
            </div>

        </div>
    );
}

export default Header;
