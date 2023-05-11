import React from "react";

export const ModalButtons = ({ onClick, label, className }) => {
    return (
        <React.Fragment>
            <button className={className} onClick={onClick}>{label}</button>
        </React.Fragment>

    )
}