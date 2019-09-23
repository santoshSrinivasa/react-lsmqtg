import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./reducer/reducer";
import App from "./App";

const store = createStore(reducer);

render(<Provider store={store}>
  <App />
  </Provider>, document.getElementById('root'));
