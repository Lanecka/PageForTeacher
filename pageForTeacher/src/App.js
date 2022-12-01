import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import ProfilePage from './components/ProfilePage/ProfilePage';
import DialogsPageContainer from './components/DialogsPage/DialogPageContainer';
// import Chemistry from './components/Chemistry/Chemistry';
// import Biology from './components/Biology/Biology';
// import Exams from './components/Exams/Exams';
// import WorkOfStudents from './components/WorkOfStudents/WorkOfStudents';
// import Extracurrical from './components/Extracurrical/Extracurrical';
// import Documents from './components/Documents/Documents';
// import Photos from './components/Photos/Photos';
// import Movies from './components/Movies/Movies';
import NotFound from './components/NotFoundPage/NotFounPage';
import './App.css';

function App (props) {
  return (
      <div className="App-wrapper">
        <Header />
        <Navigation />
        <div className="App-wrapper__content">
          <Routes>
            <Route path='/home' element={<ProfilePage store={props.store} />} />
            {/* <Route path='/chemistry' element={<Chemistry />} />
            <Route path='/biology' element={<Biology />} />
            <Route path='/exams' element={<Exams />} />
            <Route path='/workOfStudents' element={<WorkOfStudents />} />
            <Route path='/extracurrical' element={<Extracurrical />} />
            <Route path='/documents' element={<Documents />} />
            <Route path='/photos' element={<Photos />} />
            <Route path='/movies' element={<Movies />} /> */}
            <Route path='/dialogs/*' element={<DialogsPageContainer store={props.store} />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;