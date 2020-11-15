import { useEffect, useReducer, useState, useCallback } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import clsx from "clsx";
import "./Form.css";
import { validate } from "../../../utils/validators";

const useStyles = makeStyles(theme => ({
	margin: {
		margin: theme.spacing(1),
	},
}));

const inputReducer = (state, action) => {
	switch (action.type) {
		case "CHANGE":
			const valid = validate(action.val, action.validators)
			return {
				...state,
				value: action.val,
				isValid: valid ? valid : state.isValid 
			};
		case "TOUCH":
			return {
				...state,
				isValid: validate(action.val, action.validators),
				isTouched: true,
			};
		default:
			return state;
	}
};

const CustomInput = props => {
	const [inputState, dispatch] = useReducer(inputReducer, {
		value: props.value || "",
		isValid: !props.value,
		isTouched: false,
	});
	const [labelSize, setLabelSize] = useState(0);
	const [showPassword, setShowPassword] = useState(false);

	const calculateLabelSize = node => {
		setLabelSize(node?.offsetWidth);
	};

	let { id, onInput } = props;
	const { value, isValid } = inputState;

	useEffect(() => {
		onInput(id, value, isValid);
	}, [id, value, isValid, onInput]);

	const changeHandler = e => {
		dispatch({ type: "CHANGE", val: e.target.value, validators: props.validators || [] });
	};

	const touchHandler = e => {
		console.log(e.target.value.trim().length)
		dispatch({ type: "TOUCH", val: e.target.value, validators: props.validators || [] });
	};

	const elt =
		props.element === "input" || props.type ? (
			<input
				required={props.required}
				min="0"
				id={props.id}
				type={props.type}
				name={props.name}
				placeholder={props.placeholder}
				onChange={changeHandler}
				value={inputState.value}
				onBlur={touchHandler}
				className={props.className}
			></input>
		) : (
			<textarea
				id={props.id}
				rows={props.rows || 3}
				placeholder={props.placeholder}
				name={props.name}
				onChange={changeHandler}
				value={inputState.value}
				onBlur={touchHandler}
				className={props.className}
			></textarea>
		);

	const classes = useStyles();
	return (
		<FormControl
			error={inputState.isTouched && !inputState.isValid}
			className={clsx(classes.margin)}
			variant="outlined"
		>
			<InputLabel ref={calculateLabelSize} htmlFor={props.id}>
				{props.placeholder}
			</InputLabel>
			<OutlinedInput
				required={props.required}
				id={props.id}
				onBlur={touchHandler}
				name={props.name}
				type={props.type === "password" ? (showPassword ? "text" : "password") : props.type}
				value={inputState.value}
				onChange={changeHandler}
				startAdornment={props.icon}
				endAdornment={
					props.type === "password" ? (
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={() => {
									setShowPassword(prev => !prev);
								}}
								onMouseDown={() => {
									setShowPassword(prev => !prev);
								}}
								edge="end"
							>
								{showPassword ? <Visibility /> : <VisibilityOff />}
							</IconButton>
						</InputAdornment>
					) : (
						<></>
					)
				}
				labelWidth={labelSize}
			/>
			{inputState.isTouched && !inputState.isValid && (
				<FormHelperText id="standard-weight-helper-text">{props.helpText}</FormHelperText>
			)}
		</FormControl>
	);
};

export default CustomInput;
