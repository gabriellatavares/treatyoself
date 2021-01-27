import React from 'react'
import Axios from 'axios'
import { URL } from '../config'
import Total from './CartTotal'

class Cart extends React.Component {

  state = {
    items: [],
    copyItems: [],
    product_id: '',
    loading: true,
  }
  componentDidMount(){
    this.find();
  }
  async find(){
    try {
      const userID = localStorage.getItem('userID')
      const response = await Axios.get(`${URL}/cart/${userID}`)
      this.setState({
        items: response.data.items,
        loading: false,
      })
      console.log(response)
    } 
    catch(error){
      this.setState({ loading: false, error })
    }
  }
  handleChange = (e, i) =>{
    let inputValue = e.target.value;
    this.setState(prevState => {
      let items = [...prevState.items]
      items[i] = {...items[i], quantity: inputValue}
      return { items }
    })
  }
  async remove(product_id){
    try {
      const userID = localStorage.getItem('userID')
      const response = await Axios.delete(`${URL}/cart/delete`, {
        data: { userID: userID, product_id: product_id }
      })
      this.setState ({
        copyItems: response.data
      })
      window.location='/cart'
    }
    catch(error) {
      console.log(error)
    }
  }
  handleClear = async (e) => {
    e.preventDefault()
    try {
      const userID = localStorage.getItem('userID')
      const response = await Axios.post(`${URL}/cart/clear`, {
        userID: userID
      })
      console.log(response)
      window.location = '/cart';
    } 
    catch(error){
      console.log(error)
    }
  }
  render(){
    let { items, loading } = this.state;
    return (
      <div>
      <h1>My cart</h1>
      {!loading ? 
      (items.map((product, idx) => {
        return (
          <div key = {product.product._id}>
            <img src = {product.product.image} alt = 'item'/>
            <h3>{product.product.name}</h3>
            <input type= 'number' value ={product.quantity} onChange = {e => this.handleChange(e, idx)}/>
            <h3>{product.quantity} * {product.product.price}€</h3>
            <button onClick = {(e) => {this.remove(product.product._id);}}>X</button>
            </div>
          
        )
      }))
      : (<h2>Your cart is loading...</h2>) }
      	<button onClick = {this.handleClear}>Clear Cart</button>
        <Total items = {items} />
      </div>

    )
  }
}
export default Cart;