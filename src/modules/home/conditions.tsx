import React from 'react'

export default function conditions() {
    return (
        <section className="service-section mb-4">
        <div className="col-md-6 col-xl-3">
          <div className="service-widget">
            <i className="service-icon icon-shipping" />
            <div className="service-content">
              <h3 className="service-title">free shipping &amp; return</h3>
              <p>Free shipping on all orders over $99.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-3">
          <div className="service-widget">
            <i className="service-icon icon-money" />
            <div className="service-content">
              <h3 className="service-title">money back guarantee</h3>
              <p>100% money back guarantee</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-3">
          <div className="service-widget">
            <i className="service-icon icon-support" />
            <div className="service-content">
              <h3 className="service-title">online support 24/7</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-3">
          <div className="service-widget">
            <i className="service-icon icon-secure-payment" />
            <div className="service-content">
              <h3 className="service-title">Secure Payment</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </section>
    )
}
