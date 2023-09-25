import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter as Router,Routes,Route,Link,Navlink,Switch} from 'react-router-dom';
import './App';
import Home from './Components/Home1';
import About from './Components/About1'
import Menu from './Components/About1';
import Notfound from './Components/Notfound1';

export default function App()({
  return(
  <Router>
    <div>
      <Routes> 
        <Route exact path="/"><Home/></Route>
        <Route exact path="/about"><About/></Route>
        <Route exact path="menu/"><Menu/></Route>
        <Route exact path="/contact"><Contact/></Route>
        <Route exact path="/notfound"><Notfound/></Route>
      </Routes>
    </div>
)}
  
  </Router> 
);
