import { createContext, useState, useCallback } from "react";
import { daysToMilli } from "../utils/functions";

export const AuthContext = createContext({
	isLoggedIn: false,
	userId: null,
	token: null,
	expiryDate: null,
	login: () => {},
	logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
	const [token, setToken] = useState(false);
	const [expiryDate, setExpireDate] = useState();
	const [userId, setUserId] = useState(false);

	const login = useCallback((uid, token, Expiry) => {
		setToken(token);
		setUserId(uid);
		const ExpiryDate = Expiry || new Date(new Date().getTime() + daysToMilli(1));
		setExpireDate(ExpiryDate);
		localStorage.setItem(
			process.env.REACT_APP_AUTH_TOKEN,
			JSON.stringify({
				userId: uid,
				token: token,
				ExpiryDate: ExpiryDate.toISOString(),
			})
		);
	}, []);

	const logout = useCallback(() => {
		localStorage.removeItem(process.env.REACT_APP_AUTH_TOKEN);
		setToken(null);
		setExpireDate(null);
		setUserId(null);
	}, []);

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: !!token,
				token,
				userId,
				login,
				logout,
				expiryDate,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
