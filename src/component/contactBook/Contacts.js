import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as operation from '../../redux/contact/contact-operations'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import selectors from '../../redux/contact/contacts-selectors';
import "./contact.css";




const Contacts = ({ persons, onDelete }) => (
  <TransitionGroup component="ul">
     
    {persons.map(({ id, name, number }) => (
      <CSSTransition key={id} timeout={250} classNames="contactItem">
        
       <li  className="contactItem" id={id}>
        <p>
          {name} {number}
        </p>
        <button
          type="button"
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
        </button>
        </li>
        </CSSTransition>
   
    ))}

 </TransitionGroup>

);

Contacts.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
  onDelete: PropTypes.func.isRequired,
};


const mapStateToProps = state =>( {
    persons: selectors.getVisibleContact(state)})
  

const mapDispatchToProps = dispatch => ({
onDelete: (id) => dispatch(operation.deleteContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps )(Contacts);