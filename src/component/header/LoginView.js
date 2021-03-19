import { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import operations from '../../redux/auth/auth-operations';
import './header.css'


class LoginView extends Component {
    
    state = {
          email: '',
          password: ''
    }

    handleChange = e => {
      const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });     
    }

    handleSubmit = e => {
        e.preventDefault();
        
        this.props.onLogin(this.state)

        this.setState({
            name: '',
            email: '',
            password:''
        })
    
    }


    //  static propTypes  = {    }

    render() {
        return (
            <>
                <form className="registerContainer" onSubmit={this.handleSubmit}>
                    <label className="registrLabel">
                        Почта
                        <input name="email"
                            type="text"
                            value={this.state.parol}
                            onChange={this.handleChange} autoComplete="off"/>
                    </label>
                    <label className="registrLabel">
                        Пароль
                        <input type="text"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange} />
                    </label>
                    <button type="submit" onSubmit={this.handleSubmit}>
                        Войти
                    </button>
                </form>
            </>)
    }
}

const mapDispatchToProps = {
onLogin: operations.logIn,
}

//  const mapDispatchToProps = dispatch => {
//  onRegister: (data) => dispatch(operations.register(data))    
//  }


export default connect(null, mapDispatchToProps)(LoginView);
