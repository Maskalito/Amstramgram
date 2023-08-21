import React, { useState } from "react";

const Login = () => {
  return (
    <section className="login">
      <div className="right-column">
        <div className="box">
          <img src="assets/logo.png" className="brand-img" alt="" />
          <form className="login-form">
            <input
              type="text"
              className="login-box"
              name="email"
              placeholder="Email"
            />
            <input
              type="text"
              className="login-box"
              name="password"
              placeholder="Password"
            />
            <button className="login-button" type="submit">
              Log in
            </button>
            <div className="separation">
              <div className="dash" />
              <div className="or">or</div>
              <div className="dash" />
            </div>
            <div className="wrapper">
              <p>Don't have an account?</p>
              <a className="sign-up" href="/login">
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
      <footer className="footer" />
    </section>
  );
};

export default Login;
