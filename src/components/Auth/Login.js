import React, { useState } from "react";
import Input from "../shared/FormElements/Input";
import Form, { ButtonContainer, Footer } from "./Form.styled";
import MailIcon from "@material-ui/icons/Mail";
import { PlaceHolder } from "./Auth.styled";
import LockIcon from "@material-ui/icons/Lock";
import Button from "../shared/FormElements/Button";
import { Link } from "react-router-dom";
import IconButton from "../shared/IconButton";
import { useForm } from "../../hooks/form-hook";
import Icons from "./Icons";
import ErrorText from "../shared/Error.styled";
import { useAuth } from "../../hooks/auth-hook";
import { useHttpClient } from "../../hooks/http-hook";

const Login = () => {
	const [formState, inputHandler, setFormData] = useForm(
		{
			email: {
				value: "",
				isValid: false,
			},
			password: {
				value: "",
				isValid: false,
			},
		},
		false
	);

	const { token, login, logout, userId, isLoggedIn } = useAuth();
	const { isLoading, error: authError, sendRequest, clearError } = useHttpClient();

	const handleFormSubmit = async e => {
		e.preventDefault();
		clearError()
		const body = {
			email: formState.inputs.email.value,
			password: formState.inputs.password.value,
		};
		const response = await sendRequest(
			`${process.env.REACT_APP_API_URL}/api/v1/auth/login`,
			"POST",
			JSON.stringify(body),
			{
				"Content-Type": "application/json",
			}
		);
		if(response){
			login(response.userId, response.token);
		}
	};

	return (
		<div>
			<h1>Login</h1>
			<Form onSubmit={handleFormSubmit}>
				<Input
					onInput={inputHandler}
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
					onInput={inputHandler}
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
				{authError && <ErrorText className="error">{authError}</ErrorText>}
				<ButtonContainer>
					<Button type="submit">Login</Button>
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
