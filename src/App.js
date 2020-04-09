import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import GeolocationNow from "./components/Geolocation";
import ExampleUseRef from "./components/ExampleUseRef";
import HelloTs from "./components/HelloTS";
import GhRepositories from "./components/GhRepositories";
import ExampleUseCallback from "./components/ExampleUseCallback";

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
					<Route path='/useRef' exact component={ExampleUseRef} />
					<Route path='/helloTs' exact component={HelloTs} />
					<Route
						path='/ghRepositories'
						exact
						component={GhRepositories}
					/>
					<Route
						path='/exampleUseCallback'
						exact
						component={ExampleUseCallback}
					/>
				</Switch>
			</Router>
		</div>
	);
}
