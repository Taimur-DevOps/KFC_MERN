import React from 'react'
import "./Footer.css"
import logo from "../assets/logo.png"
import applebadge from "../assets/applebadge.svg"
import googlebadge from "../assets/googlebadge.svg"

const Footer = () => {
  return (
    <div className='container'>

            <div className='upperFooter'>
                <a href="/"> <img src={logo} alt="logo" /> </a>
                <hr/>
                <a href="https://www.youtube.com/channel/UCg4hfdWApV0Uea6aFW7PZUg"> <div className='iconDiv'><i className="fa fa-youtube-play" style={{fontSize:"19px", color:"red"}}></i></div></a>
                <a href="https://www.instagram.com/kfcpakistanofficial/?hl=en"> <div className='iconDiv'><i className="fa fa-instagram" style={{fontSize:"19px", color:"#000"}}></i></div></a>
                <a href="https://www.facebook.com/KFCPakistan/"> <div className='iconDiv'><i className="fa fa-facebook" style={{fontSize:"19px", color:"#0253e8"}}></i></div></a>
            </div>

            <div className='lowerFooter'>
                <div className='info'>
                    <h2>Information</h2>
                    <a href="/">About Us</a>
                    <a href="/">Mitao Bhook</a>
                    <a href="/">Privacy</a>
                    <a href="/">Careers</a>
                </div>
                <div className='Locations'>
                    <h2>Locations</h2>
                    <a href="/">Contact Us</a>
                </div>
                <div className='getInTouch'>
                    <h2>Get in Touch</h2>
                    <a href="/">Terms & Conditions</a>
                </div>
                <div className='playStore'>
                    <a href="/"><img src={applebadge} style={{height:"110px",width:"150px",marginTop:"-15px"}} alt="apple" /> </a>
                    <a href="/"><img src={googlebadge} style={{height:"110px",width:"150px", marginTop:"-50px"}} alt="google" /> </a>
                </div>
            </div>
        
        </div>
  )
}

export default Footer