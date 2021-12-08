/** @format */

import React from "react";
import "../css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TweenMax } from "gsap";
import Home from "./pages/Home";
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
				<div className='cursor'></div>
				<div className='cursor-follower'></div>
				<Switch>
					<Route path='/' exact component={Home} />
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
