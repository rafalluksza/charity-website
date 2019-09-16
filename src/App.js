import React from 'react';
import './scss/main.scss';
import {
    HashRouter,
    Switch,
    Route} from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
      <>
          <HashRouter>
              <Switch>
                  <Route exaxt path='/' component={Home} />
              </Switch>
          </HashRouter>

      </>
  );
}

export default App;
