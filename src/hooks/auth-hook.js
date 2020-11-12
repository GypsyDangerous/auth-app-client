import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

let logoutTimer;

export const useAuth = () => {
	const context = useContext(AuthContext);
	const [loaded, setLoaded] = useState(false)
	const { isLoggedIn, token, userId, login, logout, expiryDate } = context;
	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN));
		if (userData && userData.token && new Date(userData.ExpiryDate) > new Date()) {
			login(userData.userId, userData.token, new Date(userData.ExpiryDate));
		} else {
			logout();
		}
		setLoaded(true)
	}, [login, logout]);

	useEffect(() => {
		if (token && expiryDate) {
			logoutTimer = setTimeout(logout, expiryDate.getTime() - new Date().getTime());
		} else {
			clearTimeout(logoutTimer);
		}
	}, [token, logout, expiryDate]);

	return { loaded, token, login, logout, userId, isLoggedIn };
};
