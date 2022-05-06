import React from "react";
import "./Footer.css";
import Button from "../smallerComponents/Button";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <section>
          <div>
            <h2>Renvisa</h2>
            <p>Lorem Ipsum is dummy text of the printing.</p>
            <p>Lagos, Nigeria</p>
            <p>+234-802-2230</p>
            <p>example@example.com</p>
          </div>
          <div>
            <h4>Company</h4>
            <div>
              <span>About</span>
              <span>Blog</span>
              <span>FAQ</span>
              <span>Contact us</span>
            </div>
          </div>

          <div>
            <h4>Customer Care</h4>
            <div>
              <span>My account</span>
              <span>Terms & Conditions</span>
              <span>Claim</span>
              <span>Privacy & Policy</span>
            </div>
          </div>
          <div>
            <h4>Newsletter</h4>
            <p>
              Subscribe to our weekly Newsletter and receive updates via email.
            </p>
            <input type="text" />
            <Button text="sign up" />
          </div>
        </section>
        <article className="article">
          <p>All Rights Reserved @ Company 2022</p>
        </article>
      </footer>
    </>
  );
};

export default Footer;
