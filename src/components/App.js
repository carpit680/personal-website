/** @format */

import "../css/App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' component={Home} exact />
				<Route path='/about' component={About} exact />
				<Route path='/contact' component={Contact} exact />
			</Switch>
		</Router>
	);
}

export default App;
