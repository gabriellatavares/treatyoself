import React from 'react';
import Axios from 'axios';
import { URL } from '../config'

class AddProduct extends React.Component {

  state = {
    name: '',
    image: '',
    description: '',
    price: '',
    stock: '',
  }

  handleName = (e) => { this.setState({ name: e.target.value })}
  handleImage = (e) => { this.setState({ image: e.target.value })}
  handleDesc = (e) => { this.setState({ description: e.target.value })}
  handlePrice = (e) => { this.setState({ price: e.target.value })}
  handleStock = (e) => { this.setState({ stock: e.target.value })}

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, image, description, price, stock } = this.state;
    try {
      const response = await Axios.post(`${URL}/products/add`, {
        name: name,
        image: image,
        description: description,
        price: price,
        stock: stock
      })
      console.log(response)
      this.setState({
        name: '',
        image: '',
        description: '',
        price: '',
        stock: '',
      })
    }
    catch(error){
      console.log(error)
    }
    window.location = '/products'
  }
  render(){
    return (
      <div className='shortComp'>
        <h1>Add a new product!</h1>
          <form onSubmit = {this.handleSubmit}>
            <input type="text" onChange = {this.handleName} name='name' placeholder='Product name'/>
            <input type="url" onChange = {this.handleImage} name='image' placeholder='Image URL'/>
            <input type="text" onChange = {this.handleDesc} name='description' placeholder='Description'/>
            <input type="number" onChange = {this.handlePrice} name='price' min='0' placeholder='Price'/>
            <input type="number" onChange = {this.handleStock} name='stock'min='0' placeholder='Stock Available'/>
            <button>Add!</button>
          </form>
      </div>
    )
  }
}

export default AddProduct