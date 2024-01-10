import React, { useState } from "react";

function Form(props){
    const [name, setName] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        if (name){
            props.addTask(name);
            setName("");
        }
      }
    function handleChange(e) {
        setName(e.target.value);
    }
      
    return (
    <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
            무엇을 해야 합니까?
            </label>
        </h2>
        <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            value={name}
            onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
            추가
        </button>
    </form>
    )
}

export default Form;