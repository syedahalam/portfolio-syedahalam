import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import { Link } from 'react-router-dom'

// import {
// 	TwitterShareButton,
// 	TwitterIcon,
// 	LinkedinShareButton,
// 	LinkedinIcon,

// } from 'react-share';
import { Link } from 'react-scroll';


const Footer = () => {
    return (
			<div id='footer' className='footer'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-4 col-md-6 col-sm-6'>
							<div className='d-flex'>
								<p>syedahalam@gmail.com</p>
							</div>
							<div className='d-flex'>
								<p>New Jersey</p>
							</div>
						</div>
						<div className='col-lg-3 col-md-2 col-sm-6'>
							<div className='row'>
								<div className='col'>
									<Link to='home' className='footer-nav'>
										Home
									</Link>
									<br />
									<Link to='about' className='footer-nav'>
										About me
									</Link>
									<br />
									<Link to='projects' className='footer-nav'>
										Projects
									</Link>
								</div>
							</div>
						</div>
						<div className='col-lg-3 col-md-2 col-sm-6 align-items-center'>
							<div className='d-flex justify-content-center'>
								<a
									href='https://twitter.com/syedahalam1'
									target='_blank'
									rel='noopener noreferrer'>
									<FaTwitter className='mx-3' size={36} color='white' />
								</a>
								<a
									href='https://github.com/syedahalam'
									target='_blank'
									rel='noopener noreferrer'>
									<FaGithub className='mx-3' size={36} />
								</a>

								<a
									href='https://www.linkedin.com/in/syedahalam/'
									target='_blank'
									rel='noopener noreferrer'>
									<FaLinkedin className='mx-3' size={36} />
								</a>
							</div>
							<p className='pt-3 text-center'>
								{new Date().getFullYear()}&nbsp;| Syeda Alam
							</p>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Footer
