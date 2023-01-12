import React from "react";
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import logo from '../../../assets/img/logo.png'

const Header = (props) => {
  return (
    <div className={style.header}>
      <Link to='/myPage' className={style.namePage}>
        <img src={logo} alt="chemical lattice" />
        <h3>Сайт учителя химии и биoлогии</h3>
      </Link>
      <div>
        {props.isAuth
          ? props.login
          : <Link to='/login' className={style.loginBlock}>Login</Link>
        }
      </div>
    </div>
  )
}

export default Header;