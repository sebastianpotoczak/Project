import React from 'react';
import ReactDOM from 'react-dom';
import 'reset-css';
import './scss/main.scss';
import Header from './component/Header';
import Nav from './component/Nav'
import Main from './component/Main'
import AboutMe from './component/AboutMe'
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import TittleApp from './component/TitleApp';
import MyApp from './component/DatePicker';
import Calendar from './component/Calendary';
import Footer from './component/Footer';
import Service from './component/Service';


const Index = () => {
  return(
    <>
    <Nav />
    <Header />     
    <Main />
    <AboutMe />
    <Footer />
  </>
  )
}
const App = () => {
  return (
    <>
      <Nav /> 
      <Calendar />
    
  </>
  )
}


const ReactRouter = () => {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route exact path='/termin' component={App} />
     
        </Switch>     
    </Router>
  )
}
ReactDOM.render(
  <ReactRouter />
  ,
  document.getElementById('root')
);





