import React from 'react';
import './Header.css';
import Icon from './icon.png';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

function Header() {
    return (
    <div className ='header'>
        <img src ={Icon} className="app-logo" alt="logo" /><div class="top-left">GLOBATROSS</div>
        <div className ='header__center'>
            <input type ="text" placeholder="Start your Search"></input>
            <SearchIcon />
        </div>
        
        <div className ='header__right'>
            <p><b>Become a Host</b></p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <PersonRoundedIcon />
        </div>

    </div>
    )
}

export default Header