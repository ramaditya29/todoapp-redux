import React from 'react';

const InputField = ({placeholder , onChangeHandler, value, type}) => {
    return (
        <input type={type} placeholder={placeholder} value={value} onChange={onChangeHandler}/>
    )
}

export default InputField;