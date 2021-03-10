import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './screens/homescreen/Home';
import Shop from './screens/shopscreen/Shop';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
