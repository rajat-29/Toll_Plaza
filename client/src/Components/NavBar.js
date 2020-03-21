import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

class NavBar extends Component {

	render() {
		return (
			<div>
				<div className="navbar navbar-inverse set-radius-zero">
					<div className="container">
						<div className="right-div">
							<a className="btn btn-danger">Welcome</a>
						</div>
					</div>
				</div>

				<section className="menu-section">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="navbar-collapse collapse">
									<ul className="nav navbar-nav navbar-right">
										<li>
											<a className="dropdown-toggle" data-toggle="dropdown">Categories</a>
											<ul className="dropdown-menu">
												<li role="presentation"><a role="menuitem" tabIndex="-1">Add Category</a></li>
											</ul>
										</li>
									</ul>

								</div>
							</div>
						</div>
					</div>
				</section>

			</div>
		)
	}
}

export default NavBar;