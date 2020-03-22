import React, {Component} from 'react';
import axios from 'axios';

export default class createcategory extends Component {

	constructor() {
		super();

		this.state = {
			name : "",
			status : "Active",
		}

		this.getCategoryName = this.getCategoryName.bind(this);
		this.getStatusValue = this.getStatusValue.bind(this);
		this.createCategory = this.createCategory.bind(this);
	}

	getCategoryName(event) {
		this.setState ({
			name : event.target.value,
		})
	}

	getStatusValue(event) {
		this.setState ({
			status : event.target.value,
		})
	}

	createCategory(event) {
		event.preventDefault();

		if(this.state.name === "") {
			alert("Field is empty");
		}
		else {
			const category_detail = {
				name : this.state.name,
				status : this.state.status,
			}

			axios.post("/admin/addnewCategory",category_detail)
			.then(res => {
				alert('Category Added');
			})
			.catch(err => {
				console.log(err);
			});

			this.setState ({
				name : "",
				status : "",
			})
		}
	}

	render() {
		return (
			<div>
				<center><h3>Create New Category</h3></center>
				<form onSubmit={this.createCategory}>
					<div className="form-group">
						<label>Category Name : </label>
						<input type="text" className="form-control"
						placeholder="Enter Category Name"
						value={this.state.name}
						onChange={this.getCategoryName} />
					</div>

					<div className="form-group">
						<label>Status :</label>
						<select required className='form-control'
						value={this.state.status}
						onChange={this.getStatusValue}>
							<option value="Active">Active</option>
							<option value="InActive">InActive</option>
						</select>
					</div>

					<div className="form-group">
						<input type="submit" value="Create Category" className="btn btn-success" />
					</div>
				</form>
			</div>
		)
	}

}