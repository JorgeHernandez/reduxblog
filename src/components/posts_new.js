import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component{
	render(){
		const handleSubmit = this.props.handleSubmit;
		//ES6 version
		//const { handleSubmit } = this.props;

		const title = this.props.title;
		const categories = this.props.categories;
		const content = this.props.content;

		return(
			<form onSubmit={handleSubmit} >
				<h3>Create a New Post</h3>
				<div className="form-group">
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
				</div>
				<div className="form-group">
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
				</div>
				<div className="form-group">
					<label>Content</label>
					<textarea className="form-control" rows="10" {...content} />
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content']
})(PostsNew);