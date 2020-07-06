import React, { Component } from 'react';

import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';

import './App.css';

class App extends Component {
	state = {
		users: [],
		loading: false,
	};

	// NOTE: in class App extends Component {
	//SEARCH GITHUB USERS
	searchUsers = async (text) => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client)secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);

		let resReport = {
			url: res.config.url,
			headers: res.config.headers,
			status: res.status,
			statusText: res.statusText,
			cache: res.headers,
			readyState: res.request.readyState,
		};

		this.setState({ loading: false, users: res.data.items });

		console.log(res);
		console.log(resReport);
		console.log(res.data);
	};

	//Clear users from state
	clearUsers = () => this.setState({ users: [], loading: false });

	render() {
		const { users, loading } = this.state;
		return (
			<div className='App'>
				<h1>GITHUB APP </h1>
				<nav className='navbar bg-primary'>
					<Navbar />
				</nav>
				<div className='container'>
					<Search
						searchUsers={this.searchUsers}
						clearUsers={this.clearUsers}
						showClear={users.length > 0 ? true : false}
					/>
					<Users loading={loading} users={users} />
				</div>
			</div>
		);
	}
}

export default App;
