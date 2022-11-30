import React from 'react'
import profilePicture from '../images/profilePicture.png'

const Header = () => {
  return (
    <div>
        <img src={profilePicture} className='profile_picture'/>
    </div>
  )
}

export default Header