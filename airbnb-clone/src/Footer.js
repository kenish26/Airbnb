import React from 'react';

import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer () {

  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-social-media">
        <a href="/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </section>
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
             <h2> Globatross</h2>
              Book correct Rental place for you now !!!
              
          </section>
          <section className="footer-info__returns">
            <h2>Become Host</h2>
            Advertise all the comforts you provide with us with our 1000+ users.
          </section>        
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
            globatross.info@gmail.com
          </section>
          <section className="footer-info__terms">
            Terms and Conditions
            <br />
            © 2021 GLOBATROSS!All rights are reserved.
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
            6261875361
          </section>
          <section className="footer-info__contact">
            <h2>Motivation:</h2>
            To let people enjoy the real meaning of life and comfort.
            <br />
            Contact Us:
            <br />
            <FacebookIcon />
            <LinkedInIcon />
            <InstagramIcon />
            <TwitterIcon />

          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  )

}

export default Footer;