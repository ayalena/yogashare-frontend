import React from "react";
import './SignIn.css';

function SignIn() {

    return (
        <>
            <div className="form-container">
                <h2>To watch videos and other contents, please log in!</h2>

                <form>
                    <input
                        type="text"
                        placeholder="Here will be a login form"
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

export default SignIn;