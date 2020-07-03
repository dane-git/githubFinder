import React, { Component } from 'react';

import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {
	//class method:
	foobar = () => 'FOOBAR';

	render() {
		const name = 'somebody famous';

		const loading = false;
		const loaded = !loading;

		// NOTE use conditionals above the return of render
		if (loading) {
			return <h3>Loading ...</h3>;
		}

		const foo = () => 'Bar ';
		return (
			<div className='App'>
				<h1>GITHUB APP </h1>
				{loading ? (
					<h4>Loading...</h4>
				) : (
					<React.Fragment>
						<Navbar />
						<h2>Hey {name.toUpperCase()}</h2>
						<h3> method of render: {foo()}</h3>
						<h3>method of class: {this.foobar()}</h3>
						<h3>Conditional:</h3>
					</React.Fragment>
				)}
			</div>
		);
	}
}

export default App;
