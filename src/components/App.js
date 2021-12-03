/** @format */

import React from "react";
import "../css/App.css";
// import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Blogs from "./pages/Blogs";

function App() {
	return (
		<Router>
			{/* <Navbar /> */}
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/about' component={About} />
				<Route path='/skills' component={Skills} />
				<Route path='/work' component={Work} />
				<Route path='/blogs' component={Blogs} />
				<Route path='/contact' component={Contact} />
			</Switch>
		</Router>
	);
}

export default App;
