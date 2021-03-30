import s from './container.module.css'
import PropTypes from "prop-types";

import AppBar from '../AppBar';



const Container = ({ children }) => {
    return(
    <div className={s.container}>
        <AppBar />
        {children}
    </div>)
};

Container.propTypes = {
    children: PropTypes.node.isRequired
}

export default Container