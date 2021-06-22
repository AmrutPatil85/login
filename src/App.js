import React from 'react';
import './App.css';
import Login1 from "./Login1";


import axios from 'axios';

import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link, useHistory,withRouter } from 'react-router-dom';
import Dashboard from "./Dashboard";
function App() {
 
  
  return (
    <Router>
      
       
        <br /> 
        <Switch>
          <Route exact path='/' component={Login1} />
          
          <Route path='/Dashboard' component={Dashboard} />
        </Switch>
    
    </Router>
  );

 
}

export default App;
