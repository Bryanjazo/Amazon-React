import React, {Component} from 'react'
import "./Home.css";

// import Slideshow from './Slideshow.js'
import Product from "./Product";

class Home extends Component {



    state = {
      productList: []
    }

    componentDidMount(){
      console.log("fetch")
    fetch('http://localhost:3001/products')
    .then(resp => resp.json())
    .then((productList) => {
      this.setState({ productList: productList})
      console.log(productList)

    })

    }

    // breakList = (array) => {
    //
    //     let newArrTwo = []
    //     while(array.length > 0){
    //       newArrTwo.push(array.splice(0,3))
    //     }
    //     return newArrTwo
    //
    //   }
    //


  render(){


    const product = this.state.productList.map(productList => (
      <div className="home__row ">
           <Product
               key={productList.id}
               id={productList.id}
               name={productList.name}
               title={productList.title}
               rating={productList.star}
               price={productList.price}
               description={productList.description}
               image={productList.product_image}
           />

         </div>
        )
       )

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/em/pd21/xcm_em_Prime_Day_2021_857-USEN_D_PDS-HP-Tall-Hero_1500x600._CB667246497_.jpg"
          alt=""
        />


          {product}

      </div>
    </div>
  );
  }
}



export default Home;
