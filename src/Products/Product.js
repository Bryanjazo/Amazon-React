import React, {useState} from "react";
import './Product.css'
// import Home from './Home.js'
import {useSelector, useDispatch} from 'react-redux'
import { useStateValue } from "../Actions/Provider";
import {addToBasket} from '../redux/reducerRedux.js'
import StarRateIcon from '@material-ui/icons/StarRate';

function Product({ id, title, image, price, rating, description}){

  // const [{ basket }, dispatch] = useStateValue();
const {basket, user, userDetails} = useSelector((state) => state.basket);
const [buttonAdd, setButtonAdd] = useState(0)
const dispatch = useDispatch()
  const basketAdd = () => {
 // dispatch the item into the data layer
 dispatch(addToBasket({id, title, image, price, rating, description, buttonAdd}));
};


const handleAdd = (e) =>{
  e.preventDefault()
  console.log('here123')
}
    return(

      <div className="product">

     <div className="product_info">
       <p>{title}</p>
       <p>{description}</p>
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

     <button  onClick={basketAdd}>Add to Basket</button>
   </div>

    )


}

export default Product
