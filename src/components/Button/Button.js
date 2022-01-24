import React from "react";
import './Button.css';

function Button({type, text, onClick, className, disabled}) {

    return (
        <>
            <button
                className={className}
                type={type}
                onClick={onClick}
                disabled={disabled}
            >
                {text}
            </button>
        </>
    );
}

export default Button;