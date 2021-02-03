import React from 'react'
import Axios from 'axios'
import { URL } from '../config'
import AddContent from './AddContent'

class Product extends React.Component{
  state={
    product: '',
  }
  componentDidMount(){
    this.findOne()
  };

  async findOne(){
    try {
      const response = await Axios.get(`${URL}/products/` + this.props.match.params.id)
      this.setState({
        product: response.data.product
      });
      console.log(response)
    }
    catch(error){
      this.setState({ error })
    }
  }
  render(){
    let { product } = this.state;
    return (
      <>
      <div className='grid2'>
        <div>
        <img className='oneProduct' src={product.image} alt='product'/>
        </div>
        <div className='descrip'>        
        <h1>{product.name}</h1> 
        <p>{product.description}</p>
        <p>{product.price}€</p>
        <AddContent
        _id = {product._id}
        name = {product.name}
        price = {product.price}
        image = {product.image}
        setCounter = {this.props.setCounter}/>
        </div>
      </div>
      </>
    )
  }
}

export default Product;