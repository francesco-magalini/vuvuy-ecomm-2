import React from "react";

export default function topCarousel() {
  return (
    <div className="row row-sm">
      <div className="col-lg-9">
        <div
          className="home-slider owl-carousel owl-theme"
          data-toggle="owl"
          data-owl-options="{
                      'items' : 1,
                      'margin' : 0,
                      'nav' : true,
                      'dots' : false
                  }"
        >
          <div
            className="home-slide"
            style={{
              backgroundImage: 'url("assets/images/slider/home_slide1.jpg")',
            }}
          >
            <div className="slide-content">
              <h2 className="text-right">
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
            <p>* Only 200 Available</p>
          </div>
          <div
            className="home-slide"
            style={{
              backgroundImage: 'url("assets/images/slider/home_slide2.jpg")',
            }}
          >
            <div className="slide-content content-left">
              <h2 className="text-left">
                Top brands
                <br />
                smartphones
              </h2>
              <div className="skew-box-group">
                <span className="skew-box">STARTING FROM</span>
                <span className="skew-box">$199</span>
              </div>
              <button className="btn">View All Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div
          className="product-slider owl-carousel owl-theme"
          data-toggle="owl"
        >
          <div className="product-slide">
            <h3>Flash Deals</h3>
            <div className="product-default">
              <figure>
                <a href="product.html">
                  <img src="assets/images/products/product-deal.jpg" alt=""/>
                </a>
              </figure>
              <div className="product-details">
                <h2 className="product-title">
                  <a href="product.html">1080p Wifi IP Camera</a>
                </h2>
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{ width: "100%" }} />
                    {/* End .ratings */}
                    <span className="tooltiptext tooltip-top" />
                  </div>
                  {/* End .product-ratings */}
                </div>
                {/* End .product-container */}
                <div className="price-box">
                  <span className="old-price">$59.00</span>
                  <span className="product-price">$49.00</span>
                </div>
                {/* End .price-box */}
              </div>
              {/* End .product-details */}
            </div>
            <div className="count-down-panel text-center">
              <h4>
                OFFER ENDS IN:
                <span
                  className="countdown"
                  data-plugin-countdown
                  data-plugin-options="{'date': '2020/01/01 00:00:00', 'numberClass': 'font-weight-extra-bold'}"
                >
                  <span className="days">
                    <span className=" font-weight-extra-bold">237</span> DAY
                    <div className="d-inline text-uppercase">s,</div>
                  </span>{" "}
                  <span className="hours">
                    <span className=" font-weight-extra-bold">20:</span>{" "}
                  </span>{" "}
                  <span className="minutes">
                    <span className=" font-weight-extra-bold">26:</span>{" "}
                  </span>{" "}
                  <span className="seconds">
                    <span className=" font-weight-extra-bold">06</span>{" "}
                  </span>{" "}
                </span>
              </h4>
            </div>
          </div>
          <div className="product-slide">
            <h3>Flash Deals</h3>
            <div className="product-default">
              <figure>
                <a href="product.html">
                  <img src="assets/images/products/product-deal.jpg" alt=""/>
                </a>
              </figure>
              <div className="product-details">
                <h2 className="product-title">
                  <a href="product.html">1080p Wifi IP Camera</a>
                </h2>
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{ width: "100%" }} />
                    {/* End .ratings */}
                    <span className="tooltiptext tooltip-top" />
                  </div>
                  {/* End .product-ratings */}
                </div>
                {/* End .product-container */}
                <div className="price-box">
                  <span className="old-price">$59.00</span>
                  <span className="product-price">$49.00</span>
                </div>
                {/* End .price-box */}
              </div>
              {/* End .product-details */}
            </div>
            <div className="count-down-panel">
              <h4>
                OFFER ENDS IN:
                <span
                  className="countdown"
                  data-plugin-countdown
                  data-plugin-options="{'date': '2020/12/31 00:00:00', 'numberClass': 'font-weight-extra-bold'}"
                >
                  <span className="days">
                    <span className=" font-weight-extra-bold">237</span> DAY
                    <div className="d-inline text-uppercase">s,</div>
                  </span>{" "}
                  <span className="hours">
                    <span className=" font-weight-extra-bold">20:</span>{" "}
                  </span>{" "}
                  <span className="minutes">
                    <span className=" font-weight-extra-bold">26:</span>{" "}
                  </span>{" "}
                  <span className="seconds">
                    <span className=" font-weight-extra-bold">06</span>{" "}
                  </span>{" "}
                </span>
              </h4>
            </div>
          </div>
          <div className="product-slide">
            <h3>Flash Deals</h3>
            <div className="product-default">
              <figure>
                <a href="product.html">
                  <img src="assets/images/products/product-deal.jpg" alt=""/>
                </a>
              </figure>
              <div className="product-details">
                <h2 className="product-title">
                  <a href="product.html">1080p Wifi IP Camera</a>
                </h2>
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{ width: "100%" }} />
                    {/* End .ratings */}
                    <span className="tooltiptext tooltip-top" />
                  </div>
                  {/* End .product-ratings */}
                </div>
                {/* End .product-container */}
                <div className="price-box">
                  <span className="old-price">$59.00</span>
                  <span className="product-price">$49.00</span>
                </div>
                {/* End .price-box */}
              </div>
              {/* End .product-details */}
            </div>
            <div className="count-down-panel">
              <h4>
                OFFER ENDS IN:
                <span
                  className="countdown"
                  data-plugin-countdown
                  data-plugin-options="{'date': '2020/12/31 00:00:00', 'numberClass': 'font-weight-extra-bold'}"
                >
                  <span className="days">
                    <span className=" font-weight-extra-bold">237</span> DAY
                    <div className="d-inline text-uppercase">s,</div>
                  </span>{" "}
                  <span className="hours">
                    <span className=" font-weight-extra-bold">20:</span>{" "}
                  </span>{" "}
                  <span className="minutes">
                    <span className=" font-weight-extra-bold">26:</span>{" "}
                  </span>{" "}
                  <span className="seconds">
                    <span className=" font-weight-extra-bold">06</span>{" "}
                  </span>{" "}
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
