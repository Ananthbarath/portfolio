import React from 'react'
import emailjs from 'emailjs-com';
import './Contact.css'
import { useState } from 'react';
import { useRef } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_6uucvpf', 'template_in8c1bk', e.target, 'K-Jzmp5C1MSaK2DoN')
          .then((result) => {
            console.log(result.text);
            setDone(true);
          }, (error) => {
            console.log(error.text);
          });
        e.target.reset();
      };
  return (
   <div className="contact-form">
    <div className="w-left">
        <div className="awesome">
            <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
            <span>Contact me</span>
            <div 
                className='blur s-blur1'
                style={{background:"#ABF1FF94"}}>

            </div>
        </div>
    </div>

    <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='user_name' className='user' placeholder='Name'/>
            <input type='email' name='user_email' className='user' placeholder='Email'/>
            <textarea name='message' className='user' placeholder='Message'/>
            <input type='submit' value='Send' className='button'/>
            <span>{done && "Your Message sent successfully"}</span>
            <div
                className='blur c-blur1'
                style={{background:"rgb(238 210 255)"}}
            >

            </div>
        </form>
    
    </div>

   </div>



  )
}

export default Contact