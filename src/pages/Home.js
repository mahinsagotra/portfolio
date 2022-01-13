import React from 'react';
import About from '../components/About/About';

import Navbar from '../components/Header/Navbar';
import Intro from '../components/Intro/Intro';
import Contact from '../components/Contact/Contact';

export default function Home() {
	return (
		<div>
			<Navbar />
			<div className='App'>
				<Intro />
				<About />
				<Contact />
			</div>
		</div>
	);
}
