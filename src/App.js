import React from 'react';
import  Homepage  from './pages/Homepage/Homepage.jsx';
import ShopPage from './pages/shop/Shop.jsx';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Header from './Components/Header/Header.jsx';
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx';
import CheckOutPage from './pages/checkout/check-out.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions.js';
import { selectCurrentUser } from './redux/user/user.selectoe.js';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    auth.onAuthStateChanged(async user => {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          
          userRef.onSnapshot(snapShot => {
              setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              });
          });
        }
        setCurrentUser(userAuth);
      })
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
          <Switch>
            <Route exact path='/' component={Homepage}  />
            <Route  path='/shop' component={ShopPage}  />
            <Route  exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUp />)} />
            <Route exact  path='/checkout' component={CheckOutPage} />
          </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
