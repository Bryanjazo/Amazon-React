import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {useStateValue} from './Provider'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom'
import './Header.css'

function Header(){
  const [{basket}]  = useStateValue();

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
        <div className="header_option">
          <span className="header_optionLineOne">Greetings</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
        <div className="header_option">
        <span className="header_optionLineOne">returs</span>
        <span className="header_optionLineTwo">orders</span>

        </div>
        <div className="header_option">
        <span className="header_optionLineOne">Your</span>
        <span className="header_optionLineTwo">Prime</span>
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
