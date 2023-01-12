import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const TeacherPage = (props) => {
  return (
    <div className="profile">
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  )
}

export default TeacherPage;