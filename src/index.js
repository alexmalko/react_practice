import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { AuthProvider } from "./components/firebase/context/AuthContext";
import store from "./components/TodoReduxToolkit/store";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
