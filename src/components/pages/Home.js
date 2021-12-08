/** @format */

import React, { useState } from "react";
import "../../css/Home.css";
import $ from "jquery";
import jQuery from "jquery";
import SocialMediaIcons from "./SocialMediaIcons";

// function social() {
// 	if (!$("link").hasClass("white")) {
// 		return ['rgba(117,115,115,0)', 'rgba(255,255,255,1)', 'rgba(26,166,233,0)'];
// 	}
// 	else {
// 		return ['rgba(117,115,115,0)', 'rgba(255,255,255,1)', 'rgba(26,166,233,0)'];
// 	}
// };

const Home = () => {
	const [color, setColor] = useState(() => {
		return "rgba(0,0,0,1)";
	});

	function whatColor() {
		var info_bg = $(".info-bg"),
			link = $(".link");
		
		if (!$(".info-link").hasClass("white")) {
			// setColor(prevcolor => { prevcolor = "rgba(255,255,255,1)" })
			info_bg.addClass("info-bg-active");
			$(".info-link").addClass("white");
			$(".cursor").css("background-color", "rgba(255,255,255,1)");
			$(".cursor-follower").css("background-color", "rgba(0, 0, 255, 1)");
			$(".name").css("color", "rgba(0,0,255,1)");
		}
		else {
			// setColor(prevcolor => { prevcolor = "rgba(0,0,0,1)" })
			info_bg.removeClass("info-bg-active");
			$(".cursor").css("background-color", "rgba(0,0,0,1)");
			$(".cursor-follower").css("background-color", "rgba(0,0,255,0.3)");
			// whatColor();
			// setColor(() => { return "rgba(0,0,0,1)"; });
			$(".info-link").removeClass("white");
		}
	}

	// jQuery(document).ready(function () {
	// 	var info_bg = $(".info-bg"),
	// 		link = $(".link");

	// 	$(".info-link").on("click", function () {
	// 		if (!link.hasClass("white")) {
	// 			info_bg.addClass("info-bg-active");
	// 			link.addClass("white");
	// 			$(".cursor").css("background-color", "rgba(255,255,255,1)");
	// 			$(".cursor-follower").css("background-color", "rgba(0, 0, 255, 1)");
	// 			$(".name").css("color", "rgba(0,0,255,1)");
	// 			// whatColor();
	// 			// setColor(() => { return "rgba(255,255,255,1)"; });
	// 		} else {
	// 			info_bg.removeClass("info-bg-active");
	// 			$(".cursor").css("background-color", "rgba(0,0,0,1)");
	// 			$(".cursor-follower").css("background-color", "rgba(0,0,255,0.3)");
	// 			// whatColor();
	// 			// setColor(() => { return "rgba(0,0,0,1)"; });
	// 			link.removeClass("white");
	// 		}
	// 	});
	// });

	return (
		<div>
			<h1 className='name'>
				<a href='/' className='link'>
					Arpit Chauhan
				</a>
			</h1>
			<div className='info-div'>
				<a className='info-link link' onClick={whatColor()} href='#info'>
					info
				</a>
			</div>
			<div className='work-div'>
				<a className='work-link link' href='/work'>
					work
				</a>
			</div>
			<div className='background-text-div'>
				<p className='background-text'>Hello</p>
			</div>
			<SocialMediaIcons iconColor={color} />
			<div className='about-heading-div container'>
				<h1 className='about-heading title'>
					<span>I am an engineer who </span>
					<span>loves to work hands-on </span>
					<span>- based in rainy Manipal.</span>
					<span>&#9996;</span>
				</h1>
			</div>
			<section className='info'>
				<div className='info-bg'>
					<div className='about-heading-div container'>
						<h1 className='info-text title'>
							<span>I am an engineer who </span>
							<span>loves to work hands-on </span>
							<span>- based in rainy Manipal.</span>
							<span>&#9996;</span>
						</h1>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
