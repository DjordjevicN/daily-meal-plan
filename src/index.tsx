import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./state/index";
import { isLocal } from "./constants/utilFunc";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {isLocal() ? (
        <HashRouter>
          <App />
        </HashRouter>
      ) : (
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )}
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
