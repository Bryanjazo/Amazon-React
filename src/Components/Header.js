import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {useStateValue} from '../Actions/Provider'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link, useHistory} from 'react-router-dom'
import Prime from './Prime.js'
import './Header.css'

function Header(){


  const history = useHistory()
  const [{ basket, user, userDetails}, dispatch] = useStateValue();

const handleOauth = (e) =>{
  console.log(localStorage.user, 'user is+++++++++++++++')
  if(localStorage.user !== ''){
    dispatch({
      type: 'SET_USER',
      user: null
    })
    localStorage.user = ''
    history.push('/')
    // window.location.reload()
  }
}




console.log(user, '======user=====')

    return(
      <div className="header">
        <Link to='/'>
        <img className="header_logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="" />
        </Link>
        <div className="header_search">
        <input className="header_input" type="text"/>
        <SearchIcon className="header_searchIconTop"/>
        </div>

        <div className="header_nav">
        <div onClick={handleOauth} className="header_option">
          <span className="header_optionLineOne">Greetings</span>
          <Link to={!user && '/signIn' }class="SignIn">
          <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </Link>
        </div>
        <div className="header_option">
        <span className="header_optionLineOne">returs</span>
        <Link to={`/user/${localStorage.user}/Orders`} class="SignIn">
        <span  className="header_optionLineTwo">orders</span>
        </Link>

        </div>
        <div className="header_option">

        <span className="header_optionLineOne">{user ? 'Your' : ''}</span>
        <Link  to={`/MyPrime/${localStorage.user}`} class="SignIn" >
        <span className="header_optionLineTwo">{user ? 'Prime' : ''}</span>

        </Link>
        </div>

        <div className="header_optBasket">
        <Link to='/checkout'>
        <ShoppingCartIcon className="cartLogo"/>
        </Link>
        <span className="header_optionLineTwo header_checkOut">{basket?.length}</span>
        </div>

        </div>

      </div>

    )

}


// componentDidMount(){
//   console.log("fetch")
// fetch('http://localhost:3001/products')
// .then(resp => resp.json())
// .then((productList) => {
//   this.setState({ productList: this.breakList(productList) })
//   console.log(this.state.productList)
//
// })
//
// }
//
// breakList = (array) => {
//
//     let newArrTwo = []
//     while(array.length > 0){
//       newArrTwo.push(array.splice(0,3))
//     }
//     return newArrTwo
//
//   }
export default Header;
