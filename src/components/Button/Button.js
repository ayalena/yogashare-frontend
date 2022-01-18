import React from "react";
import './Button.css';

function Button({type, text}) {

    return (
        <>
            <button
                type={type}
            >
                {text}
            </button>
        </>
    );
}

export default Button;