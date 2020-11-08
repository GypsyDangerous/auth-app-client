import "./App.scss";
import Auth from "./components/Auth";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useAuth } from "./hooks/auth-hook";

function App() {
	const { token, login, logout, userId } = useAuth();
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
