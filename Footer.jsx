import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (

    // here 

    <div className='flex flex-col sm:flex-row items-center justify-between gap-4 py-3 mt-12 text-center sm:text-left'>
  <img src={assets.logo} alt="" width={120} />

  <p className='text-xs text-gray-500 px-4 sm:border-l sm:border-gray-400 sm:pl-4'>
    Copyright @imagine.io | All Rights Reserved.
  </p>

  <div className='flex gap-2.5'>
    <img src={assets.instagram_icon} alt="" width={30} />
    <img src={assets.twitter_icon} alt="" width={30} />
  </div>
</div>


    // to here 
  )
}

export default Footer