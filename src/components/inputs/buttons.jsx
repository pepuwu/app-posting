import React from "react";

export const ModalButtons = ({ onClick, label, id }) => {
    return (
        <React.Fragment>
            <button id={id} onClick={onClick}>{label}</button>
        </React.Fragment>

    )
}