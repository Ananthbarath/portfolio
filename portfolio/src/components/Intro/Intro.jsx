import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hi! I Am</span>
                <span>Ananth</span>
                <span>
"Hello! I'm a full stack developer who loves building websites from start to finish. From designing beautiful interfaces to making sure everything works smoothly behind the scenes, I've got you covered. Take a look around my portfolio and see what I can create for you!"</span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <a href='https://github.com/Ananthbarath'>
                <img src={Github} alt=''/>
                </a>
                <a href='https://www.linkedin.com/in/ananthbarath-r-s-977ba522b/'><img src={LinkedIn} alt=''/></a>
                
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1}/>
            <img src={Vector2}/>
            <img src={boy}/>
            <img src={glassesimoji} alt="" />
            <div style={{top: '-4%', left:'55%'}}>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </div>
            <div style={{top:'18.4rem',left:'0%'}}>
                <FloatingDiv image={thumbup} txt1='Full Stack' txt2='Developer'/>
            </div>
            <div className="blur" style={{background: "rgb(238 210 255)"}}>
            </div>
            <div className="blur" style={{
               background:'#C1F5FF',
               top:'17rem',
               height:'11rem',
               width:'21rem',
               left:'-9rem' 
            }}></div>
        </div>
    </div>
  )
}

export default Intro