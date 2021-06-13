import React, { Component } from "react";
import  Regular from "./components/Regular";
import  Header  from "./components/Header";
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
                  <Regular isHot={true}/>
                </Route>
                <Route exact path='/regular'>
                  <Regular isHot={false}/>
                </Route>
              </Switch>
          </div>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
