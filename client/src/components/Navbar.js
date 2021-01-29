import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => (
	<div className="navbar">
		<NavLink exact style={styles.default} activeStyle={styles.active} to={'/'}>
			Home
		</NavLink>
		<NavLink exact style={styles.default} activeStyle={styles.active} to={'/cart'}>
			Cart
		</NavLink>
	</div>
);

export default Navbar;

const styles = {
	active: {
		color: 'gray'
	},
	default: {
		textDecoration: 'none',
		color: 'white'
	}
};
