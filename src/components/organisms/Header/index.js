import React from 'react';
import { NavLink } from 'react-router-dom'

import style from './style.module.scss';
import img from '../../../styles/img/logo.png';
import burger from '../../../styles/img/burger.png';


const Header = () => {
    return (
        <div className={style.header}>
            <NavLink to="/">
                <div className={style.headerLogo}>
                    <img src={img} alt='logo' />
                </div>
            </NavLink>
            <NavLink to="/persons" className={({ isActive }) => isActive ? style.active : ''}>
                <div className={style.personCatalog}>
                    <img src={burger} alt="menu" />
                    <p className={style.catalog}>Catalog</p>
                </div>
            </NavLink>
        </div >
    );
}

export default Header;