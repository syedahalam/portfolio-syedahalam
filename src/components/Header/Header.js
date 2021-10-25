import React from 'react';
import './Header.css';
import Typed from 'react-typed';

const Header = () => {
    return (
			<div id='home' className='header-wrapper'>
				<div className='main-info'>
					<h1>I'M</h1>
					<Typed
						className='typed-text'
						strings={[
							'SYEDA H ALAM',
							'a software-engineer',
							'a fullStackDeveloper',
						]}
						typeSpeed={40}
						backSpeed={60}
						loop
					/>
					{/* <a
						className='head'
						href='https://docs.google.com/document/d/12ixhzQ8XAv5ZX-KthulHQCoOvCZvD1Ph78bLnnygDFU/view?usp=sharing'
						target='_blank'>
						Resume
					</a> */}
					

					{/* <a
						href=''
						className='btn-main-contact'>
						Resume
					</a> */}
				</div>
			</div>
		);
}

export default Header
