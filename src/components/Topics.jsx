import React from 'react';
import '../styles/Topics.css';
import {FiDatabase} from 'react-icons/fi'
import {IoAccessibilityOutline} from 'react-icons/io5'
import {VscRocket} from 'react-icons/vsc';

const Topics = () => {
  return (
    <div>
        <h1>Topics</h1>
        <div className='topic-card'>
            <div className='topic-icon'><FiDatabase size={25} /></div>
            <div className='topic-content'>Database</div>
        </div>
        <div className='topic-card'>
            <div className='topic-icon'><IoAccessibilityOutline size={25} /></div>
            <div className='topic-content'>Accessiblity</div>
        </div>
        <div className='topic-card'>
            <div className='topic-icon'><VscRocket size={25} /></div>
            <div className='topic-content'>Web Performance</div>
        </div>
    </div>
  )
}

export default Topics