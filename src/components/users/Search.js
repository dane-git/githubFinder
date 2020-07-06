import React, { Component } from 'react';

export class Search extends Component {
	// NOTE  Forms in react-
	// Usually with a form in react we will want to attach state to it.
	// NOTE Make sure to add an onChange event for a controlled component => below is a react controlled Component.

	state = {
		text: '',
	};

	//NOTE: THIS ON EVENT STATE CHANGE MAGIC
	onChange = (event) => {
		this.setState({ text: event.target.value });
	};

	render() {
		return (
			<div>
				<form className='form'>
					<input
						type='text'
						name='text'
						placeholder='search users...'
						value={this.state.text}
						onChange={this.onChange}
					/>
					<input
						type='submit'
						value='Search'
						className='btn btn-dark btn-block'
					/>
				</form>
			</div>
		);
	}
}

export default Search;
