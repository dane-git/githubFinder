import React, { Component } from 'react';

export class Search extends Component {
	state = {
		text: '',
	};

	onSubmit = (e) => {
		// since this is an onSubmit to a form file you must:
		e.preventDefault();
		// without the preventDefault() is would submit to a file.
		console.log(this.state.text);
	};
	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit} className='form'>
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
