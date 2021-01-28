import React, { useEffect, useState } from 'react'

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

const AddContent = (props) => {
  const [cart, setCart] = useState(cartFromLocalStorage)
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
})
return (
    <button onClick={() => setCart ([
      {
        name: props.name,
        id: props._id,
        price: props.price,
        image: props.image,
      }
    ])}>
      Let's shop!</button>
  )
}

export default AddContent


// import React from 'react'
// class AddContent extends React.Component {
//   setProduct(){
//     let teste = []
//     let product = {name: this.props.name, price: this.props.price, image: this.props.image, id: this.props._id}
//     teste.push(product)
//     localStorage.setItem('cart', JSON.stringify(teste))    
    

//   }
//   render(){
//     return (
//       <button onClick={ () => this.setProduct()}>Buy Item!</button>
//     )
//   }
// }

// export default AddContent