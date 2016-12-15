import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/post_index';

//anything after domain.com/ 
export default (
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex} />
	</Route>
);

