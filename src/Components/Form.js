import React from 'react';

const Form = (props) => {

    const handleChange = event => {
        const {name, value} = event.target;

        props.change(name, value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.submit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name 
                <input type="text" placeholder="Enter your name" name="name" value={props.values.name} onChange={handleChange} />
            </label>
            <label>Email 
                <input type="email" placeholder="Enter your email" name="email" value={props.values.email} onChange={handleChange} />
            </label>
            <label>Role 
                <input type="text" placeholder="Enter your role" name="role" value={props.values.role} onChange={handleChange} />
            </label>
            <input type="submit" />
        </form>
    )
}

export default Form;