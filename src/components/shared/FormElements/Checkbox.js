import React, { useRef, useState, useEffect } from 'react'

import "./Form.css"
import "./Checkbox.css"
// import { validate } from "../util/validators"

const Checkbox = ({value, ...props}) => {
    const { id, onInput } = props;
    const checkRef = useRef(false)
    const [checked, setCheck] = useState(false)

    useEffect(() => {
        if(value){
            setCheck(value)
        }
    }, [value])

    useEffect(() => {
        onInput(id, checked, true)
    }, [id, checked, onInput])

    const clickHandler = e => {
        setCheck(c => !c)
    }

    return (
        <div className="checkbox">
            <label className="label" htmlFor="box">{props.label}</label>
            <label className="switch">
                <input ref={checkRef} checked={checked} onChange={clickHandler} onClick={props.onClick || function(){}} type="checkbox" name={props.name} id="box"/>
                <span className="slider"></span>
            </label>
        </div>
    )
}

export default Checkbox
