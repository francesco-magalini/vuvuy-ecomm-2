import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useFormik, FormikProvider, Form, useField } from "formik";
import "./styles.css";
import * as Yup from "yup";

import { TextInputLiveFeedback } from "./TextInputLiveFeedback";
import { CheckVatService } from "../../vies/components/CheckVatService";

export const AccountInformationForm = () => {

  const [countryCode, setcountryCode] = useState("");
  const [Vat, setVat] = useState("");

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const formik = useFormik({
    initialValues: {
      username: "",
      countryCode: countryCode,
      vat: Vat,
    },
    onSubmit: async (values) => {
      await sleep(500);

      setcountryCode(values.countryCode);
      setVat(values.vat);

      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(8, "Must be at least 8 characters")
        .max(20, "Must be less than 20 characters")
        .required("Username is required")
        .matches(
          /^[a-zA-Z0-9]+$/,
          "Cannot contain special characters or spaces"
        ),
      countryCode: Yup.string()
        .min(2, "Must be at least 2 characters")
        .max(2, "Must be less than 3 characters")
        .required("countryCode is required")
        .matches(
          /^[a-zA-Z0-9]+$/,
          "Cannot contain special characters or spaces"
        ),
      vat: Yup.string()
        .min(8, "Must be at least 6 characters")
        .max(20, "Must be less than 20 characters")
        .required("vat is required")
        .matches(
          /^[a-zA-Z0-9]+$/,
          "Cannot contain special characters or spaces"
        ),
    }),
  });

  return (
    <div>
      <FormikProvider value={formik}>
        <Form>
          <TextInputLiveFeedback
            label="Username"
            id="username"
            name="username"
            helpText="Must be 8-20 characters and cannot contain special characters."
            type="text"
          />

          <TextInputLiveFeedback
            label="Country code"
            id="countryCode"
            name="countryCode"
            helpText="ISO country code."
            type="text"
          />

          <TextInputLiveFeedback
            label="Vat"
            id="vat"
            name="vat"
            helpText="VAT"
            type="text"
          />

          <div>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
        </Form>
      </FormikProvider>

      <div>{JSON.stringify(countryCode)}</div>
      <div>{JSON.stringify(Vat)}</div>

      <CheckVatService countryCode={countryCode} vat={Vat} />
    </div>
  );
};
