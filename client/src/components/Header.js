import React from 'react'
import image from '../images/Treatyoself.png'

const Header = () => (
  <div style={styles.height} className='frontPage' >
    <img src={image} alt="shopping-from-home" />
  <div className="blockquote-wrapper">
  <div className="blockquote">
    <h1> Three words for you:
      <span style={styles.trial}>Treat yo self</span>.
     </h1>
    <h4><em>This web project was made with React, React Hooks, Axios, Express, 
      MongoDB, Local Storage and Stripe.</em></h4>
  </div>
  
</div>

</div>
)
export default Header;
const styles = {
  trial: {
  color: '#e99f4c'
},
height: {
  paddingBottom: '0px',
 
}
}