import React from 'react'
import Axios from 'axios'
import { NavLink } from 'react-router-dom'
import { URL } from '../config'

class Products extends React.Component {
  state = {
    products: [],
    loading: true,
  }
  componentDidMount(){
    this.findAll();
  }
   async findAll(){
     try {
       const response = await Axios.get(`${URL}/api/products/`)
       console.log(response)
       this.setState({
         products: response.data.products,
         loading: false
       })
     }
     catch(error){
       this.setState({ error, loading: false })
     }
   }
   render(){
     let { products, loading } = this.state;
     return (
      <>
         <h1>All Products here:</h1> 
         <div  className='productGrid'>
         {!loading ? (products.map((product, idx) => {
         return (
           <div key = {idx}>
             <NavLink to = {`/product/${product._id}`}>
               <img className='allProducts' src={product.image} alt='product'></img>
                <h3>{product.name}</h3>{product.price} €
             </NavLink>      
             <p></p>
           </div>
         );
         })) : (<h2>Product Loading</h2>)
        }
       </div>
       </>
     )
   }

}

export default Products