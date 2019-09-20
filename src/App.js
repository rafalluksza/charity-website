import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import {
    HashRouter,
    Switch,
    Route} from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn/SignIn";
import Registration from "./components/SignUp/SignUpPage";
import SignOut from "./components/SignOut/SignOut";
import GiveItBack from './components/GiveItBack/GiveItBack';
import * as ROUTES from './constants/routes.js';
import AdminPage from "./components/Admin/AdminPage";
import TopMenu from "./components/HomeHeader/TopMenu";


function App() {
  return (
      <>
          <HashRouter>
              <TopMenu />
              <Switch>
                  <Route exact path={ROUTES.LANDING} component={Home} />
                  <Route path={ROUTES.SIGN_IN} component={SignIn}/>
                  <Route path={ROUTES.SIGN_UP} component={Registration}/>
                  <Route path={ROUTES.LOG_OUT} component={SignOut}/>
                  <Route path={ROUTES.GIVEBACK} component={GiveItBack}/>
                  <Route path={ROUTES.ADMIN} component={AdminPage} />
              </Switch>
          </HashRouter>
      </>
  );
}

export default App;
