import React, {useState} from 'react';
import './signIn.css'
import {Link, useHistory} from 'react-router-dom'
import { useStateValue } from "./Provider";




function SignUp(){
const [{}, dispatch ] = useStateValue();
const history = useHistory();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSignUp = e =>{
  e.preventDefault()
  // Send request to users to API
  console.log('signed up')
  fetch('http://localhost:3001/users', {
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
    console.log(data, 'signUp');
    if(data.status === 200){
       localStorage.setItem("user", data.id)
       settingUserSignUp()
       history.push('/')

    }
  })
}

const settingUserSignUp = () => {
  console.log(localStorage.user, 'user is')
  if(localStorage.user !== ''){
    dispatch({
      type: 'SET_USER',
      user: localStorage.user
    })
  }else{
    dispatch({
      type: 'SET_USER',
      user: null
    })
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
