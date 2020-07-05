import React, { Component } from 'react';

import axios from 'axios';

import Navbar from './components/layout/Navbar';
// import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
	// lets move the state up for users so that other dependent elements can access it.
	// we might use context or redux to do this. but since we dont have a centralized store
	//  or anything like that, the next best thing is to put it in App.js, that way you can
	//  easily send state down to components through props.

	//lifecycle method componentDidMount()
	// we will use this method to make our api call
	componentDidMount() {
		axios
			.get('https://api.github.com/users')
			.then((response) => console.log(response.data));
	}

	render() {
		return (
			<div className='App'>
				<h1>GITHUB APP </h1>
				<nav className='navbar bg-primary'>
					<Navbar />
				</nav>
				<div className='container'>
					<Users />
				</div>
			</div>
		);
	}
}

export default App;
