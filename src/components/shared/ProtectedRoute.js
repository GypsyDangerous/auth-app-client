import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../hooks/auth-hook";

const ProtectedRoute = ({ component: RouteComponent, ...rest }) => {
	const { isLoggedIn } = useAuth();
	return (
		<Route
			{...rest}
			render={routeProps =>
				isLoggedIn ? <RouteComponent {...routeProps} /> : <Redirect to="/auth/login" />
			}
		/>
	);
};

export default ProtectedRoute;
