import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./Components/login.component";
import AdminNavBar from "./Components/adminnavbar.component";
import CreateCategory from "./Components/Admin/createCategory.component";

class App extends Component {

	constructor() {
		super();

		this.state ={
			isLogined : false,
		}

		this.changeLogin = this.changeLogin.bind(this);
	}


  	componentDidMount(event)
  	{
    	var n = sessionStorage.getItem('name')
	    if(n != null)
	    {
	      this.setState ({ 
	      	isLogined : true, 
	      })
	    }
  	}

	changeLogin(event) {
		this.setState ({
			isLogined : true,
		})
	}

	render() {
		return (
			this.state.isLogined ?
			<Router>
				<div className="container">
					<AdminNavBar />
					<br />
					<Route path="/" exact component={CreateCategory} />
				</div>
			</Router>
		    : <Login onSubmit={this.changeLogin}/>
		)
	}
}

export default App;
