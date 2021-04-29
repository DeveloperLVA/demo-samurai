import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

 const Header = (props) => {
     return  <header className={s.header} >
        <img src='https://static.rfstat.com/renderforest/images/v2/logo-homepage/embleme_3.png'></img> 

         <div className={s.loginBlock}>
             {props.isAuth 
             ? <div> {props.login} - <button onClick={props.logout}>Log out</button> </div>
             : <NavLink to={'/login'}>LOGIN</NavLink> }
         </div>
     </header>
 }

 export default Header;
