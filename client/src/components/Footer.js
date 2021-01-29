import React from 'react'
import {NavLink} from 'react-router-dom';

const Footer = ({isLoggedIn}) => (
      <footer>
     
        <div><p>About us!</p>
          <span>Future link here</span>
        </div>
        <div><p>Copyright © 2021 — Web Cosmetics | Treat yo self!</p></div>
        <div><p>
        	<NavLink exact style={styles.default} activeStyle={styles.active} to={'/secret-page'}>
		      	Admin Page
	      </NavLink></p>
        {!isLoggedIn ? (
			[
			<NavLink exact style={styles.default} activeStyle={styles.active} to={'/register'}>
					Register -
				</NavLink>,
				<NavLink exact style={styles.default} activeStyle={styles.active} to={'/login'}>
					Login
				</NavLink>
			]
		) : null}</div>



      </footer>
)
export default Footer;
const styles = {
	active: {
		color: 'gray'
	},
	default: {
		textDecoration: 'none',
		color: 'white'
	}
};
