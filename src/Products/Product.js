import React from "react";
import './Product.css'
// import Home from './Home.js'
import { useStateValue } from "../Actions/Provider";
import StarRateIcon from '@material-ui/icons/StarRate';
function Product({ id, title, image, price, rating }){

  const [{ basket }, dispatch] = useStateValue();


  const addToBasket = () => {
 // dispatch the item into the data layer
 dispatch({
   type: "ADD_TO_BASKET",
   item: {
     id: id,
     title: title,
     image: image,
     price: price,
     rating: rating,
   },
 });
};


    return(
      <div className="product">
     <div className="product_info">
       <p>{title}</p>
       <p className="product__price">
         <small>$</small>
         <strong>{price}</strong>
       </p>
       <div className="star">
       {Array(rating)
           .fill()
           .map((_, i) => (
             <p><StarRateIcon /></p>
           ))}
       </div>
     </div>

     <img src={image} alt="" />

     <button  onClick={addToBasket}>Add to Basket</button>
   </div>
    )


}

export default Product
