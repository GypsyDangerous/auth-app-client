import "./App.scss";
import Auth from "./components/Auth";
import { BrowserRouter as Router, Route, Switch, Redirect, useLocation } from "react-router-dom";
import { useAuth } from "./hooks/auth-hook";
import { useEffect, useState } from "react";
import { useHttpClient } from "./hooks/http-hook";
import { useUser } from "./contexts/UserContext";
import Header from "./components/shared/Header";
import Home from "./components/users/Home";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import { AnimatePresence } from "framer-motion";

const { createApolloFetch } = require("apollo-fetch");

const Fetch = createApolloFetch({
	uri: `${process.env.REACT_APP_API_URL}/graphql`,
});

function App() {
	const [fullyLoaded, setFullyLoaded] = useState(false);
	const { loaded, token, login, logout, userId, isLoggedIn } = useAuth();
	const { setProfilePicture, setUserData } = useUser();
	const { isLoading, error, sendRequest, clearError } = useHttpClient();

	useEffect(() => {
		(async () => {
			if (isLoggedIn && userId) {
				const data = (await Fetch({
					query: `
					query GetUser($id: ID!){
						user(id: $id){
							bio
							phone
							username
							email
							photo
						}
					}`,
					variables: { id: userId },
				}))?.data?.user;


				if (data) {
					setUserData(data);
					setProfilePicture(data.photo);
				} else {
					setUserData(null);
					setProfilePicture(null);
				}
			}
			setFullyLoaded(true);
		})();
	}, [isLoggedIn, userId, setUserData, setProfilePicture, sendRequest]);

	const location = useLocation();

	return fullyLoaded ? (
		<div className="App">
			<Header />
			<Switch location={location} key={location.key}>
				<ProtectedRoute exact path="/" component={Home} />
				<Route path="/auth" component={Auth} />
				<Redirect to="/" />
			</Switch>
		</div>
	) : (
		"Loading"
	);
}

export default App;
