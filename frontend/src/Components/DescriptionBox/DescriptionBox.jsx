import React from 'react'
import './DescriptionBox.css'


export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>       
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website</p>
        <p>E-commerce websites typaclly display products or services</p>
      </div>
    </div>
  )
}
