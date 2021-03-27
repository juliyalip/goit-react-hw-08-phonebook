import { Component, Suspense, lazy } from "react";
import "./index.css";
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import authOps from './redux/auth/auth-operations';

import PrivateRoute from './component/PrivatRoute';
import PublicRoute from './component/PublicRoute'

import AppBar from './component/AppBar';
import Container from './component/Container'

const HomeView = lazy(() => import('./views/HomeView'))
const RegisterView = lazy(() => import('./views/RegistrView'))
const LoginView = lazy(() => import('./views/LoginView'))
const BooksView = lazy(() => import('./views/BooksView'))


class App extends Component {
  
  componentDidMount() {
  this.props.onGetCurrentUser()
}
    
 render() {
 return (
   
      <Container >
        <AppBar />
        <Suspense fallback={<Loader type="Circles" color="#00BFFF" height={80} width={80} />}>
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
    
    )
  }
}

const mapDispatchToProps = {
   onGetCurrentUser: authOps.getCurrentUser
 } 
   
export default connect(null, mapDispatchToProps)( App);
