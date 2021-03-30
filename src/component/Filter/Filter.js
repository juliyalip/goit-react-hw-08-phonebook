import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/contact/contact-action';
import selectors from '../../redux/contact/contacts-selectors';
import { Form } from 'react-bootstrap';

const Filter = ({ value, onChange }) => (
	<Form.Label className="registrLabel">
		Find contacts by name
		<Form.Control
			type="text"
			name="filter"
			value={value}
			onChange={onChange}
			placeholder="find name"
		/>
	</Form.Label>
);

Filter.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	value: selectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
	onChange: e => dispatch(actions.changleFilter(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
