import React from "react";
import './SignUp.css';

function SignUp() {

    return (
        <>
            <div className="form-container">
                <h2>To watch videos and other contents, please register!</h2>

                <form>
                    <input
                        type="text"
                        placeholder="Here will be a register form"
                        name="message"
                    />
                </form>

                <button type="submit">
                    Register
                </button>
            </div>
        </>
    );
}

export default SignUp;