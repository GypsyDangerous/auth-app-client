import React from "react";
import { useParams } from "react-router";
import Input from "../shared/FormElements/Input";
import AuthComponent from "./Auth.styled";
import Login from "./Login";
import { ReactComponent as Logo } from "./logo.svg";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Register from "./Register";

const Auth = ({ match }) => {
	return (
		<AuthComponent>
			<span style={{ display: "inline-block", marginBottom: "1.5rem" }}>
				<Logo />
			</span>
			<Switch>
				<Route path={`${match.url}/login`} component={Login} />
				<Route path={`${match.url}/register`} component={Register} />
				<Redirect to={`${match.url}/login`} />
			</Switch>
		</AuthComponent>
	);
};

export default Auth;
