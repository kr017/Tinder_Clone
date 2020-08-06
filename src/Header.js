import React from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

import logo from './logo.jpg';
import { IconButton } from '@material-ui/core';

export default function Header() {
    return (
        <div className="header">
            <IconButton>
            <PersonIcon className="header__icon"
            fontSize="large"
            />   
            </IconButton>
        
        <img 
            className="header__logo"
            src={logo} 
            alt="tinder-logo"
        />
        <IconButton>
            <ForumIcon 
            fontSize="large" className="header__icon"
            />
        </IconButton>
       
      
        </div>
    )
}
