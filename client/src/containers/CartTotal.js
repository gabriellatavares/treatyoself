import React from 'react';

function Total(props){
  let total = 0;
  props.items.map((product, i) => {
    let price = Number(props.items[i].product.price)
    let quantity = Number(props.items[i].quantity)
    let indivCost = price.toFixed(2) * quantity.toFixed(2)
    total = total + indivCost;
    return(total)
  })
  console.log(total)
  localStorage.setItem('amount', total)

  return (
    <div>
      <h2>Total: {total.toFixed(2)}€</h2>
      {/* future payment here */}
    </div>
  )
}
export default Total;