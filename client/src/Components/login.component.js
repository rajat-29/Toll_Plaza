import React, {Component} from 'react';
import axios from 'axios';
import '../styles/style.css';

class Login extends Component {

	constructor() {
		super();

		this.state = {
			user_email : "",
			user_password : "",
		}

		this.getUserEmail = this.getUserEmail.bind(this);
		this.getUserPassword = this.getUserPassword.bind(this);
		this.checkLogin = this.checkLogin.bind(this);
	}

	getUserEmail(event) {
		this.setState ({
			user_email : event.target.value,
		})
	}

	getUserPassword(event) {
		this.setState ({
			user_password : event.target.value,
		})
	}

	checkLogin(event) {

		const user_details = {
			name : this.state.user_email,
			password : this.state.user_password,
		}

		axios.post('/login/checkLogin',user_details)
		.then(res => {
			if(res.data.isLogin === 1)
			{
				sessionStorage.setItem("name", this.state.user_email);
	       		this.props.onSubmit();
			}
			else
			{
				alert("Wrong Email Id/Password");
			}
		})
		.catch(err => {
			console.log(err);
		});
	}

	render() {
		return (
			<div className='content-wrapper'>
				<div className='container'>
					<div className="row pad-botm">
						<div className="col-md-12">
							<h1 className="header-line">Login Here</h1>
						</div>
					</div>

					<div className='row'>
						<div className='col-md-6 col-sm-6 col-xs-12 col-md-offset-3'>
							<div className='panel panel-info'>
								<div className='panel-heading'>
									Login
								</div>
								<div className="panel-body">
									<div className="form-group">
										<label>Email : </label>
										<input className="form-control" type="text"
										value={this.state.user_email}
										onChange={this.getUserEmail} />
									</div>
									<div className="form-group">
										<label>Password : </label>
										<input className="form-control" type="password"
										value={this.state.user_password}
										onChange={this.getUserPassword} />
									</div>
									<div className="form-group">
										<button className="btn btn-success"
										onClick={this.checkLogin}>Login</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Login;