import React from 'react'

export default function headerMiddle() {
    return (
        <div className="header-middle">
        <div className="container">
          <div className="header-left">
            <button className="mobile-menu-toggler" type="button">
              <i className="icon-menu" />
            </button>
            <a href="/" className="logo">
              <img src="/assets/images/logo.png" alt="Porto Logo" />
            </a>
          </div>
          {/* End .header-left */}
          <div className="header-center">
            <div className="header-search">
              <a href="/" className="search-toggle" role="button">
                <i className="icon-magnifier" />
              </a>
              <form action="#" method="get">
                <div className="header-search-wrapper">
                  <input
                    type="search"
                    className="form-control"
                    name="q"
                    id="q"
                    placeholder="I'm searching for..."
                    required
                  />
                  <div className="select-custom">
                    <select id="cat" name="cat">
                      <option value={""}>All Categories</option>
                      <option value={4}>Fashion</option>
                      <option value={12}>- Women</option>
                      <option value={13}>- Men</option>
                      <option value={66}>- Jewellery</option>
                      <option value={67}>- Kids Fashion</option>
                      <option value={5}>Electronics</option>
                      <option value={21}>- Smart TVs</option>
                      <option value={22}>- Cameras</option>
                      <option value={63}>- Games</option>
                      <option value={7}>Home &amp; Garden</option>
                      <option value={11}>Motors</option>
                      <option value={31}>- Cars and Trucks</option>
                      <option value={32}>
                        - Motorcycles &amp; Powersports
                      </option>
                      <option value={33}>- Parts &amp; Accessories</option>
                      <option value={34}>- Boats</option>
                      <option value={57}>- Auto Tools &amp; Supplies</option>
                    </select>
                  </div>
                  {/* End .select-custom */}
                  <button className="btn" type="submit">
                    <i className="icon-magnifier" />
                  </button>
                </div>
                {/* End .header-search-wrapper */}
              </form>
            </div>
            {/* End .header-search */}
            <div className="links">
              <a href="/">tablet</a>
              <a href="/">smartphone</a>
              <a href="/">smartwatch</a>
              <a href="/">ipcamera</a>
              <a href="/">box</a>
              <a href="/">smart</a>
              <a href="/">portable</a>
            </div>
          </div>
          {/* End .headeer-center */}
          <div className="header-right">
            <a href="login">
              <div className="header-user">
                <i className="icon-user-2" />
                <div className="header-userinfo">
                  <span>Hello!</span>
                  <h4>My Account</h4>
                </div>
              </div>
            </a>
            <a href="/" className="porto-icon">
              <i className="icon icon-heart" />
            </a>
            <div className="dropdown cart-dropdown">
              <a
                href="/"
                className="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
              >
                <i className="minicart-icon" />
                <span className="cart-count">2</span>
              </a>
              <div className="dropdown-menu">
                <div className="dropdownmenu-wrapper">
                  <div className="dropdown-cart-header">
                    <span>2 Items</span>
                    <a href="cart">View Cart</a>
                  </div>
                  {/* End .dropdown-cart-header */}
                  <div className="dropdown-cart-products">
                    <div className="product">
                      <div className="product-details">
                        <h4 className="product-title">
                          <a href="product">Woman Ring</a>
                        </h4>
                        <span className="cart-product-info">
                          <span className="cart-product-qty">1</span>x $99.00
                        </span>
                      </div>
                      {/* End .product-details */}
                      <figure className="product-image-container">
                        <a href="product" className="product-image">
                          <img
                            src="assets/images/products/cart/product-1.jpg"
                            alt="product"
                          />
                        </a>
                        <a
                          href="/"
                          className="btn-remove"
                          title="Remove Product"
                        >
                          <i className="icon-retweet" />
                        </a>
                      </figure>
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <div className="product-details">
                        <h4 className="product-title">
                          <a href="product">Woman Necklace</a>
                        </h4>
                        <span className="cart-product-info">
                          <span className="cart-product-qty">1</span>x $35.00
                        </span>
                      </div>
                      {/* End .product-details */}
                      <figure className="product-image-container">
                        <a href="product" className="product-image">
                          <img
                            src="assets/images/products/cart/product-2.jpg"
                            alt="product"
                          />
                        </a>
                        <a
                          href="/"
                          className="btn-remove"
                          title="Remove Product"
                        >
                          <i className="icon-retweet" />
                        </a>
                      </figure>
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .cart-product */}
                  <div className="dropdown-cart-total">
                    <span>Total</span>
                    <span className="cart-total-price">$134.00</span>
                  </div>
                  {/* End .dropdown-cart-total */}
                  <div className="dropdown-cart-action">
                    <a href="checkout-shipping" className="btn btn-block">
                      Checkout
                    </a>
                  </div>
                  {/* End .dropdown-cart-total */}
                </div>
                {/* End .dropdownmenu-wrapper */}
              </div>
              {/* End .dropdown-menu */}
            </div>
            {/* End .dropdown */}
          </div>
          {/* End .header-right */}
        </div>
        {/* End .container */}
      </div>
      
    )
}
