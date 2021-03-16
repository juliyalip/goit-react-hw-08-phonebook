import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as actions from '../../redux/contact/contact-action';
import selectors from '../../redux/contact/contacts-selectors'



const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      placeholder="find name"
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};


const mapStateToProps = state =>( {
value: selectors.getFilter(state)
})

const mapDispatchToProps = dispatch => ({
   onChange: e => dispatch(actions.changleFilter(e.target.value))

})
export default connect(mapStateToProps, mapDispatchToProps)(Filter);