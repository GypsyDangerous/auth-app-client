import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContext";
import { UserContextProvider } from "./contexts/UserContext";

ReactDOM.render(
	<React.StrictMode>
		<UserContextProvider>
			<AuthContextProvider>
				<Router>
					<App />
				</Router>
			</AuthContextProvider>
		</UserContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
