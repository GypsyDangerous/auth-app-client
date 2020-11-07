import React from "react";
import Input from "../shared/FormElements/Input";
import Form from "./Form.styled"

const Login = () => {
	return (
		<div>
			<h1>Join thousands of learners from around the world </h1>
			<p>
				Master web development by making real-life projects. There are multiple paths for
				you to choose
			</p>
			<Form>
				<Input onInput={() => {}} placeholder="Email" type="email" required/>
				<Input onInput={() => {}} placeholder="Password" type="password" required/>
			</Form>
		</div>
	);
};

export default Login;
