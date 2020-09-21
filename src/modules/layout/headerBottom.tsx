import React from "react";

export default function headerBottom() {
  return (
    <div className="header-bottom">
      <div className="container">
        <nav className="main-nav">
          <div className="menu-depart">
            <a href="category">
              <i className="icon-menu" />
              Shop by Category
            </a>
            <div className="submenu">
              <a href="/">
                <i className="icon-category-home" />
                Home
              </a>
              <a href="category">
                <i className="icon-category-fashion" />
                Fashion
              </a>
              <a href="category">
                <i className="icon-category-electronics" />
                Electronics
              </a>
              <a href="category">
                <i className="icon-category-gifts" />
                Gifts
              </a>
              <a href="category">
                <i className="icon-category-garden" />
                Garden
              </a>
              <a href="category">
                <i className="icon-category-music" />
                Music
              </a>
              <a href="category">
                <i className="icon-category-motors" />
                Motors
              </a>
              <a href="category">
                <i className="icon-category-furniture" />
                Furniture
              </a>
              <a href="category">
                VIEW ALL <i className="icon-angle-right" />
              </a>
            </div>
          </div>
          <ul className="menu">
            <li>
              <a href="/" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="category">Categories</a>
              <div className="megamenu megamenu-fixed-width">
                <div className="row row-sm">
                  <div className="col-lg-4">
                    <a href="/" className="nolink">
                      VARIATION 1
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="category">Fullwidth Banner</a>
                      </li>
                      <li>
                        <a href="category-banner-boxed-slider">
                          Boxed Slider Banner
                        </a>
                      </li>
                      <li>
                        <a href="category-banner-boxed-image">
                          Boxed Image Banner
                        </a>
                      </li>
                      <li>
                        <a href="category">Left Sidebar</a>
                      </li>
                      <li>
                        <a href="category-sidebar-right">Right Sidebar</a>
                      </li>
                      <li>
                        <a href="category-flex-grid">Product Flex Grid</a>
                      </li>
                      <li>
                        <a href="category-horizontal-filter1">
                          Horizontal Filter1
                        </a>
                      </li>
                      <li>
                        <a href="category-horizontal-filter2">
                          Horizontal Filter2
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <a href="/" className="nolink">
                      VARIATION 2
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="/">Product List Item Types</a>
                      </li>
                      <li>
                        <a href="category-infinite-scroll">
                          Ajax Infinite Scroll
                        </a>
                      </li>
                      <li>
                        <a href="category-3col">3 Columns Products</a>
                      </li>
                      <li>
                        <a href="category">4 Columns Products</a>
                      </li>
                      <li>
                        <a href="category-5col">5 Columns Products</a>
                      </li>
                      <li>
                        <a href="category-6col">6 Columns Products</a>
                      </li>
                      <li>
                        <a href="category-7col">7 Columns Products</a>
                      </li>
                      <li>
                        <a href="category-8col">8 Columns Products</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 image-container">
                    <img src="assets/images/menu-banner-2.jpg" alt="" />{" "}
                    {/* align="Menu banner" */}
                  </div>
                </div>
              </div>
              {/* End .megamenu */}
            </li>

            <li>
              <a href="product">Products</a>
              <div className="megamenu">
                <div className="row row-sm">
                  <div className="col-lg-3">
                    <a href="/" className="nolink">
                      Variations 1
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="product">Horizontal Thumbnails</a>
                      </li>
                      <li>
                        <a href="product-full-width">Vertical Thumbnails</a>
                      </li>
                      <li>
                        <a href="product">Inner Zoom</a>
                      </li>
                      <li>
                        <a href="product-addcart-sticky">Addtocart Sticky</a>
                      </li>
                      <li>
                        <a href="product-sidebar-left">Accordion Tabs</a>
                      </li>
                    </ul>
                  </div>
                  {/* End .col-lg-4 */}
                  <div className="col-lg-3">
                    <a href="/" className="nolink">
                      Variations 2
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="product-sticky-tab">Sticky Tabs</a>
                      </li>
                      <li>
                        <a href="product-simple">Simple Product</a>
                      </li>
                      <li>
                        <a href="product-sidebar-left">With Left Sidebar</a>
                      </li>
                    </ul>
                  </div>
                  {/* End .col-lg-4 */}
                  <div className="col-lg-3">
                    <a href="/" className="nolink">
                      Product Layout Types
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="product">Default Layout</a>
                      </li>
                      <li>
                        <a href="product-extended-layout">Extended Layout</a>
                      </li>
                      <li>
                        <a href="product-full-width">Full Width Layout</a>
                      </li>
                      <li>
                        <a href="product-grid-layout">Grid Images Layout</a>
                      </li>
                      <li>
                        <a href="product-sticky-both">Sticky Both Side Info</a>
                      </li>
                      <li>
                        <a href="product-sticky-info">Sticky Right Side Info</a>
                      </li>
                    </ul>
                  </div>
                  {/* End .col-lg-4 */}
                  <div className="col-lg-3 image-container">
                    <img
                      src="assets/images/menu-banner-1.jpg"
                      alt="Menu banner"
                      className="product-promo"
                    />
                  </div>
                  {/* End .col-lg-4 */}
                </div>
                {/* End .row */}
              </div>
              {/* End .megamenu */}
            </li>

            <li className="sf-with-ul">
              <a href="/">Pages</a>
              <ul>
                <li>
                  <a href="cart">Shopping Cart</a>
                </li>
                <li>
                  <a href="/">Checkout</a>
                  <ul>
                    <li>
                      <a href="checkout-shipping">Checkout Shipping</a>
                    </li>
                    <li>
                      <a href="checkout-shipping-2">Checkout Shipping 2</a>
                    </li>
                    <li>
                      <a href="checkout-review">Checkout Review</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">Dashboard</a>
                  <ul>
                    <li>
                      <a href="dashboard">Dashboard</a>
                    </li>
                    <li>
                      <a href="my-account">My Account</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about">About Us</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                  <ul>
                    <li>
                      <a href="blog">Blog</a>
                    </li>
                    <li>
                      <a href="single">Blog Post</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact">Contact Us</a>
                </li>
                <li>
                  <a href="/" className="login-link">
                    Login
                  </a>
                </li>
                <li>
                  <a href="forgot-password">Forgot Password</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="https://1.envato.market/DdLk5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Porto!
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-dropdowns">
          <div className="header-dropdown">
            <a href="/" className="link-seller">
              Become a Seller
            </a>
          </div>
          <div className="header-dropdown">
            <a href="/">USD</a>
            <div className="header-menu">
              <ul>
                <li>
                  <a href="/">EUR</a>
                </li>
                <li>
                  <a href="/">USD</a>
                </li>
              </ul>
            </div>
            {/* End .header-menu */}
          </div>
          {/* End .header-dropown */}
          <div className="header-dropdown">
            <a href="/">ENG</a>
            <div className="header-menu">
              <ul>
                <li>
                  <a href="/">ENGLISH</a>
                </li>
                <li>
                  <a href="/">FRENCH</a>
                </li>
              </ul>
            </div>
            {/* End .header-menu */}
          </div>
          {/* End .header-dropown */}
        </div>
        {/* End .header-left */}
      </div>
      {/* End .header-bottom */}
    </div>
  );
}
