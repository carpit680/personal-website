/** @format */

import React from "react";
import "../../css/Home.css";
import { SocialMediaIconsReact } from "social-media-icons-react";

function SocialMediaIcons(props) {

    return (
			<div className='social-icon-div'>
				<div className='social-icon link'>
					<SocialMediaIconsReact
						borderColor='rgba(117,115,115,0)'
						borderWidth='5'
						borderStyle='solid'
						icon='mail'
						iconColor={props.iconColor}
						backgroundColor={props.bgColor}
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
						iconColor={props.iconColor}
						backgroundColor={props.bgColor}
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
						iconColor={props.iconColor}
						backgroundColor={props.bgColor}
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
						iconColor={props.iconColor}
						backgroundColor={props.bgColor}
						iconSize='5'
						roundness='0%'
						url='https://www.linkedin.com/in/arpitchauhan100/'
						size='25'
					/>
				</div>
			</div>
		);
}

export default SocialMediaIcons;