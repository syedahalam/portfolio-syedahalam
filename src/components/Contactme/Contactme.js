import React, { useState } from 'react';
import './Contactme.css';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contactme = () => {
	const [ successMessage, setSuccessMessage] = useState('');
	const { register, handleSubmit, formState:{errors} } = useForm();

	
	const serviceID = 'service_ID';
	const templateID = 'template_ID';
	const userID = 'user_xoNaow491lFcLZIw29sqG';

	const onSubmit =(data, r ) => {
		sendEmail(
			serviceID, 
			templateID,
			{
				name: data.name,
				phone: data.phone,
				email: data.email,
				subject: data.subject,
				description: data.description,
			},
			userID
			)
			r.target.reset();
	}


	const sendEmail = (serviceID, templateID, variables, userID) => {
		emailjs
			.send(serviceID, templateID, variables, userID)
			.then(() => {
				setSuccessMessage(
					"Form sent successfully! I'll contact you as soon as possible."
				);
			})
			.catch((err) => console.error(`Something went wrong ${err}`));
	};
	return (
		<div id='contactme' className='contacts'>
			<div className='text-center'>
				<h1>Contact Me</h1>
				<p>Please fill out the from, I will contact you as soon as possible!</p>
				<span className='success-message'>{successMessage}</span>
				{/* text center div */}
			</div>
			<div className='container'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='row'>
						<div className='col-md-6 col-xs-12'>
							{/* name input */}
							<input
								id='name'
								type='text'
								className='form-control'
								placeholder='Name'
								name='name'
								{...register('name', {
									required: 'true',
									maxLength: 20,
								})}
							/>
							<span className='error-message'>
								{errors.name && <span>This field is required</span>}
							</span>
							{/* cell input */}
							<input
								id='phone'
								type='text'
								className='form-control'
								placeholder='Phone'
								name='phone'
								{...register('phone', {
									required: 'true',
								})}
							/>
							<span className='error-message'>
								{errors.phone && <span>This field is required</span>}
							</span>
							{/* email input */}
							<input
								id='email'
								type='email'
								className='form-control'
								placeholder='Email'
								name='email'
								{...register('email', {
									required: 'true',
									pattern: {
										value: /^[A-Z-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: 'Invalid email',
									},
								})}
							/>
							<span className='error-message'>
								{errors.email && <span>This field is required</span>}
							</span>
							{/* subject input */}
							<input
								id='subject'
								type='text'
								className='form-control'
								placeholder='Subject'
								name='subject'
								{...register('subject', {
									required: 'true',
								})}
							/>
							<span className='error-message'>
								{errors.subject && <span>This field is required</span>}
							</span>
						</div>
						<div className='col-md-6 col-xs-12'>
							{/* description */}
							<textarea
								className='form-control'
								id='description'
								type='text'
								placeholder='Message'
								name='description'
								{...register('description', {
									required: 'true',
								})}></textarea>
							<span className='error-message'>
								{errors.description && <span>This field is required</span>}
							</span>

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
