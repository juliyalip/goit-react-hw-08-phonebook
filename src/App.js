import { Component, Suspense, lazy } from "react";
import "./index.css";
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import authOps from './redux/auth/auth-operations';

import PrivateRoute from './component/PrivatRoute';
import PublicRoute from './component/PublicRoute'

import AppBar from './component/header/AppBar';
import Container from './component/container/Container'


import selectors from './redux/contact/contacts-selectors'

import './component/contactBook/contact.css'

const HomeView = lazy(() => import('./component/HomeView'))
const RegisterView = lazy(() => import('./component/header/RegisterView'))
const LoginView = lazy(() => import('./component/header/LoginView'))
const BooksView = lazy(() => import('./component/contactBook/BooksView'))


class App extends Component {


  componentDidMount() {
  this.props.onGetCurrentUser()
}
    
 render() {

   // если проп restricted передали он по умолчанию true
  return (
    <>
      <Container >
        <AppBar />

      
    <Suspense fallback={<p>Загружаем...</p>}>
        <Switch>
          <PublicRoute exact path="/" component={HomeView} />
        <PublicRoute path="/registr"
          restricted
          redirectTo="/contacts"
          component={RegisterView} />
        
        <PublicRoute path="/login"
          restricted
          redirectTo="/contacts"
          component={LoginView} />
        <PrivateRoute path="/contacts" component={BooksView} redirectTo="/login" />

        </Switch>
     </Suspense>
  
  
      </Container>              
     
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
