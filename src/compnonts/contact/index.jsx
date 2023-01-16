import React from "react";
import "./style.css";
import wtp from "../../assets/icons/icons8-whatsapp-ios-16-32.png";
import phone from "../../assets/icons/icons8-phone-call-outline-32.png";
import gmail from "../../assets/icons/icons8-gmail-logo-ios-16-32.png";
const index = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="text">
        <span>send me a message via</span>
        <h3>Contact</h3>
      </div>
      <div className="forms">
        <form action="">
          <input type="text" name="" id="" placeholder="enter your  name" />
          <input type="email" name="" id="" placeholder="enter your  email" />
          <textarea name="message" id="" cols="30" rows="10"></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="forms-text">
          <p>
            If you have any questions or want to make me an offer, please feel
            free to drop me a line or more. I'll get back to you as soon as I
            can. I'm also available for collaborations. Reach out and let's
            TechNet (Connect). Also available via
          </p>
          <a href="">
            <img src={phone} alt="" />
          </a>
          <a href="">
            <img src={wtp} alt="" />
          </a>
          <a href="">
            <img src={gmail} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default index;
