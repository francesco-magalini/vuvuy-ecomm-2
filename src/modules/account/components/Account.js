import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import AccountDashboard from "./AccountDashboard";
import AccountInformation from "./AccountInformation";

export default function Account() {
  let { path, url } = useRouteMatch();

  console.log(url);
  console.log(path);

  return (
    <main className="main">
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">
                <i className="icon-home" />
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              dashboard
            </li>
          </ol>
        </div>
        {/* End .container */}
      </nav>

      <div className="container">
        <div className="row">
          {/* 
          <Link to={`${url}/dashboard`}>Account Dashboard</Link>
          <Link to={`${url}/information`}>Account Information</Link>
          */}
          <Switch>
            <Route path={`${path}`} component={AccountInformation} />
            <Route
              exact
              path={`${path}/information`}
              component={AccountInformation}
            />
          </Switch>
          <aside className="sidebar col-lg-3">
            <div className="widget widget-dashboard">
              <h3 className="widget-title">My Account</h3>
              <ul className="list">
                <li className="active">
                  <Link to={`${url}/dashboard`}>Account Dashboard</Link>
                </li>
                <li>
                  <Link to={`${url}/information`}>Account Information</Link>
                </li>
                <li>
                  <a href="/">Address Book</a>
                </li>
                <li>
                  <a href="/">My Orders</a>
                </li>
                <li>
                  <a href="/">Billing Agreements</a>
                </li>
                <li>
                  <a href="/">Recurring Profiles</a>
                </li>
                <li>
                  <a href="/">My Product Reviews</a>
                </li>
                <li>
                  <a href="/">My Tags</a>
                </li>
                <li>
                  <a href="/">My Wishlist</a>
                </li>
                <li>
                  <a href="/">My Applications</a>
                </li>
                <li>
                  <a href="/">Newsletter Subscriptions</a>
                </li>
                <li>
                  <a href="/">My Downloadable Products</a>
                </li>
              </ul>
            </div>
            {/*  End .widget */}
          </aside>

          {/* End .col-lg-3 */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </main>
  );
}
