import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import jwt_decode from 'jwt-decode'

export default class Topbar extends Component {
	constructor() {
		super()
		this.state = {
			first_name:'',
			last_name:'',
			email:''
		}
	}
	componentDidMount(){
		const token = localStorage.usertoken
		const decoded = jwt_decode(token)
		this.setState({
			first_name: decoded.first_name,
			last_name: decoded.last_name,
			email: decoded.email 
		});
	}
	logOut(e){
		e.preventDefault()
		localStorage.removeItem('usertoken')
		this.props.history.push(`/`)
	}
	render() {
		return (
			<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
				 {/* Sidebar Toggle (Topbar) */}
		        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
		          <i className="fa fa-bars" />
		        </button>
		        {/* Topbar Search */}
		        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
		          <div className="input-group">
		            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
		            <div className="input-group-append">
		              <button className="btn btn-primary" type="button">
		                <i className="fas fa-search fa-sm" />
		              </button>
		            </div>
		          </div>
		        </form>
		        {/* Topbar Navbar */}
		      <ul className="navbar-nav ml-auto">
		        
		        {/* Nav Item - User Information */}
		        <li className="nav-item dropdown no-arrow">
		          <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		            <span className="mr-2 d-none d-lg-inline text-gray-600 small">{this.state.last_name}</span>
		            <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
		          </a>
		          {/* Dropdown - User Information */}
		          <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
		            <Link to="/profile" className="dropdown-item" href="#">
		              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
		              Profile
		            </Link>
		            <a className="dropdown-item" href="#">
		              <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
		              Settings
		            </a>
		            <a className="dropdown-item" href="#">
		              <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
		              Activity Log
		            </a>
		            <div className="dropdown-divider" />
		            <a onClick={this.logOut.bind(this)} className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
		              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
		              Logout
		            </a>
		          </div>
		        </li>
		      </ul>
	       </nav>
		);
	}
}
