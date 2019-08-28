import React, {Component} from 'react';
import {login} from './UserFunction'
import {Link} from 'react-router-dom';

class Login extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: ''
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onChange(e){
		this.setState({
			[e.target.name]: e.target.value 
		})
	}

	onSubmit(e){
		e.preventDefault()

		const user = {
			email: this.state.email,
			password: this.state.password
		}

		login(user).then(res => {
			if (res) {
				this.props.history.push(`/dashboard`)
			}
		})
		.catch(err => {
			console.log(err);
		})
	}
	render() {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-10 col-lg-12 col-md-9">
						<div className="card o-hidden border-0 shadow-lg my-5">
						 	<div className="card-body p-0">
							{/* Nested Row within Card Body */}
				                <div className="row">
				                  	<div className="col-lg-6 d-none d-lg-block bg-login-image" />
				                  	<div className="col-lg-6">
				                    	<div className="p-5">
				                      		<div className="text-center">
				                        		<h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
				                      		</div>
											<form className="user" noValidate onSubmit={this.onSubmit}>
												<div className="form-group">
													<label htmlFor="email">Email Address</label>
													<input type="email"  className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" name="email" placeholder="Enter Email Address..." value={this.state.email} onChange={this.onChange} />
												</div>
												<div className="form-group">
													<label htmlFor="password">Password</label>
													<input type="password" className="form-control form-control-user" id="exampleInputPassword" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.onChange} />
												</div>
												<div className="form-group">
	                          						<div className="custom-control custom-checkbox small">
	                            						<input type="checkbox" className="custom-control-input" id="customCheck" />
	                            						<label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
	                          						</div>
	                        					</div>
												<button type="submit" className="btn btn-primary btn-user btn-block">Sign in</button>
											</form>
											<hr />
											<div className="text-center">
					                        	<Link to={"/register"}className="small">Create an Account!</Link>
					                      	</div>
										</div>
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

export default Login
