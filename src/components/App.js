/** @format */

import React from "react";
import "../css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TweenMax } from "gsap";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Blogs from "./pages/Blogs";
import $ from "jquery";
import jQuery from "jquery";

function App() {
	if ($(window).width() >= 815) {
		jQuery(document).ready(function () {
			var cursor = $(".cursor"),
				follower = $(".cursor-follower");

			var posX = 0,
				posY = 0;

			var mouseX = 0,
				mouseY = 0;

			TweenMax.to({}, 0.016, {
				repeat: -1,
				onRepeat: function () {
					posX += (mouseX - posX) / 9;
					posY += (mouseY - posY) / 9;

					TweenMax.set(follower, {
						css: {
							left: posX - 12,
							top: posY - 12,
						},
					});

					TweenMax.set(cursor, {
						css: {
							left: mouseX,
							top: mouseY,
						},
					});
				},
			});

			$(document).on("mousemove", function (e) {
				mouseX = e.clientX;
				mouseY = e.clientY;
			});

			$(".link").on("mouseenter", function () {
				cursor.addClass("active");
				follower.addClass("active");
				
			});
			$(".link").on("mouseleave", function () {
				cursor.removeClass("active");
				follower.removeClass("active");
			});
		});
		return (
			<Router>
				{/* <Navbar /> */}
				{/* <span id='circle' class='circle'></span> */}
				<div class='cursor'></div>
				<div class='cursor-follower'></div>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/info' component={About} />
					<Route path='/skills' component={Skills} />
					<Route path='/work' component={Work} />
					<Route path='/blogs' component={Blogs} />
					<Route path='/contact' component={Contact} />
				</Switch>
			</Router>
		);
	} else {
		return (
			<div>
				<h1 className='sorry'>
					Sorry, this website is not supported on mobile devices yet.
				</h1>
			</div>
		);
	}
}

export default App;
