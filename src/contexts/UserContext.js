import { createContext, useState, useCallback, useEffect, useContext } from "react";

export const UserContext = createContext({
	userData: {},
	profilePicture: "",
});

export const UserContextProvider = ({ children }) => {
	const [userData, setUserData] = useState();
	const [profilePicture, setProfilePicture] = useState();

	return (
		<UserContext.Provider
			value={{
				userData,
				profilePicture,
				setUserData,
				setProfilePicture,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	const context = useContext(UserContext)
	if(!context){
		throw new Error("useUser must be used within a userContext Provider")
	}
	return context
}
