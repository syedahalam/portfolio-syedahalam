import React from 'react';
import './Projects.css';
import Trivia from '../images/Trivia.png';
import Meal from '../images/Meal-Idea.png';
import Touring from '../images/Tou-ring.png';
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
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
					dolorem tempora qui ipsum quis culpa accusamus rem nemo nulla velit,
					animi architecto harum quod dignissimos exercitationem fugit aperiam
					tenetur minima?
				</p>
				<b>Github:</b>
				<a
					className='hyper-link'
					onClick={() =>
						window.open('https://github.com/syedahalam/Trivia-Game')
					}>
					https://github.com/syedahalam/Trivia-Game
				</a>
                <br />
				<b>Deployed Website</b>
				<a
					className='hyper-link'
					onClick={() =>
						window.open('https://kind-swartz-4bd055.netlify.app/')
					}>
					https://syedahalam.github.io/Trivia-Project01/
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
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
					dolorem tempora qui ipsum quis culpa accusamus rem nemo nulla velit,
					animi architecto harum quod dignissimos exercitationem fugit aperiam
					tenetur minima?
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
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
					dolorem tempora qui ipsum quis culpa accusamus rem nemo nulla velit,
					animi architecto harum quod dignissimos exercitationem fugit aperiam
					tenetur minima?
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
				</div>
			</div>
			<PopupboxContainer {...popupboxConfigTrivia} />
			<PopupboxContainer {...popupboxConfigMeal} />
			<PopupboxContainer {...popupboxConfigTouring} />
		</div>
	);
};

export default Projects;
