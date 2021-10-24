import React from 'react';
import './About.css'
import img from '../images/1.jpeg'

const About = () => {
    return (
			<div className='container py-s'>
				<div className='row'>
					<div className='col-lg-6 col-xm-12'>
                        <h2 className='about-heading py-5'>About Me</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Consequatur, nihil porro unde aspernatur inventore iste in impedit
							sint libero vitae neque quae a dolorem nam, perspiciatis
							voluptates similique ullam temporibus?
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Consequatur, nihil porro unde aspernatur inventore iste in impedit
							sint libero vitae neque quae a dolorem nam, perspiciatis
							voluptates similique ullam temporibus?
						</p>
					</div>
					<div className='col-lg-6 col-xm-12'>
                        <div className="photo-wrap mb-5">
						<img className='profile-img py-5' src={img} alt='profileimage' />
                        </div>
					</div>
				</div>
			</div>
		);
}

export default About
