import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import './styles/main.scss';

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
