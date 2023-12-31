import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Css/Header.css";
import "./Css/fontStyle.css";
import "./Css/DividerButton__Moudle.css";
import "./Css/ImageSwitch_moudle.css";
import "./Css/CashCounter__Moudle.css";
import "./Css/ListLayout.css";
import "./Css/Mobile_List_Layout.css";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      <Provider store={store}>
        {" "}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
