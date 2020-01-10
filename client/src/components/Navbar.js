import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
   <div className='navbar'>
   	  <NavLink
        exact
        style={styles.default}
        activeStyle={styles.active}
        to={"/register"}
	  >
        Register
      </NavLink>

      <NavLink
        exact
        style={styles.default}
        activeStyle={styles.active}
        to={"/"}
      >
        Login
      </NavLink>

      <NavLink
        exact
        style={styles.default}
        activeStyle={styles.active}
        to={"/secret-page"}
      >
        Secret Page
      </NavLink>
   </div>
)
   
export default Navbar

const styles = {
  active: {
    color: "gray"
  },
  default: {
    textDecoration: "none",
    color: "white"
  }
};
