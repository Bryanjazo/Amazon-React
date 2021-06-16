import React, {useEffect} from 'react'
import Header from './Components/Header.js'
import Home from './Components/Home.js'
import SignIn from './Components/signIn.js'
import Checkout from './Components/Checkout.js'
import SignUp from './Components/SignUp.js'
import Prime from './Components/Prime.js'
// import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

// import { Provider } from 'react-redux'

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

          <SignIn />
        </Route>
        <Route path='/signUp'>

            <SignUp />
        </Route>
        <Route path='/MyPrime'>

        <Prime />
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
