import React, { useEffect, useState } from 'react'
const AddContent = (props) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart') || '[]'))

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
    <button onClick={() => {
      let inThere = false;
      for(var ele of cart){
        if (ele.name === props.name){
          inThere = true;
          alert('Item is already in the cart! If you want to purchase more than one, you can change the quantity on the check-out.')
        } 
      } 
      if (inThere === false){
        setCart ([
          {
            name: props.name,
            id: props._id,
            price: props.price,
            image: props.image,
          },
          ...cart
        ])
      }
    }}>
      Let's shop!</button>

 </div> 
 )
}
export default AddContent
