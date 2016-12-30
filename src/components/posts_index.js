import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostIndex extends Component {
	componentWillMount(){
		console.log("now call action creator to fetch posts");
		this.props.fetchPosts();
	}
	renderPosts(){
		return this.props.posts.map( (post)=> {
			return (
				<li className="list-group-item" key={post.id} >
					<strong>{post.title}</strong>
					<span className="pull-xs-right">{post.categories}</span>
				</li>
			);
		} )
	}
	render(){
		return (
			<div>
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">
						Add a new post
					</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
				{ this.renderPosts() }
				</ul>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchPosts }, dispatch);
}

function mapStateToProps(state){
	return { posts: state.posts.all };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);

//Refactor: delete mapDispathcToProps and replace export default to:
//export default connect(null, fetchPosts: fetchPosts)(PostIndex);
//or in es6:
//export default connect(null, {fetchPosts})(PostIndex);