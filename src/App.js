import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import SingleProject from './pages/SingleProject';
import './styles/main.scss';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/project/:id'>
					<SingleProject />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
