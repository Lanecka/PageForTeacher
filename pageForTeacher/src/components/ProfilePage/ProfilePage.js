import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import style from './ProfilePage.module.css';

const ProfilePage = (props) => {
  return (
    <div className="profile">
      <ProfileInfo />
      <MyPostsContainer store={props.store}/>
    </div>
  )
}

export default ProfilePage;