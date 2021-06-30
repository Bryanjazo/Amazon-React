import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {useStateValue} from '../Actions/Provider'
import {useSelector, useDispatch} from 'react-redux'
import {setUserStatus} from '../redux/reducerRedux.js'
import Image from './image.js'
import './Prime.css'
import '../Oauth/signIn.css'

function Prime(props){
    const {basket, user, userDetails } = useSelector((state) => state.basket)
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');


  const handleLogin = (e) =>{

    console.log('-----updated------')
    fetch(`https://amzn-back-end.herokuapp.com/users/${localStorage.user}`, {
      method: 'PATCH',
      credentials: "same-origin",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user_id: localStorage.user,
        email: email,
        name: name,
        adress, adress,
       })
    })
    .then(resp => resp.json())
    .then(function(data){
      // window.location.reload()
      console.log(data)
    })
  }

  useEffect(() => {
    if(localStorage.user != ''){
      dispatch(setUserStatus(localStorage.user))
    }
  },[userDetails])

  return (

    <div className="prime">

      <Image src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'}/>
        <div className="prime__container">
          <div className='prime_details'>
            <h1>hello,{userDetails.name}</h1>
            <h4>Profile Details</h4>
            <label>name:</label>
            <h4>{userDetails.name}</h4>
            <label>email:</label>
            <h4>{userDetails.email}</h4>
            <label>Adress:</label>
            <h4>{userDetails.adress}</h4>
            </div>
        </div><br/><br/><br/>
      <div className="prime__container">
          <h1>hello,{userDetails.name}</h1>
          <h4>Profile Details</h4>
          <label>name:</label>
          <input text="name" name='name' value={name} onChange={e => setName(e.target.value)}/>
          <label>email:</label>
          <input text="email" name='email' value={email} onChange={e => setEmail(e.target.value)}/>
          <label>Adress:</label>
          <input text="adress" name='adress' value={adress} onChange={e => setAdress(e.target.value)}/>
          <button  onClick={handleLogin} className='signInButton'  type='submit'>Update Account</button>

      </div>
    </div>
  )
}

export default Prime
