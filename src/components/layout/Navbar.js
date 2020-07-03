// this was generated using extension ES7 React..
//  rce [ENTER] -> creates a class based component that exports at the bottom.

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
	static defaultProps = {
		title: 'GitHub Finder',
		icon: 'fab fa-github',
	};

	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
	};
	render() {
		return (
			<div>
				<h1>
					<i className={this.props.icon} />
					{this.props.title}
				</h1>
			</div>
		);
	}
	// this was generated using extension ES7 React..
	//  rce [ENTER]
}

export default Navbar;
