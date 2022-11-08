import React from 'react'
import {TbBrandDiscord} from 'react-icons/tb'

const Talk = () => {
  return (
    <>
    <h1>Let's Talk</h1>
    <div style={{backgroundColor: 'white', width: '15rem', height: '15rem'}}>
        <div style={{padding: '1rem'}}>
            <p>Do you want to learn more about how I can help your company overcome problems? Let us have a conversation.</p>
            <div style={{display: 'flex'}}>
                <div style={{padding: '1rem 1rem 0.4rem 1rem', borderRadius: '100%'}}><TbBrandDiscord size={25}/></div>
                <div style={{padding: '1rem 1rem 0.4rem 1rem', borderRadius: '100%'}}><TbBrandDiscord size={25}/></div>
                <div style={{padding: '1rem 1rem 0.4rem 1rem', borderRadius: '100%'}}><TbBrandDiscord size={25}/></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Talk