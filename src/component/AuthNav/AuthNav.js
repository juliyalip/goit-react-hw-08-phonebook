import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
	link: {
		display: 'inline-block',
		color: 'black',
		margin: '10px',
	},
	activeLink: {
		color: 'red',
	},
};

const AythNav = () => (
	<div>
		<NavLink
			to={{
				pathname: '/registr',
			}}
			exact
			style={styles.link}
			activeStyle={styles.activeLink}
		>
			Регистрация
		</NavLink>

		<NavLink
			to="/login"
			exact
			style={styles.link}
			activeStyle={styles.activeLink}
		>
			Логин
		</NavLink>
	</div>
);

export default AythNav;
