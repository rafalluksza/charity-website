import React, {useEffect} from 'react';
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
import { setAdmin } from "./components/Redux/actions/actions";
import {compose} from "redux";
import {withFirebase} from "./components/Firebase";
import {connect} from "react-redux";


const App = ({firebase, isAdmin}) => {
    // const [authUser] = useState(null)

    useEffect(()=> {
        firebase.auth.onAuthStateChanged(user =>  {
            console.log(user)
            if (user.email === 'rafalluksza@gmail.com') {
                isAdmin(true)
            } else {
                isAdmin(false)
            }
        });
    },[]);



  return (
      <>
              <HashRouter>
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

const mapState = state => {
    // console.log(state)
    return ({user: state.UserData})
}


const mapDispatch = dispatch => {
    return ({
        isAdmin: admin => dispatch(setAdmin(admin))
    })};

export default compose(
    withFirebase,
    connect(mapState, mapDispatch))(App);