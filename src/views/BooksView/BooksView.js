import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import React, {Component} from 'react';

import selectors from '../../redux/contact/contacts-selectors';
import { fetchContact } from '../../redux/contact/contact-operations'

import s from './bookView.module.css';

import ContactForm from '../../component/ContactForm';
import ContactList from '../../component/ContactList';
import Filter from '../../component/Filter';






class BooksView extends Component  {

      componentDidMount(){
    this.props.contactView()
  }

    render() {
        return (
          <div className={s.container}>
            <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="title"
          unmountOnExit
        >
          <h1 className="title">Phonebook</h1>
        </CSSTransition>
                
            <ContactForm />
             <CSSTransition in={this.props.contacts.length > 1}
              timeout={250} unmountOnExit>
               <Filter />
      </CSSTransition>
       
            <h2>Contacts</h2>
             <CSSTransition in={this.props.contacts.length > 0}
          appear={true} timeout={250} unmountOnExit
            >
              <ContactList />  
          </CSSTransition>
          
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