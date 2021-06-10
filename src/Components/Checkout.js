import React, {Component} from 'react'
import './Checkout.css'

class Checkout extends Component{

  state = {
    cartStatus: 'Empty'
  }


  ChangeWords = (e) => {
    console.log('one')
  }

  if
  render(){
    return(
      <div className="checkout">
          <div className="checkoutLeft">
          <div className="textCredit">
          {/*Image Banner*/}
            <img  className="checkOutAd" alt="" src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2019/Maple/Maple_144x80_B06W5SBSL7._CB438699196_.jpg"/>
            <div className="textCheck">
            <span className="textOne">Get a $15 credit</span><br/><br/>
            <p className="textTwo">when you purchase $50 or more in Amazon Gift Cards (restrictions apply)</p>
              </div>
            </div>
            <div>
              <h2 className="checkoutTitle" handleChange={this.handleChange}>Your Amazon Cart Is Empty</h2>
              {/* Items */}
            </div>
            {/*Checkout Item total*/}
            <div className="checkoutRight"></div>
              <h1>Sub</h1>
            </div>
        </div>

    )
  }
}

export default Checkout;
