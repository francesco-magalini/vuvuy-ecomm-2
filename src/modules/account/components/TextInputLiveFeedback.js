import React from "react";
import ReactDOM from "react-dom";
import { useFormik, FormikProvider, Form, useField } from "formik";

import * as Yup from "yup";

export const TextInputLiveFeedback = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)

  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <div>
      <div>
        <label htmlFor={props.id}>{label}</label>{" "}
        {showFeedback ? (
          <div id={`${props.id}-feedback`}>{meta.error ? meta.error : "✓"}</div>
        ) : null}
      </div>

      <input
        {...props}
        {...field}
        aria-describedby={`${props.id}-feedback ${props.id}-help`}
        onFocus={handleFocus}
      />

      <div id={`${props.id}-help`} >
        {helpText}
      </div>
    </div>
  );
};
