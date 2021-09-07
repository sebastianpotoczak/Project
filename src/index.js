import React from 'react';
import ReactDOM from 'react-dom';
import 'reset-css';
import './scss/main.scss';
import Header from './js/Header';
import Nav from './js/Nav'
import Main from './js/Main'
import AboutMe from './js/AboutMe'


ReactDOM.render(
    <>
      <Nav />
      <Header />     
      <Main />
      <AboutMe />
    </>
  ,
  document.getElementById('root')
);

