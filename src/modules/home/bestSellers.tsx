import React from 'react'

export default function bestSellers() {
    return (
        <section className="bg-grey pt-3 pb-3">
        <div className="container">
          <section className="product-panel mt-5 mb-5">
            <div className="section-title mb-2">
              <h2>
                Best Sellers on Electronics <a href="product.html">( View All )</a>
              </h2>
            </div>
            <div className="grid margin-2">
              <div className="grid-item height-x2 col-md-8 col-lg-9 col-xl-5col-2">
                <div
                  className="owl-carousel owl-theme"
                  data-toggle="owl"
                  data-owl-options="{
                              'items' : 1,
                              'margin' : 0,
                              'nav' : true,
                              'dots' : false
                          }"
                >
                  <img src="assets/images/products/product-1.jpg" alt=""/>
                  <img src="assets/images/products/product-1.jpg" alt=""/>
                  <img src="assets/images/products/product-1.jpg" alt=""/>
                </div>
              </div>
              <div className="grid-item height-x1 col-md-4 col-6 col-lg-3 col-xl-5col">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="product.html">
                      <img src="assets/images/products/product-2.jpg" alt=""/>
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
              <div className="grid-item height-x1 col-md-4 col-6 col-lg-3 col-xl-5col">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="product.html">
                      <img src="assets/images/products/product-3.jpg" alt=""/>
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
              <div className="grid-item height-x1 col-md-3 col-6 col-lg-3 col-xl-5col">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="product.html">
                      <img src="assets/images/products/product-4.jpg" alt=""/>
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
              <div className="grid-item height-x1 col-md-3 col-6 col-lg-3 col-xl-5col">
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
              <div className="grid-item height-x1 col-md-3 col-6 col-lg-3 col-xl-5col">
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
              <div className="grid-item height-x1 col-md-3 col-6 col-lg-3 col-xl-5col">
                <div className="product-default inner-quickview inner-icon">
                  <figure>
                    <a href="product.html">
                      <img src="assets/images/products/product-7.jpg" alt=""/>
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
        </div>
      </section>
    )
}
