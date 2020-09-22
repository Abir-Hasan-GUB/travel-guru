import React from 'react';
import './Login.css';
import facebook from '../Images/Icon/fb.png';
import google from '../Images/Icon/google.png';
import HeaderTwo from '../HeaderTwo/HeaderTwo';

const Login = () => {
    return (
        <div className="container">
         <HeaderTwo></HeaderTwo>
            <div className="loginPanel">
                <h4 className="loginTitle">Login</h4>
                <form action="">
                    <input className="userName" placeholder="Username or Email" type="text" name="userName" id="" /> <br />
                    <input className="userName" placeholder="Password" type="password" name="password" id="" /> <br />
                    <div className="footerFrom">
                        <div className="footerFromLeft">
                            <input className="checkbox" type="checkbox" name="rememberMe" id="" />
                            <label className="rememberMe" htmlFor="rememberMe">Remember me</label>
                        </div>
                        <div className="footerFromRight">
                            <p className="forgotPass"> <a href="">Forgot Password</a></p>
                        </div>
                    </div>
                    <input className="bookingBtn" type="submit" value="Login" />
                    <p className="rememberMe footerText">Don’t have an account?
                        <a href="#" className="forgotPass">  Create an account </a></p>
                </form>
            </div>
            <h1 className="StateLine"><span className="stateLine">Or</span></h1>
            <div className="google">
                <img src={facebook} alt="" />
                <span>Continue with Facebook</span>
            </div>
            <div className="google">
                <img src={google} alt="" />
                <span>Continue with Google</span>
            </div>

            {/* ===========Create Accaount========== */}
            <div className="loginPanel loginPanelTwo">
                <h4 className="loginTitle">Login</h4>
                <form action="">
                    <input className="userName userNameTwo" placeholder="First Name" type="text" name="userName" id="" /> <br />
                    <input className="userName userNameTwo" placeholder="Last Name" type="text" name="userName" id="" /> <br />
                    <input className="userName userNameTwo" placeholder="Username or Email" type="text" name="userName" id="" /> <br />
                    <input className="userName userNameTwo" placeholder="Password" type="password" name="password" id="" /> <br />
                    <input className="userName userNameTwo" placeholder="Confirm Password" type="password" name="password" id="" /> <br />

                    <input className="bookingBtn" type="submit" value="Create an account" />
                    <p className="rememberMe footerText">Already have an account?
                        <a href="#" className="forgotPass">  Login  </a></p>
                </form>
            </div>
            <h1 className="StateLine"><span className="stateLine">Or</span></h1>
            <div className="google">
                <img src={facebook} alt="" />
                <span>Continue with Facebook</span>
            </div>
            <div className="google">
                <img src={google} alt="" />
                <span>Continue with Google</span>
            </div>

        </div>
    );
};

export default Login;