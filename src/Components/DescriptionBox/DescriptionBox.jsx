import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'> 
    <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>   

        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitates the buying and selling of products and services over the internet. It serves as a virtual workplace where bussiness and individuals can showcase their products, interact with customers and conduct transactions without the need for a physical presence</p>
            <p>E-commerce website typically display products and services along with detailed descriptions, images, prices and any available variations(e.g, sizes colors). Each product has its own dedicated page.</p>
        </div>
    </div>
      
    
  )
}

export default DescriptionBox
