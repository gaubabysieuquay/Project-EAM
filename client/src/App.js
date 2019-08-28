import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/User/Login'
import Register from './components/User/Register'
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Navbar/>
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <div className="container">
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login}/> 
                    
            </div>
          </div>
        </Router>
        
    );
  }
}

export default App;
