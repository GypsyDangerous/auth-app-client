import React from 'react';
import { useParams } from 'react-router';
import Input from '../shared/FormElements/Input';
import AuthComponent from "./Auth.styled"
import Login from './Login';
import {ReactComponent as Logo} from './logo.svg';

const Auth = () => {

	const {type} = useParams()

	return (
		<AuthComponent>
			<Logo/>
			<Login/>
		</AuthComponent>
	);
}

export default Auth;
