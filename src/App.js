import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase';

import Navbar from './components/navbar/Navbar';
import Home from './screens/homescreen/Home';
import Shop from './screens/shopscreen/Shop';

import './App.scss';
import Login from './screens/authscreen/Login';
import Register from './screens/authscreen/Register';
import { setCurrentUser } from './redux/user/userActions';

const App = ({ currentUser, setCurrentUser }) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => unsubscribe;
  }, [setCurrentUser]);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
