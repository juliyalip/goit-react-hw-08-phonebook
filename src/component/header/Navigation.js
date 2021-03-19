import { NavLink } from 'react-router-dom';

const styles = {
    link: {
        display: 'inline-block',
        color: 'black',
        margin: '10px',
    },
    activeLink: {
        color: 'red'
    }
}

const Navigation = () => (
    <div>
        <NavLink to="/"
            exact style={styles.link}
            activeStyle={styles.activeLink}>
            Главная</NavLink>
        <NavLink to="/contacts"
            exact style={styles.link}
            activeStyle={styles.activeLink}>
            Kоллекция контактов</NavLink>
    </div>
);

export default Navigation;