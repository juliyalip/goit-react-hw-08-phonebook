import { Component } from 'react';
import { connect } from 'react-redux';

import './header.css';
import operations from '../../redux/auth/auth-operations';

class RegisterView extends Component{
    state = {
        name: '',
        email: '',
      password: ''
    }

    handleChange = ({target: {name, value}}) => {
this.setState({[name]: value})
    }

    
    handleSubmit = e => {
        e.preventDefault();
        this.props.onRegister(this.state)
        this.setState({ name: '',  email: '', password: '' })
    }
    
    render() {
        const { name, password, email } = this.state;

        return (<>
            <form className="registerContainer"
                onSubmit={this.handleSubmit}
            >
                <label className="registrLabel">Имя
                    <input name="name"
                        value={name}
                        type="text" onChange={ this.handleChange}/>
                </label>
                <label className="registrLabel">Почта
                    <input name="email"
                        value={email}
                        type="text" onChange={ this.handleChange}/>
                </label>
                <label className="registrLabel">
                   Пароль
                    <input name="password"
                        type="text"
                        value={password} onChange={this.handleChange} />
                </label>
                <button type="submit">Зарегистрироваться</button>
            </form>
            </>
            
        )
    }

}

const mapDispatchToProps = {
    onRegister: operations.register
}

export default connect(null, mapDispatchToProps)(RegisterView);