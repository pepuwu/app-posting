import React from "react";

export const SelectFromList = ({ handleChange, selectList, label, id, name, isNew, value }) => {
    return (
        <React.Fragment>
            <label id={id}>{label}</label>
            <select id={id} name={name} onChange={handleChange} disabled={isNew} value={value}>
                {selectList.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </React.Fragment>
    )
}
