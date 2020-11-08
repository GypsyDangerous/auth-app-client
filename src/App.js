import "./App.scss";
import Auth from "./components/Auth";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useAuth } from "./hooks/auth-hook";
import { useEffect } from "react";
import { useHttpClient } from "./hooks/http-hook";
import { useUser } from "./contexts/UserContext";

function App() {
	const { token, login, logout, userId, isLoggedIn } = useAuth();
	const { setProfilePicture, setUserData, userData } = useUser();
	const { isLoading, error, sendRequest, clearError } = useHttpClient();

	useEffect(() => {
		(async () => {
			if (isLoggedIn && userId) {
				const data = await sendRequest(
					`${process.env.REACT_APP_API_URL}/api/v1/users/get/${userId}`
				);
				setUserData(data);
				setProfilePicture(data.photo);
			}
		})();
	}, [isLoggedIn, userId, setUserData, setProfilePicture, sendRequest]);

	console.log(userData);

	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/auth" component={Auth} />
					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
