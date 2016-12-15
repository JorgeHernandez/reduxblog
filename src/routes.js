import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

const Greeting = () => {
	return <div>Hello world</div>;
}

//anything after domain.com/ 
export default (
	<Route path="/" component={App}>
		<Route path="greet" component={Greeting} />
	</Route>
);

