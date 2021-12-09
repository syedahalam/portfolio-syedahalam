import React from 'react';
import './Projects.css';
import Trivia from '../images/Trivia.png';
import Meal from '../images/Meal-Idea.png';
import Touring from '../images/Tou-ring.png';
import UShop from '../images/ushop.png';
// import react popup box
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';
const Projects = () => {
	//Trivia
	const openPopupboxTrivia = () => {
		const content = (
			<>
				<img
					className='portfolio-image-popupbox'
					src={Trivia}
					alt='Trivia project'
				/>
				<p>
					It’s a trivia about cats. Players can guess the answer from choices.
					By the end of the game their total score is shown with the option to
					play again or quit. Trivia is Html, CSS, Javascript based web app.
				</p>
				<b>Github: </b>
				<a
					className='hyper-link'
					onClick={() =>
						window.open('https://github.com/syedahalam/Trivia-Game')
					}>  Cats Trivia 
					{/* https://github.com/syedahalam/Trivia-Game */}
				</a>
				<br />
				<b>Deployed Website: </b>
				<a
					className='hyper-link'
					onClick={() =>
						window.open('https://kind-swartz-4bd055.netlify.app/')
					}> Cats Trivia
					{/* https://syedahalam.github.io/Trivia-Project01/ */}
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};
	const popupboxConfigTrivia = {
		titleBar: {
			enable: true,
			text: 'Trivia-Cats',
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};
	// Meal Idea
	const openPopupboxMeal = () => {
		const content = (
			<>
				<img
					className='portfolio-image-popupbox'
					src={Meal}
					alt='Meal project'
				/>
				<p>
					Meal Idea is built with React Js and CSS. Visitors can look into any
					meal category they are interested in by searching or looking into
					category links. On choosing a particular meal, they can see
					instructions with video on how to make that particular dish.
				</p>
				<b>Github:</b>
				<a
					className='hyper-link'
					onClick={() =>
						window.open('https://github.com/syedahalam/meal-idea')
					}>
					https://github.com/syedahalam/meal-idea
				</a>
				<br />
				<b>Deployed Website</b>
				<a
					className='hyper-link'
					onClick={() =>
						window.open('https://nifty-allen-7a59f4.netlify.app/')
					}>
					https://nifty-allen-7a59f4.netlify.app/
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};
	const popupboxConfigMeal = {
		titleBar: {
			enable: true,
			text: 'Meal-Idea',
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	///////////////
	// Tou-ring
	const openPopupboxTouring = () => {
		const content = (
			<>
				<img
					className='portfolio-image-popupbox'
					src={Touring}
					alt='Touring project'
				/>
				<p>
					A full stack mern web app. React, CSS, REST APIs are used as frontend
					technologies and for backend, node, express and the mongoDB nosql
					database. This is a full-CRUD React single page application that
					allows users to view attractions in any city, and add their favorite
					attractions for others to see! The Categories page lets users search
					by city, genre, or name, and filters results for them in real time.
				</p>
				<b>Github:</b>
				<a
					className='hyper-link'
					onClick={() =>
						window.open(
							'https://github.com/SEIR-809-Project3-SquadCarlos/project-3-client'
						)
					}>
					https://github.com/SEIR-809-Project3-SquadCarlos/project-3-client
				</a>
				<br />
				<b>Deployed Website</b>
				<a
					className='hyper-link'
					onClick={() =>
						window.open('https://happy-shannon-d1fdea.netlify.app/')
					}>
					https://happy-shannon-d1fdea.netlify.app/
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};
	const popupboxConfigTouring = {
		titleBar: {
			enable: true,
			text: 'Tou-ring',
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};
	///////////////////////
	///////////////
	// UShop
	const openPopupboxUShop = () => {
		const content = (
			<>
				<img
					className='portfolio-image-popupbox'
					src={UShop}
					alt='UShop project'
				/>
				<p>
					A full stack web app. React and Bootstrap are used as frontend
					technologies and for backend, django, and postgresql as databases.
					This is a full-CRUD React ecommerce application that allows users to
					view their choice of products, add to cart, and shop.
				</p>
				<b>Github:</b>
				<a
					className='hyper-link'
					onClick={() =>
						window.open('https://github.com/syedahalam/ushop-front')
					}>
					https://github.com/syedahalam/ushop-front
				</a>
				<br />
				<a
					className='hyper-link'
					onClick={() =>
						window.open('https://github.com/syedahalam/ushop-back')
					}>
					https://github.com/syedahalam/ushop-back
				</a>
				<br />
				<b>Deployed Website</b>
				<a
					className='hyper-link'
					onClick={() => window.open('https://ushop-4.netlify.app/')}>
					https://happy-shannon-d1fdea.netlify.app/
				</a>
					<br />
				<a
					className='hyper-link'
					onClick={() =>
						window.open('https://stormy-journey-70089.herokuapp.com')
					}>
					https://stormy-journey-70089.herokuapp.com
				</a>
			</>
		);
		PopupboxManager.open({ content });
	};
	const popupboxConfigUShop = {
		titleBar: {
			enable: true,
			text: 'UShop',
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};
	///////////////////////
	return (
		<div id='projects' className='portfolio-wrapper'>
			<div className='container'>
				<h1 className=' heading-project text-uppercase text-center py-4'>
					Projects
				</h1>
				<div className='image-box-wrapper row justify-content-center'>
					<div className='portfolio-image-box' onClick={openPopupboxTrivia}>
						<img className='portfolio-img' src={Trivia} alt='trivia' />
						{/* <div className='overflow'></div> */}
						{/* come back for styling */}
					</div>
				
			
					<div className='portfolio-image-box' onClick={openPopupboxMeal}>
						<img src={Meal} alt='meals-idea' className='portfolio-img' />
						{/* <div className='overflow'></div> */}
					</div>
				

			
					<div className='portfolio-image-box' onClick={openPopupboxTouring}>
						<img src={Touring} alt='touring' className='portfolio-img' />
						{/* <div className='overflow'></div> */}
					</div>
				

				
					<div className='portfolio-image-box' onClick={openPopupboxUShop}>
						<img src={UShop} alt='touring' className='portfolio-img' />
						{/* <div className='overflow'></div> */}
					</div>
				
				</div>
			</div>
			<PopupboxContainer {...popupboxConfigTrivia} />
			<PopupboxContainer {...popupboxConfigMeal} />
			<PopupboxContainer {...popupboxConfigTouring} />
			<PopupboxContainer {...popupboxConfigUShop} />
		</div>
	);
};

export default Projects;
