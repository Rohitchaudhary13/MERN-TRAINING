import React from 'react'
import Button from './Button'
import girl from '../images/hero.png';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className='container'>
        <div className='row-hero'>
            <div className='col-hero'>
                <h1 className='michroma'>I'm Rohit!</h1>
                <h2 className='orbitron'>Web Developer.</h2>
                <p>I'm specialised in nothing!</p>
                <div style={{display: 'flex'}}>
                <Button value="Contact Me" />
                <Button value="About Me" />
                </div>
            </div>
            <div className='col-hero'>
                <img src={girl} alt="girl" />
            </div>
        </div>
        
    </div>
  )
}

export default Hero