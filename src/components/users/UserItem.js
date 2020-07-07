import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
	return (
		<div className='card text-center'>
			<img
				src={avatar_url}
				className='round-img'
				alt='user'
				style={{ width: '60px' }}
			/>
			<h3>{login}</h3>
			<Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
				more
			</Link>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};
export default UserItem;

// EXAMPLE RESPONSE FROM : 'https://api.github.com/users' -> array first element ->
// events_url: "https://api.github.com/users/mojombo/events{/privacy}"
// followers_url: "https://api.github.com/users/mojombo/followers"
// following_url: "https://api.github.com/users/mojombo/following{/other_user}"
// gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}"
// gravatar_id: ""

// id: 1
// login: "mojombo"
// avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4"
// html_url: "https://github.com/mojombo"

// node_id: "MDQ6VXNlcjE="
// organizations_url: "https://api.github.com/users/mojombo/orgs"
// received_events_url: "https://api.github.com/users/mojombo/received_events"
// repos_url: "https://api.github.com/users/mojombo/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/mojombo/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/mojombo/subscriptions"
// type: "User"
// url: "https://api.github.com/users/mojombo"

// events_url: 'https://api.github.com/users/defunkt/events{/privacy}';
// followers_url: 'https://api.github.com/users/defunkt/followers';
// following_url: 'https://api.github.com/users/defunkt/following{/other_user}';
// gists_url: 'https://api.github.com/users/defunkt/gists{/gist_id}';
// gravatar_id: '';

// id: 2;
// login: 'defunkt';
// avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4';
// html_url: 'https://github.com/defunkt';

// node_id: 'MDQ6VXNlcjI=';
// organizations_url: 'https://api.github.com/users/defunkt/orgs';
// received_events_url: 'https://api.github.com/users/defunkt/received_events';
// repos_url: 'https://api.github.com/users/defunkt/repos';
// site_admin: false;
// starred_url: 'https://api.github.com/users/defunkt/starred{/owner}{/repo}';
// subscriptions_url: 'https://api.github.com/users/defunkt/subscriptions';
// type: 'User';
// url: 'https://api.github.com/users/defunkt';

// events_url: "https://api.github.com/users/pjhyett/events{/privacy}"
// followers_url: "https://api.github.com/users/pjhyett/followers"
// following_url: "https://api.github.com/users/pjhyett/following{/other_user}"
// gists_url: "https://api.github.com/users/pjhyett/gists{/gist_id}"
// gravatar_id: ""

// id: 3
// login: "pjhyett"
// avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4"
// html_url: "https://github.com/pjhyett"

// node_id: "MDQ6VXNlcjM="
// organizations_url: "https://api.github.com/users/pjhyett/orgs"
// received_events_url: "https://api.github.com/users/pjhyett/received_events"
// repos_url: "https://api.github.com/users/pjhyett/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/pjhyett/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/pjhyett/subscriptions"
// type: "User"
// url: "https://api.github.com/users/pjhyett"
