import React, { Component } from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndRegister from './pages/signin-and-register/signin-and-register'

import { auth , createUserProfileDocument} from './firebase/firebase.utils'
import { Route, Switch } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => { //an open subscription btw firebase and our app
      createUserProfileDocument(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/signin" component={SignInAndRegister}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;