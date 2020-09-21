import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//Theme
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Amplify
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

//i18n
import { I18nProvider } from "./modules/i18n/components/i18nProvider";

Amplify.configure(awsExports);

//
//const { PUBLIC_URL } = process.env;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nProvider>
        <App />
      </I18nProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
