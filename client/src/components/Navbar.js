import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';


class Navbar extends Component {
	logOut(e){
		e.preventDefault()
		localStorage.removeItem('usertoken')
		this.props.history.push('/')
	}
	render() {
		const loginRegLink = (
	        <ul className="nav navbar-nav">
		        <li className="nav-item">
		        	<Link to="/login" className="nav-link">Login</Link>
		        </li>
		        <li className="nav-item">
		        	<Link to="/register" className="nav-link">Register</Link>
		        </li>
	        </ul>

		)

		const userLink = (
	        <ul className="nav navbar-nav">
		        <li className="nav-item">
		        	<Link to="/dashboard" className="nav-link">Dashboard</Link>
		        </li>
		        <li className="nav-item">
		        	<button onClick={this.logOut.bind(this)} className="nav-link">Logout</button>
		        </li>
	        </ul>
		)
		return (
			<nav className="navbar navbar-light bg-faded">
				<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar1" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggle-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-md-center" id="navbar1">		
					<ul className="nav navbar-nav">
						<li className="nav-item active">
							<Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
						</li>
					</ul>
					{localStorage.usertoken ? userLink : loginRegLink}
				</div>
			</nav>
		);
	}
}

export default withRouter(Navbar)

