import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
      <>
      <footer className='footer'>
          <div>
              <img src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/logo.png' alt=''/>
              <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.</p>
               <p>Brooklyn, New York, United States</p>
               <p>+0123-456789</p>
               <p>example@example.com</p>
          </div>
          <div>
              <h4>Company</h4>
              <div>
                  <ul>
                   <span>About</span>
                   <span>Blog</span>
                   <span>All Products</span>
                   <span>Contact</span>
                   <span>FAQ</span>
                   <span>Contact us</span>
              </ul>
              </div>
          </div>
          <div>
               <h4>Services</h4>
               <div>
                   <ul>
                    <span>Cart</span>
                    <span>Wish List</span>
                    <span>Login</span>
                    <span>Checkout</span>
                    <span>Terms & Conditions</span>
                    <span>Promotional Offers</span>
               </ul>
               </div>
          </div>
          <div>
               <h4>Customer Care</h4>
               <div>
                   <ul>
                    <span>Login</span>
                    <span>My account</span>
                    <span>Wish List</span>
                    <span>Add listing</span>
                    <span>FAQ</span>
                    <span>Contact us</span>
               </ul>
               </div>
          </div>
          <div>
               <h4>Newsletter</h4>
                <p>Subscribe to our weekly Newsletter and receive updates via email.</p>

               <h4>We Accept</h4>
               <img className='spec' src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/icons/payment-4.png' alt='' />
          </div>
         
     <article className='article'>
            <p>All Rights Reserved @ Company 2022</p>
            <div>
                <h6>Terms & Conditions</h6>
                <h6>Claim</h6>
                <h6>Privacy & Policy</h6>
            </div>
        </article>
    </footer>
    </>
  ) 
}

export default Footer