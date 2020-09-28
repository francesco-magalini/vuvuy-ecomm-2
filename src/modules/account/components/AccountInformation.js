import { Formik, Form, Field } from "formik";
import React from "react";
import { FormattedList } from "react-intl";
import CheckVatService from "../../vies/components/CheckVatService";

import Auth from "@aws-amplify/auth";
import Lambda from "aws-sdk/clients/lambda"; // npm install aws-sdk

import {AccountInformationForm} from './AccountInformationForm'

export default function AccountInformation() {
 

  return (
    <div className="col-lg-9 order-lg-last dashboard-content">
      <h2>Account Information</h2>



      

      <AccountInformationForm />
      
    </div>
  );
}
