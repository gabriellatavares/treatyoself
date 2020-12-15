import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => (
	<div className="navbar">
		<NavLink exact style={styles.default} activeStyle={styles.active} to={'/'}>
			Home - public
		</NavLink>

		{!isLoggedIn ? (
			[
				<NavLink exact style={styles.default} activeStyle={styles.active} to={'/register'}>
					Register
				</NavLink>,
				<NavLink exact style={styles.default} activeStyle={styles.active} to={'/login'}>
					Login
				</NavLink>
			]
		) : null}

		<NavLink exact style={styles.default} activeStyle={styles.active} to={'/secret-page'}>
			Secret Page - protected
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
