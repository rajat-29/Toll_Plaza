import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class adminnavbar extends Component {

	render() {
		return (
			<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
			<Link to='/' className='navbar-brand'>Toll Management</Link>
				<div className='collpase navbar-collapse'>
					<ul className ='navbar-nav mr-auto'>

						<NavDropdown title="Categories" id="collasible-nav-dropdown">
					        <NavDropdown.Item href="/">Add Category</NavDropdown.Item>
					        <NavDropdown.Item href="#action/3.2">Manage Category</NavDropdown.Item>
      					</NavDropdown>

      					<NavDropdown title="Staff" id="collasible-nav-dropdown">
					        <NavDropdown.Item href="#action/3.1">Add Staff</NavDropdown.Item>
					        <NavDropdown.Item href="#action/3.2">Manage Staff </NavDropdown.Item>
      					</NavDropdown>

      					<NavDropdown title="Pass" id="collasible-nav-dropdown">
					        <NavDropdown.Item href="#action/3.1">Add Pass</NavDropdown.Item>
					        <NavDropdown.Item href="#action/3.2">Manage Pass</NavDropdown.Item>
      					</NavDropdown>

      					<NavDropdown title="Pass Reports" id="collasible-nav-dropdown">
					        <NavDropdown.Item href="#action/3.1">B/W Dates</NavDropdown.Item>
					        <NavDropdown.Item href="#action/3.2">Pass Count</NavDropdown.Item>
					        <NavDropdown.Item href="#action/3.2">Sales</NavDropdown.Item>
      					</NavDropdown>

      					<NavDropdown title="Receipt Reports" id="collasible-nav-dropdown">
					        <NavDropdown.Item href="#action/3.1">Manage Receipts</NavDropdown.Item>
					        <NavDropdown.Item href="#action/3.2">Receipt Count</NavDropdown.Item>
					        <NavDropdown.Item href="#action/3.2">Sales</NavDropdown.Item>
      					</NavDropdown>

      					<li className='navbar-item'>
							<Link to='/create' className='nav-link'>Change Password</Link>
						</li>

						<li className='navbar-item'>
							<Link to='/user' className='nav-link'>Logout</Link>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}
