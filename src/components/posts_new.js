import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component{
	render(){
/*
		const handleSubmit = this.props.handleSubmit;
		//const { handleSubmit } = this.props;

		const title = this.props.title;
		const categories = this.props.categories;
		const content = this.props.content;
*/



		//ES6 version
		const { fields: {title, categories, content }, handleSubmit } = this.props;

		return(
			<form onSubmit={handleSubmit(this.props.createPost)} >
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

//connect first argumentes is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);

