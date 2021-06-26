import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from "./Actions/reducer.js";
import { StateProvider } from "./Actions/Provider";
import store from './redux/configureStore.js'
import { Provider } from 'react-redux'

// import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  // <Router>
  //   <Route></Route>
  // </Router>
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
