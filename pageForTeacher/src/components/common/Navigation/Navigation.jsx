import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navigations.module.css';

const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <div className={style.item}>
        <NavLink to="/myPage" className={navData => navData.isActive ? style.active : style.item}>• Главная</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/chemistry" className={navData => navData.isActive ? style.active : style.item}>• Химия</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/biology" className={navData => navData.isActive ? style.active : style.item}>• Биология</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/exams" className={navData => navData.isActive ? style.active : style.item}>• ЕГЭ/ОГЭ</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/workOfStudents" className={navData => navData.isActive ? style.active : style.item}>• Работы учеников</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/extracurrical" className={navData => navData.isActive ? style.active : style.item}>• Внеклассная работа</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/documents" className={navData => navData.isActive ? style.active : style.item}>• Документация</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/photos" className={navData => navData.isActive ? style.active : style.item}>• Фотоальбом</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/movies" className={navData => navData.isActive ? style.active : style.item}>• Видео</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs" className={navData => navData.isActive ? style.active : style.item}>• Сообщения</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/users" className={navData => navData.isActive ? style.active : style.item}>• Пользователи</NavLink>
      </div>
    </nav>
  )
}

export default Navigation;