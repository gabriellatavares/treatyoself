import React from 'react'
import Axios from 'axios'
import { URL } from '../config'

class UpdateProduct extends React.Component {
  state = {
    _id: '',
    name: '',
    image: '',
    description: '',
    price: '',
    stock: '',
  }

  handleChange = event => {
    this.setState({_id: event.target.value})
  }
  handleName = (e) => {this.setState({ name: e.target.value })}
  handleImage = (e) => {this.setState({ image: e.target.value })}
  handleDesc = (e) => {this.setState({ description: e.target.value })}
  handlePrice = (e) => {this.setState({ price: e.target.value })}
  handleStock = (e) => {this.setState({ stock: e.target.value })}

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, image, description, price, stock } = this.state;
    try {
      await Axios.post(`${URL}/api/products/update`, {
        _id: this.state._id,
        nameUp: name,
        imageUp: image,
        descUp: description,
        priceUp: price,
        stockUp: stock,
      })
    }
    catch(error){
      console.log(error)
    }
    window.location='/products'
  }
  render(){
    return (
      <div className='shortComp'>
        <h1>Update a product:</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='id' onChange={this.handleChange} placeholder='product id'/>
          <input type="text" onChange={this.handleName} name='name' placeholder='New Product Name'/>
          <input type="url" onChange={this.handleImage} name='image' placeholder='New Image (URL)'/>
          <input type="text" onChange={this.handleDesc} name='description' placeholder='New Description'/>
          <input type="number" onChange={this.handlePrice} name='price' min='0' placeholder='New Price'/>
          <input type="number" onChange={this.handleStock} name='stock'min='0'  placeholder='New Stock'/>
          <button>Update it!</button>
        </form>
      </div>
    )
  }

 }

export default UpdateProduct;