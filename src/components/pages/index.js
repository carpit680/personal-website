/** @format */

import React from "react";
import "../../css/Home.css";
import { SocialMediaIconsReact } from "social-media-icons-react";

const Home = () => {
	return (
		<div>
			<h1 className='name'>
				<a href='/' id='link'>
					Arpit Chauhan
				</a>
			</h1>
			<div className='info-div'>
				<a className='info-link' href='/info'>
					info
				</a>
			</div>
			<div className='work-div'>
				<a className='work-link' id='link' href='/work'>
					work
				</a>
			</div>
			<div className='about-heading-div'>
				<h1 className='about-heading'>
					I am an engineer who <br />
					loves to work hands-on <br />
					- based in rainy Manipal.
					<br />
					&#9996;
				</h1>
			</div>
			<div className='social-icon-div'>
				<div className='social-icon' id='link'>
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
				<div className='social-icon' id='link'>
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
				<div className='social-icon' id='link'>
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
				<div className='social-icon' id='link'>
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
