import { Component } from "react";
import "./index.css";
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {fetchContact} from './redux/contact/contact-operations'

import Contacts from "./component/contactBook/Contacts";
import Filter from "./component/contactBook/Filter";
import Form from "./component/contactBook/Form";

import selectors from './redux/contact/contacts-selectors'


import './component/contactBook/contact.css'




class App extends Component {

  componentDidMount(){
    this.props.contactView()
  }
    
 render() {
   const { contacts } = this.props
   
  return (
       <>
        <div className="container">

        
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="title"
          unmountOnExit
        >
          <h1 className="title">Phonebook</h1>
        </CSSTransition>
        
        
          <Form />

        <h2>Contacts</h2>
        
 <CSSTransition in={contacts.length > 1}
      timeout={250} unmountOnExit>
          <Filter />
        </CSSTransition>
        
        {this.props.isLoading && <h1>Загружаем ...</h1>}
            
          <CSSTransition in={contacts.length > 0}
          appear={true} timeout={250} unmountOnExit
          >
         <Contacts />  
                    
            </CSSTransition>
   
     
                   
        </div>
      </>
    )
  }
}


 

const mapStateToProps = state => ({
  contacts: selectors.getContacts(state),
  isLoading: selectors.getLoading(state)
}
);


const mapDispatchToProps = dispatch => ({
  contactView: ()=> dispatch(fetchContact()) 
})
  
  
  
export default connect(mapStateToProps, mapDispatchToProps)(App);
