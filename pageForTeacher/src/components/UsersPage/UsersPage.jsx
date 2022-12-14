import React from 'react';
import axios from 'axios';
import userPhoto from '../../assets/img/NotAvatarPhotos.png';
import style from './UsersPage.module.css';

/**Даная компонента служит для практики подключения к серваку через axios */
const UsersPage = (usersprops) => {
  let getUsers = () => {
    if (usersprops.users.length === 0) {
      // Запрос на сервер
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          usersprops.setUsers(response.data.items);
        })
    }
  }

  return (
    <div className={style.list}>
      <h2>Пользователи</h2>
      <button onClick={getUsers}>Посмотреть пользователей</button>
      {
        props.users.map(user => <div className={style.user} key={user.id}>
          <div className={style.view}>
            <img src={user.photos.small != null
              ? user.photos.small
              : userPhoto}
              alt="icon">
            </img>
            <h4>{user.name}</h4>
          </div>
          <div className={style.description}>
            <p><b>Статус:</b> {user.status}</p>
            <p><b>Подписчик:</b> {user.followed}</p>
          </div>
          <div className={style.buttons}>
            {user.followed
              ? <button onClick={() => { usersprops.unfollow(user.id) }}>Отписаться</button>
              : <button onClick={() => { usersprops.follow(user.id) }}>Подписаться</button>
            }
          </div>
        </div>)
      }
    </div>
  )
}

export default UsersPage;