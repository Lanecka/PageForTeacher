import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import userPhoto from '../../../assets/img/NotAvatarPhotos.png'
import style from './ProfileInfo.module.css';

const ProfileInfoUser = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={style.user} id={props.profile.userId}>
      <div>
        <div className={style.view}>
          <img
            className={style.img}
            src={props.profile.photos.large != null
              ? props.profile.photos.large
              : userPhoto
            }
            alt="profile photo" />

          <div className={style.title}>
            <h3 className={style.fulName}>
              {props.profile.fullName}
            </h3>
            <div className="user__about">
              Мой статус: "{props.profile.aboutMe}"
            </div>
          </div>
        </div>

        <div className="contacts">
          <b>Мои контакты: </b>
          <div> <a href={props.profile.contacts.facebook}>facebook</a> </div>
          <div>website: {props.profile.contacts.website}</div>

          <div>vk
          </div>

          <div>twitter: {props.profile.contacts.twitter}</div>

          <div>instagram: {props.profile.contacts.instagram}</div>
          <div><a href={props.profile.contacts.youtube}>youtube</a>  </div>
          <div>github: {props.profile.contacts.github}</div>
          <div>mainLink: {props.profile.contacts.mainLink}</div>
        </div>
        <div className="job">
          <b>Работа: </b> {!props.profile.lookingForAJob ? 'Не работаю' : props.profile.lookingForAJobDescription}
        </div>
      </div>
    </div>
  )
}

export default ProfileInfoUser;