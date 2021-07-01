import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./store/rootReducer";
import {Provider} from "react-redux";
import App from "./App";

const store = createStore(rootReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
