import React from 'react';
import './sidebar.scss';
import { IconContext } from "react-icons";
import {MdHome, MdAirplanemodeActive, MdVpnKey, MdMap, MdStar, MdLocationOn} from 'react-icons/md';
import hotel1 from '../../assets/img/hotel-1.jpg';
import hotel2 from '../../assets/img/hotel-2.jpg';
import hotel3 from '../../assets/img/hotel-3.jpg';
import Detail from '../detail/detail';
import Cta from '../cta/cta';

const sidebar = () => {
    return (
        <div className="content">
            <nav className="sidebar">
                <ul className="side-nav">
                    <li className="side-nav__item side-nav__item--active">
                        <a href="#" className="side-nav__link">                     
                            <IconContext.Provider value={{className: 'side-nav__icon'}}>
                                <MdHome/>
                            </IconContext.Provider>
                            <span>Hotel</span>
                        </a>
                    </li>
                    <li className="side-nav__item">
                        <a href="#" className="side-nav__link">                     
                            <IconContext.Provider value={{className: 'side-nav__icon'}}>
                                <MdAirplanemodeActive/>
                            </IconContext.Provider>
                            <span>Flight</span>
                        </a>
                    </li>
                    <li className="side-nav__item">
                        <a href="#" className="side-nav__link">                     
                            <IconContext.Provider value={{className: 'side-nav__icon'}}>
                                <MdVpnKey/>
                            </IconContext.Provider>
                            <span>Car rental</span>
                        </a>
                    </li>
                    <li className="side-nav__item">
                        <a href="#" className="side-nav__link">                     
                            <IconContext.Provider value={{className: 'side-nav__icon'}}>
                                <MdMap/>
                            </IconContext.Provider>
                            <span>Tours</span>
                        </a>
                    </li>
                </ul>

                <div className="legal">
                    &copy; 2017 by trillo. All rights reserved.
                </div>
            </nav>
            <main className="hotel-view">
                <div className="gallery">
                    <figure className="gallery__item">
                        <img src={hotel1} alt="Photo of model 1" className="gallery__photo"></img>
                    </figure>
                    <figure className="gallery__item">
                        <img src={hotel2} alt="Photo of model 2" className="gallery__photo"></img>
                    </figure>
                    <figure className="gallery__item">
                        <img src={hotel3} alt="Photo of model 3" className="gallery__photo"></img>
                    </figure>
                </div>

                <div className="overview">
                    <h1 className="overview__heading">
                        Hotel Las Palmas
                    </h1>
                    <div className="overview__stars">
                        <IconContext.Provider value={{className: 'overview__icon-star'}}>
                            <MdStar />
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: 'overview__icon-star'}}>
                            <MdStar />
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: 'overview__icon-star'}}>
                            <MdStar />
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: 'overview__icon-star'}}>
                            <MdStar />
                        </IconContext.Provider>
                        <IconContext.Provider value={{className: 'overview__icon-star'}}>
                            <MdStar />
                        </IconContext.Provider>
                    </div>
                    <div className="overview__location">
                        <IconContext.Provider value={{className: 'overview__icon-location'}}>
                            <MdLocationOn />
                        </IconContext.Provider>
                        <button className="btn-inline">Albuferia, Portugal</button>
                    </div>

                    <div className="overview__rating">
                        <div className="overview__rating-avarage">8.6</div>
                        <div className="overview__rating-count">429 votes</div>
                    </div>
                </div>
                <Detail />
                <Cta />
            </main>
        </div>
    );
}

export default sidebar;