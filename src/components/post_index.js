import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostIndex extends Component {
	componentWillMount(){
		console.log("now call action creator to fetch posts");
		this.props.fetchPosts();
	}
	render(){
		return (
			<div>List of blog posts</div>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(null, mapDispatchToProps)(PostIndex);

//Refactor: delete mapDispathcToProps and replace export default to:
//export default connect(null, fetchPosts: fetchPosts)(PostIndex);
//or in es6:
//export default connect(null, {fetchPosts})(PostIndex);