import React, {useEffect, useState} from "react";
import './SignUp.css';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";

import PageHeader from "../../components/PageHeader/PageHeader";
import logo from "../../assets/ohm.png"
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

function SignUp() {
    // state for form
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [usernameValue, setUsernameValue] = useState('');

    //state for functionality
    const history = useHistory();

    const [error, toggleError] = useState(false)
    const [loading, toggleLoading] = useState(false);

    //cancel token for network request
    const source = axios.CancelToken.source();

    // if page gets unmounted, abort request
    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, []);

    //custom server
    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);
        try {
            const result = await axios.post("http://localhost:8081/api/auth/signup", {
                username: usernameValue,
                password: passwordValue,
                email: emailValue,
            }, {
                cancelToken: source.token,
            })
            history.push("/signin")
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }

    return (
        <>
            <PageHeader icon={logo} title="Register"/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="signUp">
                    <div className="form-container">
                        <p>Please register using this form:</p>

                        <div className="input-container">
                        <div>
                            <label htmlFor="email"> E-mail: </label>
                            <input
                                type="text"
                                placeholder=""
                                name="email"
                                value={emailValue}
                                onChange={(e) => setEmailValue(e.target.value)}
                            />
                            {error && <p className="error"> This email is already in use.</p>}
                        </div>

                        <div>
                            <label htmlFor="password"> Password: </label>
                            <input
                                type="password"
                                placeholder=""
                                name="password"
                                value={passwordValue}
                                onChange={(e) => setPasswordValue(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="username"> Username: </label>
                            <input
                                type="text"
                                placeholder=""
                                name="username"
                                value={usernameValue}
                                onChange={(e) => setUsernameValue(e.target.value)}
                            />
                            {error && <p className="error"> This username is already in use.</p>}

                        </div>
                    </div>
                        <Button
                            type="submit"
                            className="round-button"
                            disabled={loading}
                            text="Register!"
                        >
                            Register
                        </Button>
                        {error && <p className="error">Username or e-mail already in use</p>}

                        <p>If you already have an account, you can log in <Link to="/signin">here</Link></p>

                    </div>
                </label>
            </form>
            <Footer/>
        </>
    );
}

export default SignUp;