import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers To Your Mail</h1>
      <p>Subscribe to our newsletter and stay updated!!!</p>
      <div>
        <input type="email" placeholder='Your Email ID'/>
        <button>SUBSCRIBE</button>
      </div>
    </div>
  )
}

export default NewsLetter
