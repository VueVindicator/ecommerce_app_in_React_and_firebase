import React, { Component } from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndRegister from './pages/signin-and-register/signin-and-register'

import { setCurrentUser } from './redux/user/user.actions.js'
import { auth , createUserProfileDocument } from './firebase/firebase.utils'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';

class App extends Component {

  unsubscribeFromAuth = null

  componentDidMount(){
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { //an open subscription btw firebase and our app
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndRegister></SignInAndRegister>)}></Route>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({ user: {currentUser} }) => ({
  currentUser: currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);