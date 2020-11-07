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
import PersonIcon from '@material-ui/icons/Person';

const Register = () => {
	return (
		<div>
			<h1>Join thousands of learners from around the world </h1>
			<p>
				Master web development by making real-life projects. There are multiple paths for
				you to choose
			</p>
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
					required
				/>
				<ButtonContainer>
					<Button>Start Coding Now</Button>
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
