import React, {Component} from 'react'
import './Product.css'
// import Home from './Home.js'
import StarRateIcon from '@material-ui/icons/StarRate';
class Product extends Component{



  render(){
    return(
      <div className="product">
     <div className="product_info">
       <p>{this.props.title}</p>
       <p className="product__price">
         <small>$</small>
         <strong>{this.props.price}</strong>
       </p>
       <div className="star">
       {Array(this.props.rating)
           .fill()
           .map((_, i) => (
             <p><StarRateIcon /></p>
           ))}
       </div>
     </div>

     <img src={this.props.image} alt="" />

     <button >Add to Basket</button>
   </div>
    )
  }

}

export default Product
