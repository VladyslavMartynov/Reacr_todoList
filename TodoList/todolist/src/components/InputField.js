import React from 'react';

const InputField = ({ text, handleInput, handleSubmit }) => {
    return (
        <label className="input__submit">
            <input type="text" value={text} onChange={handleInput}/>
            <button onClick={handleSubmit} className="input__btn">Add</button>
        </label>
    );
};

export default InputField;