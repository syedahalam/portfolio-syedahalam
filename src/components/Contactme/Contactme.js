import React, { useRef } from 'react';
import './Contactme.css';
import emailjs from 'emailjs-com';

const Contactme = () => {
	const form = useRef();
	const serviceID = 'service_ID';
	const templateID = 'template_ID';
	const userID = 'user_xoNaow491lFcLZIw29sqG';

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(serviceID, templateID, form.current, userID)
        .then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};
	return (
		<div id='contactme' className='contacts'>
			<div className='text-center'>
				<h1>Contact Me</h1>
				{/* text center div */}
			</div>
			<div className='container'>
				<form ref={form} onSubmit={sendEmail}>
					<div className='row'>
						<div className='col-md-6 col-xs-12'>
							{/* name input */}
							<input
								id='name'
								type='text'
								className='form-control'
								placeholder='Name'
								name='name'
							/>
							{/* cell input */}
							<input
								id='phone'
								type='text'
								className='form-control'
								placeholder='Phone'
								name='phone'
							/>
							{/* email input */}
							<input
								id='email'
								type='email'
								className='form-control'
								placeholder='Email'
								name='email'
							/>
							{/* subject input */}
							<input
								id='subject'
								type='text'
								className='form-control'
								placeholder='Subject'
								name='subject'
							/>
						</div>
						<div className='col-md-6 col-xs-12'>
							{/* description */}
							<textarea
								className='form-control'
								id='description'
								type='text'
								placeholder='Message'
								name='description'></textarea>

							<button className='btn-main-offer contact-btn' type='submit'>
								Contact Me
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contactme;
