import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Sidebar from "./Layout/Sidebar";
import Topbar from "./Layout/Topbar";

import Add from "../components/Asset/Add"
import Asset from "../components/Asset/Asset"
import Edit from "../components/Asset/Edit"
import Profile from "../components/User/Profile"
import Modal from "../components/Layout/Modal";


export default class Dashboard extends Component {
	render() {
		return (
			<Router>
			<div id="wrapper">
				<Sidebar />
				<div id="content-wrapper" className="d-flex flex-column">
					<Topbar />
					<div className="container-fluid">
		              	<Route exact path="/add" component={Add}/>
              			<Route exact path="/display" component={Asset}/>                        
              			<Route exact path="/update/:id" component={Edit}/> 
              			<Route exact path="/profile" component={Profile}/>
              			<Route exact path="/display_stock" component={Modal}/> 
		            </div> 
      			</div>
			</div>
			</Router>
		);
	}
}
