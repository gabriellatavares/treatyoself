import React, { useEffect, useState } from 'react'
const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')
const AddContent = (props) => {
  const [cart, setCart] = useState(cartFromLocalStorage)

  useEffect(() => {
    const data = localStorage.getItem("shopping-cart");
    if (data) {
      setCart(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(cart))
})

return (
  <div>
    <button onClick={() => setCart ([
      {
        name: props.name,
        id: props._id,
        price: props.price,
        image: props.image,
      },
      ...cart
    ])

    }>
      Let's shop!</button>

 </div> 
 )
}
export default AddContent
