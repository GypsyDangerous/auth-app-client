import "./App.scss";
import Auth from "./components/Auth";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useAuth } from "./hooks/auth-hook";
import { useEffect } from "react";
import { useHttpClient } from "./hooks/http-hook";
import { useUser } from "./contexts/UserContext";
import Header from "./components/shared/Header";
import Home from "./components/users/Home";
import ProtectedRoute from "./components/shared/ProtectedRoute";

function App() {
	const { loaded, token, login, logout, userId, isLoggedIn } = useAuth();
	const { setProfilePicture, setUserData } = useUser();
	const { isLoading, error, sendRequest, clearError } = useHttpClient();

	useEffect(() => {
		(async () => {
			if (isLoggedIn && userId) {
				const data = await sendRequest(
					`${process.env.REACT_APP_API_URL}/api/v1/users/get/${userId}`
				);
				if (data) {
					setUserData(data);
					setProfilePicture(data.photo);
				}else{
					setUserData(null)
					setProfilePicture(null)
				}
			}
		})();
	}, [isLoggedIn, userId, setUserData, setProfilePicture, sendRequest]);


	return (
		<Router>
			{loaded ? (
				<div className="App">
					<Header />
					<Switch>
						<Route path="/auth" component={Auth} />
						<ProtectedRoute exact path="/" component={Home} />
						<Redirect to="/" />
					</Switch>
				</div>
			) : (
				"Loading"
			)}
		</Router>
	);
}

export default App;
