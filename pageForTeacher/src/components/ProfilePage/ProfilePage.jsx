import React from 'react';
import UserPostsContainer from './MyPosts/UserPostsContainer';
import ProfileInfoUser from './ProfileInfo/ProfileInfoUser';

const ProfilePage = (props) => {
  return (
    <div className="profile">
      <ProfileInfoUser profile={props.profile} />
      <UserPostsContainer />
    </div>
  )
}

export default ProfilePage;