import { Component } from 'react';
import { connect } from 'react-redux';
import {Button, Form} from 'react-bootstrap'

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
            <form className="loginContainer"
                onSubmit={this.handleSubmit}
            >
               <Form.Group controlId="formBasicEmail">
                <Form.Label className="registrLabel">Имя 
                    <Form.Control  placeholder="Enter name" name="name"
                        value={name}
                        type="text" onChange={ this.handleChange}/>
                    </Form.Label>
                    </Form.Group>
 <Form.Group controlId="formBasicEmail">
                <Form.Label className="registrLabel">Почта
                    <Form.Control placeholder="enter e-mail" name="email"
                        value={email}
                        type="text" onChange={ this.handleChange}/>
                    </Form.Label>
                    </Form.Group>

<Form.Group controlId="formBasicEmail">
                <Form.Label className="registrLabel">
                   Пароль
                    <Form.Control placeholder="password" name="password"
                        type="text"
                        value={password} onChange={this.handleChange} />
                    </Form.Label>
                    </Form.Group>
                <Button variant="primary" type="submit">Зарегистрироваться</Button>
            </form>
            </>
            
        )
    }

}

const mapDispatchToProps = {
    onRegister: operations.register
}

export default connect(null, mapDispatchToProps)(RegisterView);