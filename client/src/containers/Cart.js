import React from "react";
import EmptyCart from './Empty'
import Total from './Total'

class Cart extends React.Component {

  state = {
    cart: JSON.parse(localStorage.getItem('shopping-cart')),
    quantity: '',
  }

  clearCart = () => {
    localStorage.setItem('shopping-cart', JSON.stringify([]))
    window.location = '/cart'
    localStorage.setItem('amount', JSON.stringify(0));
    localStorage.setItem('count', JSON.stringify(0));
  }


handleChange = (e, i) => {
  let inputValue = e.target.value;
  this.setState(prevState => {
    let quantity = [...prevState.quantity];
    quantity[i] = {quantity: inputValue} 
    return {quantity}

  })
};
 deleteItem(index){
   this.setState((prevState) => ({
     cart: prevState.cart.filter((_, i) => i !== index)
      })
    )
      let teste = []
      teste = JSON.parse(localStorage.getItem('shopping-cart'))
      teste.splice(index, 1)
      localStorage.setItem('shopping-cart', JSON.stringify(teste))
      window.location.reload();
      let counter = localStorage.getItem('count')
      let counter2 = counter - 1
      localStorage.setItem('count', JSON.stringify(counter2));

 }





  render (){
    if (this.state.cart.length === 0) {
      return (
        <EmptyCart />
      )} else {
        return (
          <div className="shopCart">
              <h1>Shopping cart:</h1>
            <h3>You selected really nice items. Now it's time to check out your order below:</h3>
            <div className="items"> {this.state.cart.map ((item, i) => {
              return <div className="item" key={i}>
              <div style={cart.container}>
                <h3>{item.name}</h3>
              <button className='delete'onClick={()=>{
                this.deleteItem(i)
                }}><i className="far fa-trash-alt"></i></button></div>
              <img className='imgcart' src= {item.image} alt ="nice_cosmetics"/>
              <div style={cart.container.price}>
              <div className="price">Price: {item.price}€
              </div>
              <div>
              <input style={cart.input} placeholder='Qty' onChange = {e => this.handleChange(e, i)} type="number" min="1" step="1"  size="4"/> </div>
              
              </div></div>
            
            })
           
            }
    
            </div> 
             <Total 
             items = {this.state.cart} 
             quantity = {this.state.quantity} 
             />           
                      <div className='clear'><button className='delete' onClick={this.clearCart}>Clear cart!</button></div> 
                      

          </div>
        )
     
    }
  }

}


export default Cart


const cart = {
  input : {
		width: '4em',
    height: '3vh',
    fontFamily: 'Merriweather',
		
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    price: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    }
  }
}