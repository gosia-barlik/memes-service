import React, { Component } from "react";
import  Regular from "./components/Regular";
import { Header } from "./components/Header";
import Hot from "./components/Hot"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div className='App'>
            <Header />
              <Switch>
                <Route exact path='/hot'>
                  <Hot/>
                </Route>
                <Route exact path='/regular'>
                  <Regular />
                </Route>
              </Switch>
          </div>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
