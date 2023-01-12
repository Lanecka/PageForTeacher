import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className="information">
      <div className={style.banner}>
        <h1>Сайт учителя химии и биoлогии</h1>
        <p className={style.text}>
          О, химия – ты такова,<br />
          Что без тебя нам – грош цена!<br />
          И знаю, все твои пути<br />
          К успеху могут привести!<br />
        </p>
        <span className={style.text}><i>(С.Щипачёв)</i></span>
      </div>
      <div className={style.profile}>
        <img src="images/teacer-icon.png" alt="example profile photo" />
        <div>
          <h3>Должковая Светлана Александровна</h3>
          <p>МБОУ СОШ № 12, г. Ульяновск</p>
          <p>
            <i>"Здравствуйте!
              Рада видеть Вас на своем сайте! Мой сайт предназначен
              для всех, кто интересуется химией и биологией.
              Найденная мною информация будет полезной
              как для учащихся, так и для взрослых."</i>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;