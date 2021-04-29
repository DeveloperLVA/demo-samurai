import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>

{/* Начало Это друзья с кружоками- LVA*/}
            <div className={s.friends}>
                <div className={s.Frie}><span>Friends</span></div>
                <div className={s.friendsKolum}>

                    <div>
                        <div className={s.cirColor}></div>
                        <div className={s.cirkleFrend}>
                            <NavLink to="/andrew" activeClassName={s.activeLink}>Andrew</NavLink></div>
                    </div>
                    <div>
                        <div className={s.cirColor}></div>
                        <div className={s.cirkleFrend}>
                            <NavLink to="/sasha" activeClassName={s.activeLink}>Sasha</NavLink></div>
                    </div>
                    <div>
                        <div className={s.cirColor}></div>
                        <div className={s.cirkleFrend}>
                            <NavLink to="/sveta" activeClassName={s.activeLink}>Sveta</NavLink></div>
                    </div>
                </div>
            </div>
                {/* Конец - друзья с кружоками- LVA*/}



        </nav>


    )
}

export default NavBar;
