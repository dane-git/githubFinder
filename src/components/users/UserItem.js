import React, { Component } from 'react';

// Adding state to a class based component, a few options:
// 1. constructor  function => function that runs win the component runs
class UserItem extends Component {
	state = {
		id: 'id',
		login: 'mojombo',
		avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
		html_url: 'https://github.com/mojombo',
	};

	render() {
		const { avatar_url, login, html_url } = this.state;
		return (
			<div className='card text-center'>
				<img
					src={avatar_url}
					className='round-img'
					alt='user'
					style={{ width: '60px' }}
				/>
				<h3>{login}</h3>
				<a href={html_url} className='btn btn-dark btn-sm my-1'>
					more
				</a>
			</div>
		);
	}
}

export default UserItem;

// EXAMPLE RESPONSE FROM : 'https://api.github.com/users' -> array first element ->
// avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4"
// events_url: "https://api.github.com/users/mojombo/events{/privacy}"
// followers_url: "https://api.github.com/users/mojombo/followers"
// following_url: "https://api.github.com/users/mojombo/following{/other_user}"
// gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}"
// gravatar_id: ""
// html_url: "https://github.com/mojombo"
// id: 1
// login: "mojombo"
// node_id: "MDQ6VXNlcjE="
// organizations_url: "https://api.github.com/users/mojombo/orgs"
// received_events_url: "https://api.github.com/users/mojombo/received_events"
// repos_url: "https://api.github.com/users/mojombo/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/mojombo/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/mojombo/subscriptions"
// type: "User"
// url: "https://api.github.com/users/mojombo"
