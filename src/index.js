import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { AuthContextProvider } from "./contexts/AuthContext";
import { UserContextProvider } from "./contexts/UserContext";

ReactDOM.render(
	<React.StrictMode>
		<AuthContextProvider>
			<UserContextProvider>
				<App />
			</UserContextProvider>
		</AuthContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
