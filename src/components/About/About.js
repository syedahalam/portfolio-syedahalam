import React from 'react';
import './About.css';
import img from '../images/1.jpeg';

const About = () => {
	return (
		<div id='about' className='container py-s'>
			<div className='row'>
				<div className='col-lg-6 col-xm-12'>
					<h2 className='about-heading py-5'>SOFTWARE ENGINEER</h2>
					<p>
						I am a Software Engineer. A Full Stack Web developer who brings
						beautiful imaginations to reality. Passionate about learning how
						things really work esthetically and flawlessly. Fun loving and
						driven to create interactive solutions around everyday experiences.
					</p>
					<h2 className='about-heading py-5'>Skills | Languages</h2>
					<div className='row'>
						<div className='col-md-6 col-xs-12'>
						<ul>
							<li>HTML5</li>
							<li>CSS</li>
							<li>Javascript</li>
							<li>Bootstrap</li>
							<li>ES2015+(ES6)</li>
							<li>React</li>
							<li>React Hooks</li>
							<li>Express</li>
							<li>Python</li>
						</ul>
						</div>
						<div className='col-md-6 col-xs-12'>
							<ul>
							<li>Node</li>
							<li>Unit Testing</li>
							<li>Express</li>
							<li>Rest APIs</li>
							<li>Git</li>
							<li>Github</li>
							<li>MongoDB</li>
							<li>PostgreSQL</li>
							<li>Photoshop</li>
						</ul>
						</div>
					</div>
				</div>
				<div className='col-lg-6 col-xm-12'>
					<div className='photo-wrap mb-5'>
						<img className='profile-img py-5' src={img} alt='profileimage' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
