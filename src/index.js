import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContext";
import { UserContextProvider } from "./contexts/UserContext";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const client = new ApolloClient({
	uri: `${process.env.REACT_APP_API_URL}/graphql`,
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<React.StrictMode>
		<UserContextProvider>
			<AuthContextProvider>
				<ApolloProvider client={client}>
					<Router>
						<App />
					</Router>
				</ApolloProvider>
			</AuthContextProvider>
		</UserContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
