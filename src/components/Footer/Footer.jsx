import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span className="fooots">tosinotenaike3@gmail.com</span>
        <div className="f-icons">
        <a href="https://instagram.com/sylvercodez1" target="_blank"> <Insta  color="white" size={"3rem"} /></a> 
         <a href="https://www.facebook.com/totenaike" target="_blank"> <Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/sylvercodez"target="_blank"><Gitub color="white" size={"3rem"} /></a>
          <a href="https://twitter.com/sylvercodez1"target="_blank"><Twitter color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
