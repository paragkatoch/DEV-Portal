import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import Core from "./Pages/Core";
import Degree from "./Pages/Degree";
import Developer from "./Pages/Developer";
import Domain from "./Pages/Domain";
import Home from "./Pages/Home";
import Miscellaneous from "./Pages/Miscellaneous";
import NotFound from "./Pages/NotFound";

export default function Routes() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact render={() => <Redirect to="/home" />} />

					<Route path="/home" exact render={(props) => <Home {...props} />} />
					<Route
						path="/developer"
						exact
						render={(props) => <Developer {...props} />}
					/>
					<Route
						path="/developer/domain"
						exact
						render={(props) => <Domain {...props} />}
					/>

					<Route
						path="/degree"
						exact
						render={(props) => <Degree {...props} />}
					/>
					<Route
						path="/degree/core"
						exact
						render={(props) => <Core {...props} />}
					/>

					<Route
						path="/misc"
						exact
						render={(props) => <Miscellaneous {...props} />}
					/>
					<Route
						path="/contact"
						exact
						render={(props) => <ContactUs {...props} />}
					/>
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</React.Fragment>
	);
}
