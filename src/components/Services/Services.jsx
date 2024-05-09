import React from 'react'
import './Services.css'
import Glasses from '../../img/glasses.png'
import HeartEmoji from '../../img/heartemoji.png'
import Card from '../Card/Card'
import Resume from './UpdatedResume.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services">
      <div className="awesome">
      <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
        
        <div className="blur s-blur1" style={{ background: "#ABF9FF94" }}></div>
      </div>

      <div className="cards">
        <div style={{left:'8rem',top:'8rem'}}>
          <Card
            emoji={HeartEmoji}
            heading={"Front-End"}
            detail={"Html, Css, JavaScript, React"}
          />
        </div>
        <div style={{left:'28rem', top:'8rem'}}>
          <Card
            emoji={Glasses}
            heading={"Back-End"}
            detail={"Java, Spring Boot, Hibernate, MySQL, RESTful APIs"}
          />
        </div>
        <div className="blur s-blur2" style={{
               background:'rgb(238 210 255)' 
            }}></div>
      </div>
    </div>
  );
}

export default Services