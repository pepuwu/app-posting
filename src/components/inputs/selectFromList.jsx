import React from "react";

export const SelectFromList = ({ handleChange, selectList, label, id, name, isNew }) => {
    return (
        <React.Fragment>
            <label id={id}>{label}</label>
            <select id={id} name={name} onChange={handleChange} disabled={isNew}>
                {selectList.map((item) => (
                    <option key={item.value} value={item.label}>
                        {item.label}
                    </option>
                ))}
            </select>
        </React.Fragment>
    )
}
{/* <SelectFromList handleChange={handleChange} selectList={register.isNew ? statusInitializedList : statusList} label={'Status'} id={'status'} name={'status'} /> */ }