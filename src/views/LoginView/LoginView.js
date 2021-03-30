import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

import operations from '../../redux/auth/auth-operations';
import s from './LoginView.module.css';

class LoginView extends Component {
	static propTypes = {
		handleChange: PropTypes.func,
		handleSubmit: PropTypes.func,
	};

	state = {
		email: '',
		password: '',
	};

	handleChange = e => {
		const { name, value } = e.currentTarget;
		this.setState({
			[name]: value,
		});
	};

	handleSubmit = e => {
		e.preventDefault();

		this.props.onLogin(this.state);

		this.setState({
			email: '',
			password: '',
		});
	};

	render() {
		return (
			<>
				<Form onSubmit={this.handleSubmit} className={s.container}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>
							Почта
							<Form.Control
								placeholder="Enter e-mail"
								name="email"
								type="text"
								value={this.state.email}
								onChange={this.handleChange}
								autoComplete="off"
							/>
						</Form.Label>
					</Form.Group>

					<Form.Group controlId="formBasicEmail">
						<Form.Label>
							Пароль
							<Form.Control
								type="password"
								placeholder="password"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
						</Form.Label>
					</Form.Group>
					<Button variant="primary" type="submit" onSubmit={this.handleSubmit}>
						Войти
					</Button>
				</Form>
			</>
		);
	}
}

const mapDispatchToProps = {
	onLogin: operations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
