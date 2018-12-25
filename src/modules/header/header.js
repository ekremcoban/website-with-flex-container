import React from 'react';
import './header.scss';
import logo from '../../assets/img/logo.png';
import { MdSearch, MdBookmark, MdChat } from 'react-icons/md';
import { IconContext } from "react-icons";
import user2 from '../../assets/img/user-2.jpg';

const header = () => {
    return (
        <header className="header">
            <img src={logo} alt="trillo logo" className="logo"></img>

            <form action="#" className="search">
                <input type="text" className="search__input" placeholder="Search hotels"></input>
                <button className="search__button">
                    <IconContext.Provider value={{ className:"search__icon"}}>
                        <MdSearch />
                    </IconContext.Provider>
                </button>
            </form>

            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <IconContext.Provider value={{className:"user-nav__icon"}}>
                        <MdBookmark />
                    </IconContext.Provider>
                    <span className="user-nav__notification">7</span>
                </div>
                <div className="user-nav__icon-box">
                    <IconContext.Provider value={{className:"user-nav__icon"}}>
                        <MdChat />
                    </IconContext.Provider>
                    <span className="user-nav__notification">13</span>
                </div>
                <div className="user-nav__user">
                    <img src={user2} alt="User photo 2" className="user-nav__user-photo"></img>
                    <span className="user-nav__user-name">Kezban</span>
                </div>
            </nav>
            
        </header>
    );
}

export default header;