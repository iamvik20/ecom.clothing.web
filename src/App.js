import React from 'react';
import  Homepage  from './pages/Homepage/Homepage.jsx';
import ShopPage from './pages/shop/Shop.jsx';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Header from './Components/Header/Header.jsx';
import SignInSignUp from './sign-in-and-sign-up/sign-in-and-sign-up.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(async user => {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          
          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            })
          });
        }
        this.setState({ currentUser: userAuth });
      })
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={Homepage}  />
            <Route  path='/shop' component={ShopPage}  />
            <Route path='/signin' component={SignInSignUp} />
          </Switch>
      </div>
    )
  }
}

export default App;
