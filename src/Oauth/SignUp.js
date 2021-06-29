import React, {useState} from 'react';
import './signIn.css'
import {Link, useHistory} from 'react-router-dom'
import Image from '../Components/image.js'
import {useSelector, useDispatch} from 'react-redux'
import { useStateValue } from "../Actions/Provider";
import {setUser} from '../redux/reducerRedux.js'
import {setUserDetails} from '../redux/reducerRedux.js'





function SignUp(){
const dispatch = useDispatch()
const history = useHistory();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSignUp = e =>{
  e.preventDefault()
  // Send request to users to API
  console.log('signed up')
  fetch('https://amzn-back-end.herokuapp.com/users', {
    method: 'POST',
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
    if(data.user){
      console.log(data.jwt, "tokennnn")
       localStorage.setItem("user", data.user.id)
       localStorage.setItem("token", data.jwt)
       userDetailsDataSignUp(data.user)
       settingUserSignUp()
       history.push('/')
    }
  })
}

const userDetailsDataSignUp = (data) =>{
  console.log(data, 'k')
  dispatch(setUserDetails(data))
  }


const settingUserSignUp = () => {
  console.log(localStorage.token, 'user is')
  if(localStorage.token !== ''){
    dispatch(setUser(localStorage.token))
  }else{
    dispatch(dispatch(setUser(null)))
  }
}
    return(
      <div className="login">
        <Link to='/'>
          <Image src="./login.png"/>
        </Link>

        <div className='loginContainer'>
          <h1>Sign-Up</h1>
          <from>
            <h5 className="loginHFive">Email</h5>
            <input className='loginInput' type='email' value={email} onChange={e => setEmail(e.target.value)}/>

              <h5 className="loginHFive">Password</h5>
              <input className='loginInput' type='Password' value={password} onChange={e => setPassword(e.target.value)}/>
              <button  onClick={handleSignUp} className='signInButton'  type='submit'>Sign Up</button>
          </from>

          <p className="pLogin">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
          <Link to='SignIn'>
          <button className="registration">Already Have An Account?</button>
          </Link>
        </div>
      </div>
    )

}

export default SignUp;
