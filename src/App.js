import React from 'react'
import Header from './Components/Header.js'
import Home from './Components/Home.js'
import Checkout from './Components/Checkout.js'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
// import { Provider } from 'react-redux';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
        <Header />
      <Switch>
        <Route path='/checkout'>

          <Checkout />
        </Route>
        <Route path='/signIn'>

            <h1>signIn</h1>
        </Route>
        <Route path='/signUp'>

            <h1>signUp</h1>
        </Route>
        <Route path='/'>

          <Home />
        </Route>

      </Switch>

    </div>
    </Router>
  );
}

export default App;
