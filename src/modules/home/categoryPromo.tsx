import React from "react";

export default function categoryPromo() {
  return (
    <div className="row row-sm">
      <div className="col-lg-6">
        <div
          className="banner-product bg-grey"
          style={{
            backgroundImage:
              'url("assets/images/products/product-banner1.jpg")',
            backgroundPosition: "50%",
          }}
        >
          <h2>
            ACTION <br />
            CAMERAS
          </h2>
          <div className="ml-3 primary-background">
            <h3 className="skew-box">Starting from</h3>
            <h4 className="skew-box">
              <span className=" product-price">$399</span>
              <span className="old-price">$499</span>
            </h4>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div
          className="banner-product bg-grey"
          style={{
            backgroundImage:
              'url("assets/images/products/product-banner2.jpg")',
            backgroundPosition: "48% 10%",
          }}
        >
          <h2>
            FOR ALL <br />
            STYLES
          </h2>
          <div className="ml-3 secondary-background">
            <h3 className="skew-box">Starting from</h3>
            <h4 className="skew-box">
              <span className=" product-price">$399</span>
              <span className="old-price">$499</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
