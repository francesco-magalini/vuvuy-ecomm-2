import React from "react";

export default function productPanel() {
  return (
    <section className="product-panel mt-6">
      <div className="section-title">
        <h2>Recommendations for You</h2>
      </div>
      <div
        className="owl-carousel owl-theme"
        data-toggle="owl"
        data-owl-options="{
                  'margin': 0,
                  'items': 2,
                  'autoplayTimeout': 5000,
                  'dots': false,
                  'nav': true,
                  'responsive': {
                      '559': {
                          'items': 3
                      },
                      '975': {
                          'items': 4
                      },
                      '1200': {
                          'items' : 5
                      }
                  }
              }"
      >
        <div className="product-default inner-quickview inner-icon">
          <figure>
            <a href="product.html">
              <img src="assets/images/products/product-7.jpg" alt=""/>
            </a>
            <div className="label-group">
              <span className="product-label label-cut">27% OFF</span>
            </div>
            <div className="btn-icon-group">
              <button
                className="btn-icon btn-add-cart"
                data-toggle="modal"
                data-target="#addCartModal"
              >
                <i className="icon-bag" />
              </button>
            </div>
            <a
              href="ajax/product-quick-view.html"
              className="btn-quickview"
              title="Quick View"
            >
              Quick View
            </a>
          </figure>
          <div className="product-details">
            <div className="category-wrap">
              <div className="category-list">
                <a href="category.html" className="product-category">
                  category
                </a>
              </div>
              <a href="product.html"
            className="btn-icon-wish">
                <i className="icon-heart" />
              </a>
            </div>
            <h2 className="product-title">
              <a href="product.html">Product Short Name</a>
            </h2>
            <div className="ratings-container">
              <div className="product-ratings">
                <span className="ratings" style={{ width: "0%" }} />
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
        <div className="product-default inner-quickview inner-icon">
          <figure>
            <a href="product.html">
              <img src="assets/images/products/product-8.jpg" alt=""/>
            </a>
            <div className="label-group">
              <span className="product-label label-cut">27% OFF</span>
            </div>
            <div className="btn-icon-group">
              <button
                className="btn-icon btn-add-cart"
                data-toggle="modal"
                data-target="#addCartModal"
              >
                <i className="icon-bag" />
              </button>
            </div>
            <a
              href="ajax/product-quick-view.html"
              className="btn-quickview"
              title="Quick View"
            >
              Quick View
            </a>
          </figure>
          <div className="product-details">
            <div className="category-wrap">
              <div className="category-list">
                <a href="category.html" className="product-category">
                  category
                </a>
              </div>
              <a href="product.html"
            className="btn-icon-wish">
                <i className="icon-heart" />
              </a>
            </div>
            <h2 className="product-title">
              <a href="product.html">Product Short Name</a>
            </h2>
            <div className="ratings-container">
              <div className="product-ratings">
                <span className="ratings" style={{ width: "0%" }} />
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
        <div className="product-default inner-quickview inner-icon">
          <figure>
            <a href="product.html">
              <img src="assets/images/products/product-9.jpg" alt=""/>
            </a>
            <div className="label-group">
              <span className="product-label label-cut">27% OFF</span>
            </div>
            <div className="btn-icon-group">
              <button
                className="btn-icon btn-add-cart"
                data-toggle="modal"
                data-target="#addCartModal"
              >
                <i className="icon-bag" />
              </button>
            </div>
            <a
              href="ajax/product-quick-view.html"
              className="btn-quickview"
              title="Quick View"
            >
              Quick View
            </a>
          </figure>
          <div className="product-details">
            <div className="category-wrap">
              <div className="category-list">
                <a href="category.html" className="product-category">
                  category
                </a>
              </div>
              <a href="product.html"
            className="btn-icon-wish">
                <i className="icon-heart" />
              </a>
            </div>
            <h2 className="product-title">
              <a href="product.html">Product Short Name</a>
            </h2>
            <div className="ratings-container">
              <div className="product-ratings">
                <span className="ratings" style={{ width: "0%" }} />
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
        <div className="product-default inner-quickview inner-icon">
          <figure>
            <a href="product.html">
              <img src="assets/images/products/product-12.jpg" alt=""/>
            </a>
            <div className="label-group">
              <span className="product-label label-cut">27% OFF</span>
            </div>
            <div className="btn-icon-group">
              <button
                className="btn-icon btn-add-cart"
                data-toggle="modal"
                data-target="#addCartModal"
              >
                <i className="icon-bag" />
              </button>
            </div>
            <a
              href="ajax/product-quick-view.html"
              className="btn-quickview"
              title="Quick View"
            >
              Quick View
            </a>
          </figure>
          <div className="product-details">
            <div className="category-wrap">
              <div className="category-list">
                <a href="category.html" className="product-category">
                  category
                </a>
              </div>
              <a href="product.html"
            className="btn-icon-wish">
                <i className="icon-heart" />
              </a>
            </div>
            <h2 className="product-title">
              <a href="product.html">Product Short Name</a>
            </h2>
            <div className="ratings-container">
              <div className="product-ratings">
                <span className="ratings" style={{ width: "0%" }} />
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
        <div className="product-default inner-quickview inner-icon">
          <figure>
            <a href="product.html">
              <img src="assets/images/products/product-17.jpg" alt=""/>
            </a>
            <div className="label-group">
              <span className="product-label label-cut">27% OFF</span>
            </div>
            <div className="btn-icon-group">
              <button
                className="btn-icon btn-add-cart"
                data-toggle="modal"
                data-target="#addCartModal"
              >
                <i className="icon-bag" />
              </button>
            </div>
            <a
              href="ajax/product-quick-view.html"
              className="btn-quickview"
              title="Quick View"
            >
              Quick View
            </a>
          </figure>
          <div className="product-details">
            <div className="category-wrap">
              <div className="category-list">
                <a href="category.html" className="product-category">
                  category
                </a>
              </div>
              <a href="product.html"
            className="btn-icon-wish">
                <i className="icon-heart" />
              </a>
            </div>
            <h2 className="product-title">
              <a href="product.html">Product Short Name</a>
            </h2>
            <div className="ratings-container">
              <div className="product-ratings">
                <span className="ratings" style={{ width: "0%" }} />
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
        <div className="product-default inner-quickview inner-icon">
          <figure>
            <a href="product.html">
              <img src="assets/images/products/product-18.jpg" alt=""/>
            </a>
            <div className="label-group">
              <span className="product-label label-cut">27% OFF</span>
            </div>
            <div className="btn-icon-group">
              <button
                className="btn-icon btn-add-cart"
                data-toggle="modal"
                data-target="#addCartModal"
              >
                <i className="icon-bag" />
              </button>
            </div>
            <a
              href="ajax/product-quick-view.html"
              className="btn-quickview"
              title="Quick View"
            >
              Quick View
            </a>
          </figure>
          <div className="product-details">
            <div className="category-wrap">
              <div className="category-list">
                <a href="category.html" className="product-category">
                  category
                </a>
              </div>
              <a href="product.html"
            className="btn-icon-wish">
                <i className="icon-heart" />
              </a>
            </div>
            <h2 className="product-title">
              <a href="product.html">Product Short Name</a>
            </h2>
            <div className="ratings-container">
              <div className="product-ratings">
                <span className="ratings" style={{ width: "0%" }} />
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
      </div>
    </section>
  );
}
