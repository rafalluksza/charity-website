import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import {
    HashRouter,
    Switch,
    Route} from "react-router-dom";
import * as ROUTES from './constants/routes.js';
import Home from "./components/Home";
import SignIn from "./components/SignIn/SignIn";
import Registration from "./components/SignUp/SignUpPage";
import SignOut from "./components/SignOut/SignOut";
import GiveItBack from './components/GiveItBack/GiveItBack';
import AdminPage from "./components/Admin/AdminPage";
import Navigation from "./components/Navigation/Navigation";
import {checkLog, getData, setUserData} from "./components/Redux/actions/actions";
import {compose} from "redux";
import {withFirebase} from "./components/Firebase";
import {connect} from "react-redux";


const App = (props) => {
    // localStorage.clear()

    const [authUser] = useState(null)

    useEffect(()=> {
        console.log(authUser)
        props.firebase.auth.onAuthStateChanged(authUser => {
            if (authUser) {
                props.authenticateUser(authUser)
                props.logged(true)
                props.userData(authUser.email)
            } else {
                props.authenticateUser(null)
                props.logged(false)
                props.userData(null)
            }
        })
    },[]);

    // useEffect(()=> {
    //     console.log(authUser)
    //     props.firebase.auth.onAuthStateChanged(authUser=> {
    //         if (authUser) {
    //             const displayName = authUser.displayName;
    //             const email = authUser.email;
    //             const emailVerified = authUser.emailVerified;
    //             const photoURL = authUser.photoURL;
    //             const isAnonymous = authUser.isAnonymous;
    //             const uid = authUser.uid;
    //             const providerData = authUser.providerData;
    //         }
    //     }).then(()=>{
    //         props.authenticateUser()
    //     })
    // });


  return (
      <>
              <HashRouter>
                  <Navigation />
                  <Switch>
                      <Route exact path={ROUTES.LANDING} component={Home} />
                      <Route path={ROUTES.SIGN_IN} component={SignIn}/>
                      <Route path={ROUTES.SIGN_UP} component={Registration}/>
                      <Route path={ROUTES.LOG_OUT} component={SignOut}/>
                      <Route path={ROUTES.GIVEBACK} component={GiveItBack}/>
                      <Route path={ROUTES.ADMIN} component={AdminPage}/>
                  </Switch>
              </HashRouter>
      </>
  );
}

// export default App;
const mapState = state => {
    console.log(state)
    return ({user: state.UserData})
}

const mapDispatch = dispatch => {
    return {
        authenticateUser: getUser => dispatch(getData(getUser)),
        logged: status => dispatch(checkLog(status)),
        userData: email => dispatch(setUserData(email)),
    }
}


    // ({authenticateUser: getUser => dispatch(getData(getUser))})


export default compose(
    withFirebase,
    connect(mapState, mapDispatch))(App);