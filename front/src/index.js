import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import store from "./Redux/Store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {
  FirebaseAppProvider,
  useFirestoreDocData,
  useFirestore,
} from "reactfire";
import firebaseConfig from "./firebaseConfig"; //Este es el archivo que creaste con anterioridad que contiene las credenciales de Firebase

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
          <App />
        </FirebaseAppProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
