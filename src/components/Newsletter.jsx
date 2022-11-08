import React from 'react'

const Newsletter = () => {
  return (
    <div>
        <h1>Newsletter</h1>
        <div className='news-card' style={{backgroundColor: 'white', width: '20rem', height: '20rem'}}>
            <div style={{padding: '1rem'}}>
                <p>Subscribe to our newsletter to be among the first to keep up with the latest updates.</p>
                <input style={{padding: '1rem', borderRadius: '10px', backgroundColor: '#e1e7e5', border: 'none'}} type="text" placeholder='Email Address' />
                <button className='btn btn-primary' style={{margin: '1rem 0 1rem 0'}}>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter