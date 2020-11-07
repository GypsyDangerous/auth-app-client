import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./Button.css";

const ButtonElement = props => {
	if (props.href) {
		return (
			<a
				className={`button button--${props.size || "default"} ${
					props.inverse && "button--inverse"
				} ${props.danger && "button--danger"}`}
				href={props.href}
			>
				{props.children}
			</a>
		);
	}
	if (props.to) {
		return (
			<Link
				to={props.to}
				exact={props.exact}
				className={`button button--${props.size || "default"} ${
					props.inverse && "button--inverse"
				} ${props.danger && "button--danger"}`}
			>
				{props.children}
			</Link>
		);
	}
	return (
		<Button type="submit" variant="contained" color="primary">
			{props.children || props.value}
		</Button>
	);
};

export default ButtonElement;
