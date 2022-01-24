import React, {useContext, useEffect, useState} from "react";
import './SignIn.css';
import {AuthContext} from "../../context/AuthContext";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import PageHeader from "../../components/PageHeader/PageHeader";
import logo from "../../assets/ohm.png";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

function SignIn() {
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [error, toggleError] = useState(false);

    const {logIn} = useContext(AuthContext);
    const history = useHistory();
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
        try {
            const result = await axios.post("http://localhost:8080/api/auth/signin", {
                username: usernameValue,
                password: passwordValue,
            }, {
                cancelToken: source.token,
            })
            //display result
            console.log(result.data);
            //pass token to login function from context
            logIn(result.data.accessToken);
            //push to profile page after
            history.push("/userprofile");
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    //fake server
    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     toggleError(false);
    //     try {
    //         const result = await axios.post('http://localhost:3000/login', {
    //             email: emailValue,
    //             password: passwordValue,
    //         }, {
    //             cancelToken: source.token,
    //         })
    //         //display result
    //         console.log(result.data);
    //         //pass token to login function from context
    //         logIn(result.data.accessToken);
    //         //push to profile page
    //         history.push("/userprofile");
    //     } catch (e) {
    //         console.error(e);
    //         toggleError(true);
    //     }
    // }


    return (
        <>
            <PageHeader icon={logo} title="Login"/>
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <p>To watch our media content, please log in!</p>

                    <div className="input-container">
                    <div>
                        <label htmlFor="username"> Username: </label>
                        <input
                            type="text"
                            placeholder=""
                            name="username"
                            value={usernameValue}
                            onChange={(e) => setUsernameValue(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password"> Wachtwoord: </label>
                        <input
                            type="text"
                            placeholder=""
                            name="password"
                            value={passwordValue}
                            onChange={(e) => setPasswordValue(e.target.value)}
                        />
                    </div>
                        {error && <p className="error">Username or password is wrong</p>}
                    </div>

                    <Button
                        type="submit"
                        className="round-button"
                        text="Log in!"
                    >
                    </Button>

                    <p>If you don't have an account yet, you can register <Link to="/signup">here</Link></p>
                </div>
            </form>
            <Footer/>
        </>
    );
}

export default SignIn;