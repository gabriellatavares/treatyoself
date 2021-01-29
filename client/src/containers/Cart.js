import React from "react";
import EmptyCart from './Empty'
import Total from './Total'


class Cart extends React.Component {

  state = {
    cart: JSON.parse(localStorage.getItem('shopping-cart')),
    quantity: '',
  }
clearCart = () => {
  localStorage.clear()
  window.location = '/cart'
}

handleChange = (e, i) => {
  let inputValue = e.target.value;
  this.setState(prevState => {
    let quantity = [...prevState.quantity];
    quantity[i] = {quantity: inputValue} 
    return {quantity}

  })
};



  render (){
    if ((this.state.cart == null) || (this.state.cart == [])) {
      return (
        <EmptyCart />
      )} else {
        return (
          <div className="shopCart">
            <h1>Cart</h1>
            <h3>You selected really nice items. Now it's time to check out your order below:</h3>
            <div className="items"> {this.state.cart.map ((item, i) => {
              return <div className="item" key={i}> 
              <h3>{item.name}</h3>
              <img className='imgcart' src= {item.image} alt ="nice_cosmetics"/>
              <div className="price">Price: {item.price}€</div>
              <div className="quantity">Quantity: </div>
              <input onChange = {e => this.handleChange(e, i)} type="number" min="1" step="1"/>
              <button>🗑️</button>
              </div>
              
            })
           
            }
    
            </div>  
             <Total 
             items = {this.state.cart} 
             quantity = {this.state.quantity} 
             />
            <div><button onClick={this.clearCart}>Clear cart!</button></div>             
           
          
          </div>
        )
     
    }
  }

}


export default Cart

