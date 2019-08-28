import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Modal from "../Layout/Modal";

class Asset extends Component {
	constructor(){
		super();
		this.state = {
			assets: [],
			id:'',
			barcode_id: '',
			name:'',
			quantity:'',
			price:'',
			unit:'',
			created:'',
			note:'',
			isLoading: true,
		}
		this.onDelete = this.onDelete.bind(this);
	}

	getAssets(){
		axios.get('assets/display')
		.then(res => this.setState({ assets: res.data }))
		.catch(err => this.setState({err, isLoading: false}))
	}
	onDelete = (id) => {
    	axios.delete(`assets/delete/${id}`)
    	.then(res => {
    		//console.log(res);
    		//console.log(res.data);
    	})
    	.catch(err => {
    		console.log(err);
    	})
    }
	componentDidMount(){
		this.getAssets()
	}
	render() {
		return (
			<div className="container">
				<div className="jumbotron mt-5">
					<div className="col-sm-8 mx-auto">
						<h1 className="text-center">ASSETS</h1>
					</div>
					<table className="table col-md-6 mx-auto">
						<thead>
							<tr>
	                        	<th width="100%" colSpan="5"><Link to="/add">Add item</Link></th>
	                    	</tr>
		                  	<tr>
		                  		<th>Barcode ID</th>
								<th>Name</th>
								<th>Quantity</th>
								<th>Price</th>
								<th>Unit</th>
								<th>Note</th>
		                  	</tr>
	                  	</thead>
	                  	<tbody>
		                    {this.state.assets.map(asset =>
		                    <tr key={asset.id}>
		                    	<td>{asset.barcode_id}</td>
		                      	<td>{asset.name}</td>
		                      	<td>{asset.quantity}</td>
		                      	<td>{asset.price}</td>
		                      	<td>{asset.unit}</td>
		                      	<td>{asset.note}</td>
		                      	<td>
					            	<Link to={"/update/" + asset.id}  className="btn btn-primary">Edit</Link>
					            	&nbsp;
					            	<button type="submit" className="btn btn-danger" onClick={() => this.onDelete(asset.id)}>Delete</button>
					            	<Modal  />
					          	</td>
		                    </tr>
		                    )}
	                  	</tbody>
					</table>
				</div>
				</div>

		);
	}
}
export default Asset
