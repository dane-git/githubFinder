// this was generated using extension ES7 React..
//  rce [ENTER] -> creates a class based component that exports at the bottom.

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//NOTE: using Link here will save the state within the application.
const Navbar = ({ icon, title }) => {
	return (
		<div>
			<h1>
				<i className={icon} />
				{title}
			</h1>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</div>
	);
};

Navbar.defaultProps = {
	title: 'GitHub Finder',
	icon: 'fab fa-github',
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default Navbar;
