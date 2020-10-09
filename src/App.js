import React, { Component } from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndRegister from './components/signin-and-register/Signin-and-register'

import { Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/signin" component={SignInAndRegister}></Route>
        </Switch>
      </div>
    )
}

export default App;