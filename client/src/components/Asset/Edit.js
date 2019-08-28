import React, { Component } from 'react';
import axios from "axios";


export class Edit extends Component {
	constructor(){
		super()
		this.state = {
			barcode_id: '',
			barcode:'',
			name:'',
			quantity:'',
			price:'',
			unit:'',
			note:''
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

		const asset = {
			barcode_id: this.state.barcode_id,
			barcode: this.state.barcode,
			name: this.state.name,
			quantity: this.state.quantity,
			price: this.state.price,
			unit: this.state.unit,
			note: this.state.note,
		}
		axios.put("/assets/update/" + this.props.match.params.id, asset)
		.then(res => {
			console.log(res);
	      this.props.history.push(`/display`)
	    });
	}
	componentDidMount() {
		axios.get('/assets/update/' + this.props.match.params.id)
		.then(res => {
			console.log(res);
			this.setState({
				barcode_id: res.data.barcode_id,
				barcode: res.data.barcode,
				name: res.data.name,
				quantity: res.data.quantity,
				price: res.data.price,
				unit: res.data.unit,
				note: res.data.note
			});
		})
		.catch(err => {
			console.log(err);
		})
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6 mt-5 mx-auto">
						<form noValidate onSubmit={this.onSubmit}>
							<h1 className="h3 mb-3 font-weight-normal">Update</h1>
							<div className="form-group">
								<label htmlFor="barcode">Asset ID</label>
								<input type="text" className="form-control" name="barcode_id" placeholder="Enter Asset ID" value={this.state.barcode_id} onChange={this.onChange} />
							</div>
							<div className="form-group">
								<label htmlFor="name">Name</label>
								<input type="text" className="form-control" name="name" placeholder="Enter name" value={this.state.name} onChange={this.onChange} />
							</div>
							<div className="form-group">
								<label htmlFor="quantity">Quantity</label>
								<input type="text" className="form-control" name="quantity" placeholder="Enter quantity" value={this.state.quantity} onChange={this.onChange} />
							</div>
							<div className="form-group">
								<label htmlFor="price">Price</label>
								<input type="text" className="form-control" name="price" placeholder="Enter price" value={this.state.price} onChange={this.onChange} />
							</div>
							<div className="form-group">
								<label htmlFor="unit">Unit</label>
								<input type="text" className="form-control" name="unit" placeholder="Enter unit" value={this.state.unit} onChange={this.onChange} />
							</div>
							<div className="form-group">
					            <label htmlFor="note">Note</label>
					            <textarea className="form-control" id="note" rows={3} value={this.state.onChange} />
					         </div>
							<button type="submit" className="btn btn-primary">Update</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
export default Edit