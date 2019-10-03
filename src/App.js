import React from 'react';
import './scss/main.scss';
import {
    HashRouter,
    Switch,
    Route} from "react-router-dom";
import Home from "./components/Home";
import Signing from "./components/Sign&Reg/Signing";
import Registration from "./components/Sign&Reg/Registation";

function App() {
  return (
      <>
          <HashRouter>
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/logowanie' component={Signing}/>
                  <Route path='/rejestracja' component={Registration}/>
              </Switch>
          </HashRouter>
      </>
  );
}

export default App;
