import React from "react";
import "./Login.css";

const Login = () => {
    return (
        <>
            <div className="container">

                <div className="login-content">
                    <form action="index.html">
                        <img src="images.png" />
                        <h2 className="title">Welcome</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <h5>Username</h5>
                                <input type="text" className="input" />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <h5>Password</h5>
                                <input type="password" className="input" />
                            </div>
                        </div>
                        <a href="#">Forgot Password?</a>
                        <input type="submit" className="btn" value="Login" />
                    </form>
                </div>
            </div>
        </>
    );
}