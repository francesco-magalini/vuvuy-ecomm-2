import React from 'react'

export default function detailCategoryElectronics() {
    return (
        <section className="detailed-category mt-5 mb-5">
        <div className="section-title mb-0 no-border">
          <h2>
            Electronics <a href="category.html">( View All )</a>
          </h2>
        </div>
        <div className="grid">
          <div className="col-5 col-lg-2 height-x2 grid-item">
            <div className="category-lists">
              <a href="category.html">Digital Microscope</a>
              <a href="category.html">3D Printer Kit</a>
              <a href="category.html">IP Camera</a>
              <a href="category.html">TV Box</a>
              <a href="category.html">Arduino Compatible Boards</a>
              <a href="category.html">Power Tools</a>
              <a href="category.html">Raspberry Pi 3</a>
              <a href="category.html">Digital Multimeter</a>
              <a href="category.html">Power Tool Parts</a>
              <a href="category.html">Woodworking Tools</a>
              <a href="category.html">Smart Light Bulbs</a>
              <a href="category.html">Soldering Iron</a>
            </div>
          </div>
          <div className="col-7 col-lg-3 height-x2 grid-item">
            <div
              className="owl-carousel owl-theme"
              data-toggle="owl"
              data-owl-options="{
                          'items' : 1,
                          'margin' : 0,
                          'nav' : false,
                          'dots' : false
                      }"
            >
              <div
                className="home-slide"
                style={{
                  backgroundImage:
                    'url("assets/images/slider/home_slide3.jpg")',
                }}
              >
                <div className="slide-content">
                  <h2 className="text-center">
                    electronic
                    <br />
                    deals
                  </h2>
                  <div className="skew-box-group">
                    <span className="skew-box">Exclusive COUPON</span>
                    <h3 className="sale-off skew-box">
                      <span>$100</span>off
                    </h3>
                  </div>
                  <button className="btn">View All Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-4-big height-x1 grid-item">
            <div className="product-default inner-quickview inner-icon">
              <figure>
                <a href="product.html">
                  <img src="assets/images/products/product-21.jpg" alt=""/>
                </a>
              </figure>
              <div className="product-details">
                <h2 className="product-title">
                  <a href="product.html">Product Short Name</a>
                </h2>
                <div className="price-box">
                  <span className="old-price">$59.00</span>
                  <span className="product-price">$49.00</span>
                </div>
                {/* End .price-box */}
              </div>
              {/* End .product-details */}
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2-big height-x2 grid-item">
            <div className="product-default inner-quickview inner-icon">
              <figure>
                <a href="product.html">
                  <img src="assets/images/products/product-9.jpg" alt=""/>
                </a>
              </figure>
              <div className="product-details">
                <h2 className="product-title">
                  <a href="product.html">Product Short Name</a>
                </h2>
                <div className="price-box">
                  <span className="old-price">$59.00</span>
                  <span className="product-price">$49.00</span>
                </div>
                {/* End .price-box */}
              </div>
              {/* End .product-details */}
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2-big height-x1 grid-item">
            <div className="product-default inner-quickview inner-icon">
              <figure>
                <a href="product.html">
                  <img src="assets/images/products/product-5.jpg" alt=""/>
                </a>
              </figure>
              <div className="product-details">
                <h2 className="product-title">
                  <a href="product.html">Product Short Name</a>
                </h2>
                <div className="price-box">
                  <span className="old-price">$59.00</span>
                  <span className="product-price">$49.00</span>
                </div>
                {/* End .price-box */}
              </div>
              {/* End .product-details */}
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2-big height-x1 grid-item">
            <div className="product-default inner-quickview inner-icon">
              <figure>
                <a href="product.html">
                  <img src="assets/images/products/product-6.jpg" alt=""/>
                </a>
              </figure>
              <div className="product-details">
                <h2 className="product-title">
                  <a href="product.html">Product Short Name</a>
                </h2>
                <div className="price-box">
                  <span className="old-price">$59.00</span>
                  <span className="product-price">$49.00</span>
                </div>
                {/* End .price-box */}
              </div>
              {/* End .product-details */}
            </div>
          </div>
        </div>
      </section>
    )
}
