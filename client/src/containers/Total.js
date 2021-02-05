import React from 'react';
import EmptyCart from './Empty'
import { Link } from 'react-router-dom'

class Total extends React.Component {

 
  render () {
    let total = 0;
    let stockUpdate = []

    return (
      <div> {this.props.items.map ((item, i) => {
        let quantity = this.props.quantity[i]
        if (quantity === undefined){
          quantity = '1';
          
        } else {       
        quantity = quantity.quantity

        }    
        total += this.props.items[i].price * quantity
        stockUpdate.push([this.props.items[i], quantity])
        localStorage.setItem('amount', total);
        return null;
      })
      }
          {
          total === 0 ?
           <EmptyCart /> :
          <div> 
              <h2 className='clear'>Cart Total: {total.toFixed(2)}€ </h2>
              {/* <NavLink stockUpdate={stockUpdate} to = {'/payment'}><button className='payUs bigger'>Proceed to checkout</button></NavLink>   */}
              <Link to={{
                pathname: '/payment',
                state: {
                  stockUpdate: stockUpdate
                }
              }}><button className='payUs bigger'>Proceed to checkout</button></Link>
              
          </div>
          }
      </div>
    )
  }
}


export default Total;