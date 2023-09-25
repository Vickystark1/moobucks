import React  from 'react';
import  ReactDOM  from 'react-dom';
import {BrowserRouter as Router,Route,Link,NavLink, Routes} from 'react-router-dom';
import Home from './Components/Home1'
import About from './Components/About1'
import Menu from './Components/Menu1'
import Contact from './Components/Contact1'
import Notfound from './Components/Notfound'
import { useRef, useState } from 'react';
const routing = (
  <Router>
    <div>
      <Routes>
        <Route exact path="/" element={Home}/>
        <Route path="/About1" element={About}/>
        <Route path="/Menu1" element={Menu}/>
        <Route path="/Contact1" element={Contact}/>
        <Route element={Notfound}/>
      </Routes>
    </div>
  </Router>
);
export default routing;


ReactDOM.render(routing,document.getElementById("root"));
