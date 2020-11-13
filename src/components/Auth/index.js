import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import Input from "../shared/FormElements/Input";
import AuthComponent from "./Auth.styled";
import Login from "./Login";
import { ReactComponent as Logo } from "./logo.svg";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Register from "./Register";
import { useAuth } from "../../hooks/auth-hook";
import { AnimatePresence, motion } from "framer-motion";

const pages = (direction = 1) => ({
	in: {
		x: 0,
		opacity: 1,
		// scale: 1,
	},
	out: {
		x: 250 * direction,
		opacity: 0,
		// scale: 0
	},
	initial: {
		// scale: 0,
		x: 250 * direction * -1,
		opacity: 0,
	},
});

const transition = {
	duration: 0.25,
	// delay: 0.25,
};

const Auth = ({ match, history }) => {
	const { isLoggedIn } = useAuth();
	const [height, setHeight] = useState(0);
	const [show, setShow] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setShow(false);
		}, 4000);
		if (isLoggedIn) {
			setTimeout(() => {
				history.push("/");
			}, 100);
		}
	}, [isLoggedIn, history]);

	const measureHeight = node => {
		console.log(node);
		if (node) setHeight(node.offsetHeight + 26 + 24);
	};

	const location = useLocation();

	return (
		<AuthComponent
			animate={{ scale: 1, opacity: 1, rotate: 360 }}
			initial={{ scale: 0, opacity: 0, rotate: 0 }}
			transition={{ duration: 0.5, when: "beforeChildren" }}
			height={height}
		>
			<span style={{ display: "inline-block", marginBottom: "1.5rem" }}>
				<Logo />
			</span>
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path={`${match.url}/login`}>
						<motion.div
							ref={measureHeight}
							key="login"
							exit="out"
							animate="in"
							initial="initial"
							variants={pages(1)}
							transition={transition}
						>
							<Login />
						</motion.div>
					</Route>
					<Route path={`${match.url}/register`}>
						<motion.div
							ref={measureHeight}
							key="register"
							exit="out"
							animate="in"
							initial="initial"
							transition={transition}
							variants={pages(-1)}
						>
							<Register />
						</motion.div>
					</Route>
					<Redirect to={`${match.url}/login`} />
				</Switch>
			</AnimatePresence>
		</AuthComponent>
	);
};

export default Auth;
