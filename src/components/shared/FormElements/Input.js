import React, {useEffect, useReducer} from 'react'

import "./Form.css"
import {validate} from "../util/validators"

const inputReducer = (state, action) => {
    switch(action.type){
        case "CHANGE":
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            }
        case "TOUCH":
            return{
                ...state,
                isTouched: true
            }
        default:
            return state
    }
}

const Input = props => {

    const [inputState, dispatch] = useReducer(inputReducer, {value: props.value || "", isValid: !!props.value, isTouched: false})

    let {id, onInput} = props;
    const {value, isValid} = inputState

    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput])

    const changeHandler = e => {
        dispatch({type: "CHANGE", val: e.target.value, validators: props.validators})
    }

    const touchHandler = () => {
        dispatch({type: "TOUCH"})
    }


    const elt = (props.element === "input" || props.type) ? 
        <input min="0" id={props.id}  type={props.type} name={props.name} placeholder={props.placeholder} onChange={changeHandler} value={inputState.value} onBlur={touchHandler} className={props.className}></input> : 
        <textarea id={props.id} rows={props.rows || 3} placeholder={props.placeholder} name={props.name} onChange={changeHandler} value={inputState.value} onBlur={touchHandler} className={props.className}></textarea>

    return (
        <div style={props.style || {}} className={`inputBox ${!inputState.isValid && inputState.isTouched && "form-control--invalid"}`}>
            <label htmlFor={props.id}>{props.labelHTML || props.label}</label>
            {elt}
            {!inputState.isValid && inputState.isTouched && <div>{props.errorText}</div>}
        </div>
    )
}

export default Input
