import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {useStateValue} from './Provider'
import './Prime.css'
import './signIn.css'

const Prime = (props) => {
  const [{userDetails}] = useStateValue()

  return (
    <div className="prime">
      <img
        className="logo-prime"
        alt=''
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
      <div className="prime__container">
          <h1>hello,{userDetails.name}</h1>
      </div>
    </div>
  )
}

export default Prime
