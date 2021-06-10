import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom'
import './Header.css'

class Header extends Component{

  render(){
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
        <Link to='/checkout'>
        <div className="header_optBasket">
        <ShoppingCartIcon />
        <span className="header_optionLineTwo header_checkOut">0</span>
        </div>
        </Link>
        </div>
      </div>
    )
  }
}

export default Header;
