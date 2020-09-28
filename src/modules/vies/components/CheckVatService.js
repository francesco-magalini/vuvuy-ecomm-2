import React, { Component, useState, useEffect } from "react";
import Amplify, { API } from "aws-amplify";
import { useFormik, FormikProvider, Form, useField } from "formik";

export const CheckVatService = ({ countryCode, vat}) => {

  const [viesValidationResult, setviesValidationResult] = useState()

  useEffect(() => {

    const apiName = "vuvuyVies";
    const path = "/checkVatService";
    const myInit = {
      headers: { "Content-Type": "application/json" },
      response: false,
      queryStringParameters: {},
      body: {
        countryCode: countryCode,
        vatNumber: vat,
      },
    };
  
    API.post(apiName, path, myInit).then((response) => {
      console.log(response)
      setviesValidationResult(response)
    });

  },[vat])

  return (
    <div>
      <h3>VIES response</h3>
      <p>{JSON.stringify(viesValidationResult, null, 2)}</p>
    </div>
  );
};
