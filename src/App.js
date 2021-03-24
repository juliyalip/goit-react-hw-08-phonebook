import { Component } from "react";
import "./index.css";
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Route, Switch } from 'react-router-dom';
import authOps from './redux/auth/auth-operations'

import HomeView from './component/HomeView';
import RegisterView from './component/header/RegisterView';
import LoginView from './component/header/LoginView';
import BooksView from './component/contactBook/BooksView';
//import Contacts from "./component/contactBook/Contacts";
//import Filter from "./component/contactBook/Filter";
//import Form from "./component/contactBook/Form";



import AppBar from './component/header/AppBar'


import selectors from './redux/contact/contacts-selectors'


import './component/contactBook/contact.css'




class App extends Component {


  componentDidMount() {
  this.props.onGetCurrentUser()
}
    
 render() {

   
  return (
    <>
        <AppBar />
       
       
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/registr" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={BooksView} />
          
       
          
         
        </Switch>
        
  { /*     <CSSTransition
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
                    
  </CSSTransition> */}
   
                    
     
      </>
    )
  }
}


 

const mapStateToProps = state => ({
  contacts: selectors.getContacts(state),
  isLoading: selectors.getLoading(state)
}
);


const mapDispatchToProps = {
   onGetCurrentUser: authOps.getCurrentUser
 } 
  
  
export default connect(mapStateToProps, mapDispatchToProps)(App);
