import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {useStateValue} from '../Actions/Provider'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link, useHistory} from 'react-router-dom'
import Prime from './Prime.js'
import {setUser} from '../redux/reducerRedux.js'
import {useSelector, useDispatch} from 'react-redux'

import './Header.css'

function Header(){

  const {basket, user, userDetails } = useSelector((state) => state.basket)

  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const history = useHistory()
  // const [{ basket, user, userDetails}, dispatch] = useStateValue();

const handleOauth = (e) =>{
  console.log(localStorage.user, 'user is+++++++++++++++')
  if(localStorage.user !== ''){
    dispatch(setUser(null))
    localStorage.token = ''
    localStorage.user = ''
    history.push('/')
    // window.location.reload()
  }
}


const updateSearch = (e) => {
  e.preventDefault()
}


// console.log(user, '======user=====')

    return(
      <div className="header">
        <Link to='/'>
        <img className="header_logo" src='./amazon-new-png.png' alt="" />
        </Link>
        <div className="header_search">
        <input className="header_input" type="text" value={search} onChange={updateSearch}/>
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
        <span className="header_optionLineOne">{user ? 'returns' : ''}</span>
        <Link to={`/user/${localStorage.user}/Orders`} class="SignIn">
        <span  className="header_optionLineTwo">{user ? 'orders' : ''}</span>
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
