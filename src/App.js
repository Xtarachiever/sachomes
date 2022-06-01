import React, { useEffect } from 'react';
import 'animate.css';
import './App.css';
import Main from './components/pages/Main';
import Login from './components/pages/Login/Login';
import {Routes, Route } from 'react-router-dom';
import 'aos/dist/aos.css';
import Dashboard from './components/pages/Dashboard/Dashboard';
import NewHouses from './components/pages/Dashboard/NewHouses/NewHouses';

const App = () => {
  let AOS;
  useEffect(() => {
    const AOS = require('aos');
    AOS.init({
      once: false,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });
  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/dashboard/addHouses' element={<NewHouses/>}/>
      </Routes>
    </>
  );
};

export default App;
