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
import PersonIcon from "@material-ui/icons/Person";
import { useForm } from "../../hooks/form-hook";
import { useHttpClient } from "../../hooks/http-hook";
import { useAuth } from "../../hooks/auth-hook";

const Register = () => {
	const [formState, inputHandler, setFormData] = useForm(
		{
			username: {
				value: "",
				isValid: false,
			},
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
	const { isLoading, error, sendRequest, clearError } = useHttpClient();

	const handleFormSubmit = async e => {
		e.preventDefault();
		const body = {
			username: formState.inputs.username.value,
			email: formState.inputs.email.value,
			password: formState.inputs.password.value,
		};
		const response = await sendRequest(
			`${process.env.REACT_APP_API_URL}/api/v1/auth/register`,
			"POST",
			JSON.stringify(body),
			{
				"Content-Type": "application/json",
			}
		);
		login(response.userId, response.token);
	};

	return (
		<div>
			<h1>Join thousands of learners from around the world </h1>
			<p>
				Master web development by making real-life projects. There are multiple paths for
				you to choose
			</p>
			<Form onSubmit={handleFormSubmit}>
				<Input
					onInput={inputHandler}
					placeholder={
						<PlaceHolder style={{ display: "flex", alignItems: "center" }}>
							<span style={{ marginRight: "1rem" }}>
								<PersonIcon />
							</span>{" "}
							Username
						</PlaceHolder>
					}
					type="text"
					name="username"
					id="username"
					required
				/>
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
					name="email"
					id="email"
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
					name="create-password"
					required
				/>

				<ButtonContainer>
					<Button type="submit">Start Coding Now</Button>
				</ButtonContainer>
			</Form>
			<Footer>
				<p>or continue with one of these social profiles</p>
				<Icons />
				<p>
					Already have an account? <Link to="/auth/login">Login</Link>{" "}
				</p>
			</Footer>
		</div>
	);
};

export default Register;
