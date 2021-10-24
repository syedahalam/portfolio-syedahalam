import React from 'react';
import './Footer.css';
import {
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share'

const Footer = () => {
    return (
			<div id='footer' className='footer'>
				<div className='containe'>
					<div className='row'>
						<div className='col-lg-4 col-md-6 col-sm-6'>
							<div className='d-flex'>
								<p>New Jersey</p>
							</div>
							<div className='d-flex'>
								<p>syedahalam@gmail.com</p>
							</div>
						</div>
						<div className='col-lg-3 col-md-2 col-sm-6'>
							<div className='row'>
								<div className='col'>
									<a className='footer-nav'>Home</a>
									<br />
									<a className='footer-nav'>About me</a>
									<br />
									<a className='footer-nav'>Projects</a>
								</div>
							</div>
						</div>
						<div className='col-lg-5 col-md-5 col-sm-6 align-items-center'>
							<div className='d-flex justify-content-center'>
								<TwitterShareButton url={'https://twitter.com/syedahalam1'}>
									<TwitterIcon className='mx-3' size={36} />
								</TwitterShareButton>
								<LinkedinShareButton
                                    url={'https://www.linkedin.com/in/syedahalam/'}
                                >
									<LinkedinIcon className='mx-3' size={36} />
								</LinkedinShareButton>
							</div>
                            <p className="pt-3 text-center">
                                Copyright&copy;
                                {new Date().getFullYear()}&nbsp;Syeda Alam | All Rights Reserved
                            </p>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Footer
