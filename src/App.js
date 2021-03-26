import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  auth,
  createUserProfileDocument,
  // addCollectionAndDocuments,
} from './firebase/firebase';

import Navbar from './components/navbar/Navbar';
import Home from './screens/homescreen/Home';
import Shop from './screens/shopscreen/Shop';
import Checkout from './screens/checkoutscreen/Checkout';

import './App.scss';
import Login from './screens/authscreen/Login';
import Register from './screens/authscreen/Register';
import { setCurrentUser } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/userSelectors';
// import { selectCollectionsForPreview } from './redux/shop/shopSelectors';

const App = ({ currentUser, setCurrentUser /*collectionsArray*/ }) => {
  useEffect(() => {
    // const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot((snapshot) => {
    //       setCurrentUser({
    //         id: snapshot.id,
    //         ...snapshot.data(),
    //       });
    //     });
    //   }
    //   setCurrentUser(userAuth);
    //   // addCollectionAndDocuments(
    //   //   'collections',
    //   //   collectionsArray.map(({ title, items }) => ({ title, items }))
    //   // );
    // });
    // return () => unsubscribe;
  }, [setCurrentUser /*collectionsArray*/]);

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
  // collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
