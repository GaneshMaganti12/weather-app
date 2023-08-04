import React from 'react'
import notFound from '../../images/404Error.png'
import './NotFound.css'

function NotFound() {
  return (
    <>
        <div className='notFound-card'>
            <img className='notFound-image' src={notFound} alt='404'/>
        </div>
        <span className='notFound-title'>{`Sorry, Location not Found!!!`}</span>
    </>
  )
}

export default NotFound