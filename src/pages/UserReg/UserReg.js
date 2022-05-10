import React, { useState } from "react";
import "./UserReg.css";
import login from "../../assets/login.svg";
import register from "../../assets/register.svg";

const UserReg = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [isFgPassword, setIsFgPassword] = useState(false);

  if (isFgPassword) {
    return (
      <section className="userReg">
        <article className="userReg_one">
          <img src={register} alt="register" className="noname" />
          <h1>check eligibility for a Home-Shopping budget</h1>
          <p>
            With your budget in hand, go shopping for your new home. Make a down
            payment, move into your new home and get ready to own it, with
            built-in savings and your monthly rent for each month.
          </p>
        </article>
        <article className="userReg_two">
          <h1>Forgot your password</h1>
          <p style={{ fontSize: "18px" }}>
            Enter your email address and we will send you instructions to reset
            your password.
          </p>
          <p style={{ fontSize: "18px" }}>
            For security reason, we do NOT store your password. So rest assured
            that we will never send your password via email.
          </p>

          <form>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="" id="email" />
            <button>Send Instructions</button>
            <p>
              <strong onClick={() => setIsFgPassword(false)}>
                Back to Log In
              </strong>
            </p>
          </form>
        </article>
      </section>
    );
  }
  return (
    <section className="userReg">
      <article className="userReg_one">
        {isSignUp ? (
          <img src={register} alt="register" className="noname" />
        ) : (
          <img src={login} alt="login" className="noname" />
        )}
        <h1>check eligibility for a Home-Shopping budget</h1>
        <p>
          With your budget in hand, go shopping for your new home. Make a down
          payment, move into your new home and get ready to own it, with
          built-in savings and your monthly rent for each month.
        </p>
      </article>
      <article className="userReg_two">
        <h1>{isSignUp ? "Create your account" : "Welcome back to Renvisa"}</h1>
        <p>
          {isSignUp
            ? "Enter the information below to create your account"
            : "Log in to your account"}
        </p>
        {isSignUp ? (
          <form>
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" />
            <label htmlFor="email">Email Address</label>
            <input type="email" name="" id="email" />
            <label htmlFor="phoneNo">Phone Number</label>
            <input type="text" id="phoneNo" />
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <p>
              By clicking Sign Up, you agree to accept our{" "}
              <strong>Terms and Conditions and Privacy Policy</strong>.
            </p>
            <button>Sign Up</button>
            <p>
              Already have an account?{" "}
              <strong onClick={() => setIsSignUp(false)}>Log In</strong>
            </p>
          </form>
        ) : (
          <form>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <p>
              <strong onClick={() => setIsFgPassword(true)}>
                Forgot Password?
              </strong>
            </p>
            <button>Log In</button>
            <p>
              Don't have an account?{" "}
              <strong onClick={() => setIsSignUp(true)}>Sign Up</strong>
            </p>
          </form>
        )}
      </article>
    </section>
  );
};

export default UserReg;
