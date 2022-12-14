import React from "react";
import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
  return (
    <Link to='/home' className={style.header}>
      <img src="images/logo.png" alt="chemical lattice" />
      <h3>Сайт учителя химии и биoлогии</h3>
    </Link>
  )
}

export default Header;