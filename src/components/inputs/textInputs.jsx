import React from "react";

export const TextInputs = ({ handleChange, label, id, name, value }) => {
    return (
        <React.Fragment>
            <label id='name'>{label}</label>
            <input type='text' id={id} name={name}
                value={value} onChange={handleChange} />

        </React.Fragment>

    )
}