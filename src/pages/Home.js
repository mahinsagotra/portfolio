import React from 'react';

import About from '../components/About/About';
import Navbar from '../components/Header/Navbar';
import Intro from '../components/Intro/Intro';
import Contact from '../components/Contact/Contact';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';

import '../styles/main.scss';

export default function Home() {
	return (
		<div>
			<Navbar />
			<div className='App'>
				<Intro />
				<About />
				<Projects />
				<Contact />
			</div>
			<Footer />
		</div>
	);
}
