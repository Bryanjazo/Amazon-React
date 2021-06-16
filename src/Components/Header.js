import React, {useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {useStateValue} from './Provider'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link, useHistory} from 'react-router-dom'
import Prime from './Prime.js'
import './Header.css'

function Header(){




  const history = useHistory()
  const [primeResult, setPrimeResult] = useState( [] )
  const [{ basket, user, userDetails}, dispatch] = useStateValue();

  const fetchPrime = (e) =>{
    e.preventDefault()
    console.log('fetching')
    fetch(`http://localhost:3001/users/${localStorage.user}`, {
       credentials: "same-origin",
       headers: {
         'Content-Type': 'application/json',
         Accept: 'application/json',
       },
     })
     .then(resp => resp.json())
     .then(function(data){
       console.log('------------', data)

       userDetailsData(data)
       history.push('/Myprime')
       console.log(primeResult)

     })
  }

  const userDetailsData = (data) =>{
    console.log(data, 'k')
    dispatch({
      type: 'SET_USER_DETAILS',
      userDetails: data
    })
  }

// const setUser = (primeResult) =>{
//   const newResult = primeResult.map(p => p.id)
//   if(newResult.id){
//     console.log('id')
//   }
  // if(newResult.id === localStorage.user){
  //   console.log('user has been found')
  // }else{
  //   console.log('user not found')
  // }


//
const handleOauth = (e) =>{
  console.log(user)
  e.preventDefault()
  if(localStorage.user != ''){
    localStorage.user = null
    window.location.reload()
    history.push('/')
  }
}



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
        <Link to='/currentOrders' class="SignIn">
        <span className="header_optionLineTwo">orders</span>
        </Link>

        </div>
        <div className="header_option">

        <span className="header_optionLineOne">Your</span>
        <Link  to='/MyPrime' class="SignIn" >
        <span className="header_optionLineTwo" onClick={fetchPrime} >Prime</span>

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
