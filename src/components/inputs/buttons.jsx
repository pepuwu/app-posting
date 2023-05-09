import React from "react";

export const ModalButtons = ({ onClick, label, id, onClick2, label2, id2 }) => {
    return (
        <React.Fragment>
            <button id={id} onClick={onClick}>{label}</button>
            <button id={id2} onClick={onClick2}>{label2}</button>
        </React.Fragment>

    )
}