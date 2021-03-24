import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import React, {Component} from 'react';

import selectors from '../../redux/contact/contacts-selectors';
import {fetchContact} from '../../redux/contact/contact-operations'

import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';

import './contact.css'




class BooksView extends Component  {

      componentDidMount(){
    this.props.contactView()
  }

    render() {
        return (
            <div className="containerBook">
                
        <Form />
        <Filter />
        <h2>Contacts</h2>
          <Contacts />  
    </div>
        )
    }
    

};

const mapStateToProps = state => ({
    contacts: selectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
     contactView: ()=> dispatch(fetchContact()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(BooksView);