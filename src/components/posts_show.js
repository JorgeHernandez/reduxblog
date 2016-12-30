import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
	componentWillMount(){
		this.props.fetchPost(this.props.params.id);
	}

	onDeleteClick(){
		this.props.deletePost(this.props.params.id);
	}

	render(){
		//console.log(this.props.post);
		if(!this.props.post){
			return <div>Loading...</div>;
		}

		return (
			<div>
				<Link to="/">Back to index</Link>
				<button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
					Delete post
				</button>
				<h3>{this.props.post.title}</h3>
				<h6>Categories {this.props.post.categories}</h6>
				<p>{this.props.post.content}</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);