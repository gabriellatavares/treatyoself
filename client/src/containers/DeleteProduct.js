import React from 'react'
import Axios from 'axios'
import { NavLink } from 'react-router-dom'
import { URL } from '../config'

class DeleteProduct extends React.Component {
state = {
  id: '',
}

 

handleChange = event => {
  this.setState({id: event.target.value})
}

handleSubmit = event => {
  event.preventDefault();


  Axios.delete(`${URL}/products/delete/${this.state.id}`)
  .then (res => {
    console.log(res);
    console.log(res.data)
  })
  window.location = '/products'

}



render(){
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Product ID: 
          <input type='text' name='id' onChange={this.handleChange} />
          <button type='submit'>Delete!</button>
        </label>
      </form>   
      <NavLink to = {`/products/`}>Back to products</NavLink>
    </div>
  )
}

}

export default DeleteProduct;