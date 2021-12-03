/** @format */

import React from "react";
import "../css/App.css";
// import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
			var mouseX = 0,
				mouseY = 0;
			var xp = 0,
				yp = 0;

			$(document).mousemove(function (e) {
				mouseX = e.pageX - 30;
				mouseY = e.pageY - 30;
			});

			setInterval(function () {
				xp += (mouseX - xp) / 9;
				yp += (mouseY - yp) / 9;
				$("#circle").css({ left: xp + "px", top: yp + "px" });
			}, 20);
		});
		return (
			<Router>
				{/* <Navbar /> */}
				<span id='circle' class='circle'></span>
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
				<h1 className="sorry">Sorry, this website is not supported on mobile devices yet.</h1>
			</div>
		);
	}
}

export default App;
