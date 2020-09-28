import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
export default function AccountDashboard() {
  let { path, url } = useRouteMatch();

  console.log('AccountDashboard'+url)
  console.log('AccountDashboard'+path)

  return (
    <div className="col-lg-9 order-lg-last dashboard-content">
      <h2>Account Dashboard</h2>


      







    </div>
  );
}
