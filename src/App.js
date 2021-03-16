import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase';

import Navbar from './components/navbar/Navbar';
import Home from './screens/homescreen/Home';
import Shop from './screens/shopscreen/Shop';

import './App.scss';
import Login from './screens/authscreen/Login';
import Register from './screens/authscreen/Register';
import { setCurrentUser } from './redux/user/userActions';

const App = ({ setCurrentUser }) => {
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
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);

// passed in null as the first arg because we dont need state to props from our reducer
