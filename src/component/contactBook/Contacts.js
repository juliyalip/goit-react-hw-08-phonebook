import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button} from 'react-bootstrap';
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
        <Button variant="primary"
          type="button"
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
        </Button>
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