import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Login from './Components/Login';
import NavBar from './Components/NavBar';

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
			<div>
			<NavBar />
		      
		    </div>
		    : <Login onSubmit={this.changeLogin}/>
		)
	}
}

export default App;
