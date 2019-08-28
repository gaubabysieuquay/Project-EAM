import React, {Component} from 'react';
import {register} from './UserFunction';
import {Link} from 'react-router-dom';

class Register extends Component {
	constructor() {
		super()
		this.state = {
			first_name:'',
			last_name:'',
			email: '',
			password: ''
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onChange(e){
		this.setState({
			[e.target.name]: e.target.value 
		});
	}

	onSubmit(e){
		e.preventDefault()

		const user = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			password: this.state.password
		}

		register(user).then(res => {
			this.props.history.push(`/login`)
		})
	}
	render() {
		return (
			<div className="container">
				<div className="card o-hidden border-0 shadow-lg my-5">
					<div className="card-body p-0">
	            	{/* Nested Row within Card Body */}
						<div className="row">
							<div className="col-lg-5 d-none d-lg-block bg-register-image" />
			              	<div className="col-lg-7">
			                	<div className="p-5">
				                  	<div className="text-center">
					                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
				                  	</div>
									<form className="user" noValidate onSubmit={this.onSubmit}>
										<div className="form-group">
											<label htmlFor="first_name">First name</label>
											<input type="text" className="form-control form-control-user" id="exampleFirstName" name="first_name" placeholder="First name" value={this.state.first_name} onChange={this.onChange} />
										</div>
										<div className="form-group">
											<label htmlFor="last_name">Last name</label>
											<input type="text" className="form-control form-control-user" id="exampleLastName" name="last_name" placeholder="Enter last name" value={this.state.last_name} onChange={this.onChange} />
										</div>
										<div className="form-group">
											<label htmlFor="email">Email Address</label>
											<input type="email" className="form-control form-control-user" id="exampleInputEmail" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.onChange} />
										</div>
										<div className="form-group">
											<label htmlFor="password">Password</label>
											<input type="password" className="form-control form-control-user" id="exampleInputPassword" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.onChange} />
										</div>
										<button type="submit" className="btn btn-primary btn-user btn-block">Register</button>
									</form>
									<hr />
									<div className="text-center">
				                    	<Link to={"/login"} className="small">Already have an account? Login!</Link>
				                  	</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Register
