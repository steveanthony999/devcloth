import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Navbar from './components/navbar/Navbar';
import Home from './screens/homescreen/Home';
import Shop from './screens/shopscreen/Shop';
import Checkout from './screens/checkoutscreen/Checkout';

import './App.scss';
import Login from './screens/authscreen/Login';
import Register from './screens/authscreen/Register';
import { selectCurrentUser } from './redux/user/userSelectors';

const App = ({ currentUser }) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route exact path='/checkout' component={Checkout} />
        <Route
          exact
          path='/login'
          render={() => (currentUser ? <Redirect to='/' /> : <Login />)}
        />
        <Route
          exact
          path='/register'
          render={() => (currentUser ? <Redirect to='/' /> : <Register />)}
        />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
