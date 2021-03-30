import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import authSelectors from '../../redux/auth/auth-selectors';

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

const Navigation = ({ isAuthenticated }) => (
	<div>
		<NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
			Главная
		</NavLink>
		{isAuthenticated && (
			<NavLink
				to="/contacts"
				exact
				style={styles.link}
				activeStyle={styles.activeLink}
			>
				Kоллекция контактов
			</NavLink>
		)}
	</div>
);

const mapStateToProps = state => ({
	isAuthenticated: authSelectors.getAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
