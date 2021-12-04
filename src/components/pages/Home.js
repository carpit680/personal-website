/** @format */

import React from "react";
import "../../css/Home.css";
import { SocialMediaIconsReact } from "social-media-icons-react";

const Home = () => {
	return (
		<div>
			<h1 className='name'>
				<a href='/' className='link'>
					Arpit Chauhan
				</a>
			</h1>
			<div className='info-div'>
				<a className='info-link link' href='/info'>
					info
				</a>
			</div>
			<div className='work-div'>
				<a className='work-link link' href='/work'>
					work
				</a>
			</div>
			<div className='background-text-div'>
				<p className='background-text'>
					Hello
				</p>
			</div>
			<div className='about-heading-div container'>
				<h1 className='about-heading title'>
					<span>I am an engineer who </span>
					<span>loves to work hands-on </span>
					<span>- based in rainy Manipal.</span>
					<span>&#9996;</span>
				</h1>
			</div>
			<div className='social-icon-div'>
				<div className='social-icon link'>
					<SocialMediaIconsReact
						borderColor='rgba(117,115,115,0)'
						borderWidth='5'
						borderStyle='solid'
						icon='mail'
						iconColor='rgba(0,0,0,1)'
						backgroundColor='rgba(26,166,233,0)'
						iconSize='5'
						roundness='0%'
						url='https://mail.google.com/mail/?view=cm&fs=1&to=carpit680@gmail.com'
						size='25'
					/>
				</div>
				<div className='social-icon link'>
					<SocialMediaIconsReact
						borderColor='rgba(117,115,115,0)'
						borderWidth='5'
						borderStyle='solid'
						icon='instagram'
						iconColor='rgba(0,0,0,1)'
						backgroundColor='rgba(26,166,233,0)'
						iconSize='5'
						roundness='0%'
						url='https://www.instagram.com/arpittchauhan/'
						size='25'
					/>
				</div>
				<div className='social-icon link'>
					<SocialMediaIconsReact
						borderColor='rgba(117,115,115,0)'
						borderWidth='5'
						borderStyle='solid'
						icon='github'
						iconColor='rgba(0,0,0,1)'
						backgroundColor='rgba(26,166,233,0)'
						iconSize='5'
						roundness='0%'
						url='https://github.com/carpit680'
						size='25'
					/>
				</div>
				<div className='social-icon link'>
					<SocialMediaIconsReact
						borderColor='rgba(117,115,115,0)'
						borderWidth='5'
						borderStyle='solid'
						icon='linkedin'
						iconColor='rgba(0,0,0,1)'
						backgroundColor='rgba(26,166,233,0)'
						iconSize='5'
						roundness='0%'
						url='https://www.linkedin.com/in/arpitchauhan100/'
						size='25'
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
