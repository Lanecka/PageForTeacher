import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/common/Navigation/Navigation';
import DialogsPageContainer from './components/DialogsPage/DialogPageContainer';
// import Chemistry from './components/Chemistry/Chemistry';
// import Biology from './components/Biology/Biology';
// import Exams from './components/Exams/Exams';
// import WorkOfStudents from './components/WorkOfStudents/WorkOfStudents';
// import Extracurrical from './components/Extracurrical/Extracurrical';
// import Documents from './components/Documents/Documents';
// import Photos from './components/Photos/Photos';
// import Movies from './components/Movies/Movies';
import UsersPageContainer from './components/UsersPage/UsersPageContainer';
import NotFound from './components/NotFoundPage/NotFounPage';
import ProfilePageContainer from './components/ProfilePage/ProfilePageContainer';
import TeacherPage from './components/TeacherPage/TeacherPage';
import './App.css';
import HeaderContainer from './components/common/Header/HeaderContainer';

function App (props) {
  return (
      <div className="App-wrapper">
        <HeaderContainer />
        <Navigation />
        <div className="App-wrapper__content">
          <Routes>
            <Route path='/myPage' element={<TeacherPage store={props.store} />} />
            <Route path='/profile' element={<ProfilePageContainer store={props.store} />}> 
              <Route path=':userId' element={<ProfilePageContainer />} />
            </Route>
            {/* <Route path='/chemistry' element={<Chemistry />} />
            <Route path='/biology' element={<Biology />} />
            <Route path='/exams' element={<Exams />} />
            <Route path='/workOfStudents' element={<WorkOfStudents />} />
            <Route path='/extracurrical' element={<Extracurrical />} />
            <Route path='/documents' element={<Documents />} />
            <Route path='/photos' element={<Photos />} />
            <Route path='/movies' element={<Movies />} /> */}
            <Route path='/dialogs/*' element={<DialogsPageContainer store={props.store} />} />
            <Route path='/users' element={<UsersPageContainer />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
