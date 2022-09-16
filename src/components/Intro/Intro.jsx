import React, { useContext,useState, useEffect } from "react";
// import {  } from "react";
import "./Intro.css";
import boy from "../../img/biggy.png";

import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Intro = () => {
  // Transition
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Wordpress Developer", "Product Manager" ];
  const period = 2000;

  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am Sylvercodez</span>
          <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Wordpress developeer", "Product Manager" ]'><span className="wrap">A {text}</span></span>
         
          <span style={{ color: darkMode ? "white" : "" }} className={ darkMode ? "smaller" : "bosss" } >
          A seasoned professional with over 2 years' work experience in Front End development with a
passion for responsive web designs and finding solutions. I am adept in applying HTML, CSS,
React, BootStrap, JavaScript, Python, Django and Wordpress development  to building innovative
and customer centric products with a mobile first approach.  
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
        <a href="https://github.com/sylvercodez"target="_blank">  <img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/sylvercodez" target="_blank"> <img src={LinkedIn} alt="" /> </a>
          <a href="https://instagram.com/sylvercodez1" target="_blank">  <img src={Instagram} alt="" /> </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        {/* <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
       */}
        <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                   <img src={boy} className="imgss" alt="" />
                </div>}
            </TrackVisibility>
        {/* animation */}
      

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
