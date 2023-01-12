import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../../assets/img/NotAvatarPhotos.png';
import style from './Users.module.css';

const Users = (userprops) => {
  /** Кол-во страниц = общее число пользователей / размер страницы */
  let pagesCount = Math.ceil(userprops.totalUsersCount / userprops.pageSize)

  /** Отображение количество страниц */
  // Стандартное отображение всех страниц, если их слишком много, то у нас кол-во страниц выйдет за границу окна
  // let pages = [];
  // for (let i = 1; i <= pagesCount; i++) {
  //   pages.push(i);
  // }
  // Создаем карусель страниц, для удобного отображения
  let pages = [1, userprops.currentPage - 1, userprops.currentPage, userprops.currentPage + 1, pagesCount]
  if (userprops.currentPage < 4) {
    pages = [1, 2, 3, 4, pagesCount]
  }
  if (userprops.currentPage > pagesCount - 2) {
    pages = [1, pagesCount - 3, pagesCount - 2, pagesCount - 1, pagesCount]
  }

  return (
    <div className={style.list}>
      <h2>Пользователи</h2>
      <div>
        {
          pages.map(p => {
            return (
              //   <span
              //     onClick={() => { this.onPageChanged(p) }}
              //     className={this.props.currentPage === p && style.selected}>
              //     {p}
              //   </span>

              <span onClick={() => userprops.onPageChanged(p)}
                className={userprops.currentPage === p && style.selected}>
                {p === pagesCount && userprops.currentPage < pagesCount - 2 && ' ... '}
                {p}
                {p === 1 && userprops.currentPage > 3 && ' ... '}
              </span>
            )
          })
        }
      </div>
      {
        userprops.users.map(user => <div className={style.user} key={user.id}>
          <NavLink to={'/profile/' + user.id} className={style.view}>
            <div >
              <img src={user.photos.small != null
                ? user.photos.small
                : userPhoto}
                alt="icon">
              </img>
              <h4>{user.name}</h4>
            </div>
          </NavLink>
          <div className={style.description}>
            <p><b>Статус:</b> {user.status}</p>
            <p><b>Подписчик:</b> {user.followed}</p>
          </div>
          <div className={style.buttons}>
            {user.followed
              ? <button onClick={() => { userprops.unFollow(user.id) }}>Отписаться</button>
              : <button onClick={() => { userprops.follow(user.id) }}>Подписаться</button>
            }
          </div>
        </div>)
      }
    </div >
  )
}

export default Users;