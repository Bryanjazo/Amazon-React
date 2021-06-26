import React, {useEffect} from 'react'
import Header from './Components/Header.js'
import Home from './Components/Home.js'
import SignIn from './Oauth/signIn.js'
import Checkout from './Checkout/Checkout.js'
import SignUp from './Oauth/SignUp.js'
import Prime from './Components/Prime.js'
import Payment from './Payments/Payment.js'
import {loadStripe} from "@stripe/stripe-js"
import Orders from './Services/Orders.js'
import {Elements} from "@stripe/react-stripe-js"
import {setUserDetails, setUserStatus} from './redux/reducerRedux.js'
import {useSelector, useDispatch} from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import './App.css';

const promiseKey = loadStripe('pk_test_51J3RPVGzEGg3Lz1MQBnhI8vTgdjSBu4Qpf3XnXwjF9NJI16nq4Boas6sj5z40O8ktL9dReDiy0WKXgQyo9gpCoG600xt5dpi2A');



function App() {
  const dispatch = useDispatch()

  let current_user = localStorage.token

  useEffect(() => {
    if(localStorage.user !== ''){
      dispatch(setUserStatus(localStorage.token))
    }
  },[])

  return (
    <Router>
    <div className="App">
        <Header />
      <Switch>
        <Route path='/checkout'>
          <Checkout />
        </Route>
        <Route path='/Payment'>

          <Elements stripe={promiseKey}>
            <Payment />
          </Elements>

        </Route>
        <Route exact path={`/user/:id/Orders`}>
        {current_user ? <Orders /> : <Redirect to='/'/>}
        </Route>
        <Route path='/signIn'>

          <SignIn />
        </Route>
        <Route path='/signUp'>
            <SignUp />

        </Route>

        <Route path={`/MyPrime/:id`}>
        {current_user ? <Prime /> : <Redirect to='/'/>}
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
