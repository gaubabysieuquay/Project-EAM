import React, { Component } from 'react';
import axios from 'axios';

export default class History extends Component {
	constructor(){
		super();
		this.state = {
			assets_history: [],
			id:'',
			location:'',
			owner:'',
			time:'',
			assetsId:'',
			isLoading: true,
		}
	}
	getHistories(){
		axios.get('assets_history/display')
		.then(res => this.setState({ assets_history: res.data }))
		.catch(err => this.setState({err, isLoading: false}))
	}
	componentDidMount(){
		this.getHistories()
	}
	render() {
		return (
			<div>
		        <table className="table">
			        <thead>
			          <tr>
			            <th scope="col">#</th>
			            <th scope="col">Location</th>
			            <th scope="col">Owner</th>
			            <th scope="col">Time</th>
			          </tr>
			        </thead>
			        <tbody>
			          	{this.state.assets_history.map(assets_history =>
				            <tr key={assets_history.id}>
		                    	<td>{assets_history.id}</td>
		                    	<td>{assets_history.location}</td>
		                      	<td>{assets_history.owner}</td>
		                      	<td>{assets_history.time}</td>
	                      	</tr>
			            )}
			        </tbody>
		      </table>
	      	</div>
		);
	}
}
