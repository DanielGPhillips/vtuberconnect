import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import VyceliumIcon from './vycelium-logo.png';
import SearchIcon from '@mui/icons-material/Search';
import StorefrontIcon from '@mui/icons-material/Storefront';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function Header() {
  return (
    <div className="header">
        <div className="header__left">
            <div className='header__hamburger header__option'>
                <IconButton>
                    <MenuIcon fontSize="medium"/>
                </IconButton>
            </div>
            <img src= {VyceliumIcon} alt="Vycelium Icon"></img>
                        
        </div>

        <div className="header__middle">
            <div className='header__nav'>
                <a href=''>Discover</a>    
            </div>
            <div className="header__input">
                <SearchIcon fontSize="medium"/>
                <input type="text" />
            </div>
            <div className='header__store header__option'>
                <IconButton>
                    <StorefrontIcon fontSize="large"/>
                </IconButton>
            </div>
        </div>
        
        <div className="header__right">
            <div className='header__nsi'>
                {/* Sign Up if not Signed In */}
                <button>Sign Up</button>
                {/* Sign In if not Signed In */}
                <button>Sign In</button>
            </div>
            <div className="header__info">
                {/* Notifcations if Signed In */}
                <NotificationsIcon fontSize="large"/>
                
                {/* Profile Avatar if Signed in */}
                <Avatar />
                <h4>Username</h4>
            </div>
            <div className='header__functions'>
                <IconButton>
                    <ChatBubbleIcon />
                </IconButton>
            </div>
        </div>

    </div>
  )
}

export default Header

{/* <div className=''></div> */}