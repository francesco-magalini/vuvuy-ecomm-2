import React from 'react'

export default function headerTop() {
    return (
        <div className="header-top">
        <a href="/">
          <img src="assets/images/banners/header_item.png" alt=""/>
          <h3>PortoPlus X Pro Only</h3>
          <span className="skew-box product-price">$199</span>
          <span className="old-price">$299</span>
          <span className="round-box">
            code: <strong>portoplusx</strong>
          </span>
        </a>
      </div>
    )
}
