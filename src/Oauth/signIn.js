import React, {useState} from 'react';
import './signIn.css'
import {Link, useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { useStateValue } from "../Actions/Provider";
import {setUser} from '../redux/reducerRedux.js'
import {setUserDetails} from '../redux/reducerRedux.js'

import Image from '../Components/image.css'




function SignIn(){

// const [{}, dispatch ] = useStateValue();
const dispatch = useDispatch()
const history = useHistory();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const handleSignIn = e =>{
  e.preventDefault()
  // Send request to users to API
  console.log('signed in')

 fetch('http://localhost:3001/sessions', {
    method: 'POST',
    credentials: "same-origin",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password
     })
  })

  .then(resp => resp.json())
  .then(function(data){
    console.log(data);
    if(data.user){
       localStorage.setItem("user", data.user.id)
       userDetailsData(data.user)
       console.log(data, "{data}")
       settingUserLogin()
       console.log(localStorage)
       history.push('/')

    }


  })
    .catch(err => alert(err))


}

const userDetailsData = (data) =>{
    console.log(data, 'k')
    dispatch(setUserDetails(data))
  }

const settingUserLogin = () => {
  console.log(localStorage.user, 'user is')
  if(localStorage.user !== ''){
    dispatch(setUser(localStorage.user))
  }else{
    dispatch(dispatch(setUser(null)))
  }
}

    return(
      <div className="login">
        <Link to='/'>
        <img
          className="logo-SignUp"
          alt=''
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
        </Link>

        <div className='loginContainer'>
          <h1>Sign-In</h1>
          <from>
            <h5 className="loginHFive">Email</h5>
            <input className='loginInput' type='email' value={email} onChange={e => setEmail(e.target.value)}/>

              <h5 className="loginHFive">Password</h5>
              <input className='loginInput' type='Password' value={password} onChange={e => setPassword(e.target.value)}/>
              <button  onClick={handleSignIn} className='signInButton'  type='submit'>Sign In</button>
          </from>

          <p className="pLogin">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
          <Link to='SignUp'>
          <button className="registration">Create Your Amazon Account</button>
          </Link>
        </div>
      </div>
    )

}


export default SignIn;
