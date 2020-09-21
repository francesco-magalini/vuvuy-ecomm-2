import React from 'react'

export default function detailCategoryMobiles() {
    return (
        <section className="detailed-category mt-5 mb-5">
        <div className="section-title mb-0 no-border">
          <h2>
            Mobile Phones &amp; Accessories <a href="category.html">( View All )</a>
          </h2>
        </div>
        <div className="grid">
          <div className="col-5 col-lg-2 height-x2 grid-item">
            <div className="category-lists">
              <a href="category.html">Type-c cable</a>
              <a href="category.html">Oneplus 6</a>
              <a href="category.html">Xiaomi Mi A2</a>
              <a href="category.html">Xiaomi Mi Band 3</a>
              <a href="category.html">Smart Watch</a>
              <a href="category.html">Power Bank</a>
              <a href="category.html">iPhone X Cases</a>
              <a href="category.html">Nubia M2</a>
              <a href="category.html">Xiaomi Redmi S2</a>
              <a href="category.html">In-ear Headphones</a>
              <a href="category.html">Xiaomi Mi8</a>
              <a href="category.html">Xiaomi Mi8 SE</a>
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
                    'url("assets/images/slider/home_slide4.jpg")',
                }}
              >
                <div className="slide-content content-left">
                  <h2 className="text-center">
                    Top brands <br />
                    smartphones
                  </h2>
                  <div className="skew-box-group">
                    <span className="skew-box">STARTING FROM</span>
                    <span className="skew-box">$199</span>
                  </div>
                  <button className="btn btn-primary">View All Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-4-big height-x1 grid-item">
            <div className="product-default inner-quickview inner-icon">
              <figure>
                <a href="product.html">
                  <img src="assets/images/products/product-22.jpg" alt=""/>
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
                  <img src="assets/images/products/product-16.jpg" alt=""/>
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
                  <img src="assets/images/products/product-12.jpg" alt=""/>
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
                  <img src="assets/images/products/product-13.jpg" alt=""/>
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
