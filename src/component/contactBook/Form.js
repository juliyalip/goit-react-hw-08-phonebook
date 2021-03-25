import { Component } from "react";
import { connect } from 'react-redux';
import { Button, Form} from 'react-bootstrap';
import PropTypes from "prop-types";
import * as contactOperetions from '../../redux/contact/contact-operations'
import selectors from '../../redux/contact/contacts-selectors'
import s from "./form.module.css";

import Duplicate from './Duplicate';



 class FormBook extends Component {
  state = {
    name: "",
    number: "",
    error: false
    
  };

  static propTypes = {
    handleChange: PropTypes.func,
    handleFormSubmit: PropTypes.func,
    validateForm: PropTypes.func,
    reset: PropTypes.func,
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onAdd } = this.props;
   const isValedeForm = this.validateForm();
   if (!isValedeForm) return;
    onAdd({ name, number });
    this.reset();
  };

  validateForm = () => {
    const { name, number } = this.state;
       if (!name || !number) {
      alert("filed is empti");
      return false;
    }
    const contacts = this.props.contacts;
    if (contacts.some(contact => contact.name === name)) {
      this.setState({ error: true })
      setTimeout(() => this.setState({ error: false }), 1000)
      this.reset();
      return
}
    return true;
  };

     
  reset = () => {
    this.setState({
      name: "",
      number: "",
  
    });
   };
   



  render() {
    const { name, number } = this.state;
 

    return (
      <>
       

        {this.state.error && <Duplicate />}

        <form onSubmit={this.handleFormSubmit} className={s.form}>

  
        <Form.Group controlId="formBasicEmail">
        <Form.Label className="registrLabel">
          Name
          <Form.Control 
            type="text"
            name="name"
            value={name}
            placeholder="enter name"
            onChange={this.handleChange}
          />
            </Form.Label>
            </Form.Group>

        <Form.Group controlId="formBasicEmail">  
        <Form.Label className="registrLabel">
          Number
          <Form.Control
            type="text"
            name="number"
            value={number}
            placeholder="enter number"
            onChange={this.handleChange}
          />
            </Form.Label>
            </Form.Group>
        <Button variant="primary" type="submit">Add contact</Button>
        </form>

      
        </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: selectors.getContacts(state)
})


const mapDispatchToProps = dispatch => ({
  onAdd: (newContact) => dispatch(contactOperetions.addContact(newContact)),

})

export default connect(mapStateToProps, mapDispatchToProps)(FormBook)