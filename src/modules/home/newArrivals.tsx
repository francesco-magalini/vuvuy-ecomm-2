import React from 'react'

export default function newArrivals() {
  return (
    <div className="home-banner">
        <div className="image-container">
          <img src="assets/images/banners/banner.jpg" alt=""/>
        </div>
        <div className="info-group">
          <div className="">
            <p>check new arrivals</p>
            <h2>Explore Smartphones</h2>
          </div>
          <div className="skew-box-group">
            <span className="skew-box">Exclusive COUPON</span>
            <h3 className="sale-off skew-box">
              <span>$200</span>off
            </h3>
          </div>
          <div className="">
            <button className="btn">view all now</button>
          </div>
        </div>
      </div>
  )
}
