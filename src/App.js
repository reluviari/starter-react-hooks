import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import GeolocationNow from "./components/Geolocation";
import exampleUseRef from "./components/ExampleUseRef";
import HelloTs from "./components/HelloTS";

export default function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route
						path='/geolocation'
						exact
						component={GeolocationNow}
					/>
					<Route path='/useRef' exact component={exampleUseRef} />
					<Route path='/helloTs' exact component={HelloTs} />
				</Switch>
			</Router>
		</div>
	);
}
