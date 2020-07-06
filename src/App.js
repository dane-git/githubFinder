import React, { Component, Fragment } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

import './App.css';

class App extends Component {
	state = {
		users: [],
		loading: false,
		alert: null,
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

	//setAlert
	setAlert = (msg, type) => {
		this.setState({ alert: { msg: msg, type: type } });

		setTimeout(() => this.setState({ alert: null }), 3000);
	};

	render() {
		const { users, loading } = this.state;

		return (
			<Router>
				<div className='App'>
					<h1>GITHUB APP </h1>
					<nav className='navbar bg-primary'>
						<Navbar />
					</nav>
					<div className='container'>
						<Alert alert={this.state.alert} />
						<Switch>
							<Route
								exact
								path='/'
								render={(props) => (
									<Fragment>
										<Search
											searchUsers={this.searchUsers}
											clearUsers={this.clearUsers}
											showClear={users.length > 0 ? true : false}
											setAlert={this.setAlert}
										/>
										<Users loading={loading} users={users} />
									</Fragment>
								)}
							/>
							<Route exact path='/about' component={About} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
