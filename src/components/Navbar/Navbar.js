import React from 'react';
import './Navbar.css';
// font awesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-dark sticky-top'>
			<div className='container'>
				<Link className='navbar-brand' to='home' href='#'>
					SHA
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
				</button>

				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav m-lg-auto'>
						<li className='nav-item active'>
							<Link smooth={true} to='home' className='nav-link' href='#'>
								Home
								<span className='sr-only'>(current)</span>
							</Link>
						</li>
						<li className='nav-item'>
							<Link smooth={true} to='about' className='nav-link' href='#'>
								About
							</Link>
						</li>
						<li className='nav-item'>
							<Link smooth={true} to='projects' className='nav-link' href='#'>
								Projects
							</Link>
						</li>
						<li className='nav-item'>
							<Link smooth={true} to='contactme' className='nav-link' href='#'>
								Contact
							</Link>
						</li>
						<li className='nav-item'>
							<Link smooth={true} to='resume' className='nav-link' href='#'>
								Resume
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
