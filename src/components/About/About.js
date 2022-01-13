import React from 'react';
import { skills } from './skills';

const About = () => {
	return (
		<section id='about' className='about section'>
			<div className='container'>
				<div className='section-left'>
					<h1>About</h1>
				</div>
				<div className='content'>
					<div>
						<p className='font-italic'>
							My name is Mahin Sagotra. I live in Jammu. I'm a
							Front-end Developer, building web applications and
							websites using React frameworks. My first bit of
							exposure to web development was in 3rd semester of
							my course, where I had learned basics of HTML and
							CSS. I like to think that I've learned a lot since
							then!. Check out some of my work and feel free to
							shoot me an email if you'd like to work together.
						</p>
					</div>
					<div>
						<h2>Skills</h2>
						<div className='skills'>
							<ul className='list'>
								{skills.map((skill) => {
									const { id, url, text } = skill;
									return (
										<li key={id}>
											<img src={url} alt={text} />
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
