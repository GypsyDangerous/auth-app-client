import React from "react";
import Input from "../shared/FormElements/Input";
import Form, { ButtonContainer, Footer } from "./Form.styled";
import MailIcon from "@material-ui/icons/Mail";
import { PlaceHolder } from "./Auth.styled";
import LockIcon from "@material-ui/icons/Lock";
import Button from "../shared/FormElements/Button";
import { Link } from "react-router-dom";
import IconButton from "../shared/IconButton";
import Icons from "./Icons";

const Login = () => {
	return (
		<div>
			<h1>Login</h1>
			<Form
				onSubmit={e => {
					e.preventDefault();
				}}
			>
				<Input
					onInput={() => {}}
					placeholder={
						<PlaceHolder style={{ display: "flex", alignItems: "center" }}>
							<span style={{ marginRight: "1rem" }}>
								<MailIcon />
							</span>{" "}
							Email
						</PlaceHolder>
					}
					type="email"
					id="email"
					name="email"
					required
				/>
				<Input
					onInput={() => {}}
					placeholder={
						<PlaceHolder style={{ display: "flex", alignItems: "center" }}>
							<span style={{ marginRight: "1rem" }}>
								<LockIcon />
							</span>{" "}
							Password
						</PlaceHolder>
					}
					type="password"
					id="password"
					name="enter-password"
					required
				/>
				<ButtonContainer>
					<Button>Login</Button>
				</ButtonContainer>
			</Form>
			<Footer>
				<p>or continue with one of these social profiles</p>
				<Icons />
				<p>
					Don’t have an account yet? <Link to="/auth/register">Register</Link>{" "}
				</p>
			</Footer>
		</div>
	);
};

export default Login;

