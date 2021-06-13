import React, { Component } from "react";
import MemesList from "./components/memes/MemesList";
import AddMemeForm from "./components/memes/AddMemeForm";
import Header from "./components/Header";
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
              <Route exact path='/favourite'>
                <MemesList isFavorite={true} />
              </Route>
              <Route exact path='/hot'>
                <MemesList isHot={true} />
              </Route>
              <Route exact path='/regular'>
                <MemesList isHot={false} />
              </Route>
              <Route exact path='/add'>
                <AddMemeForm />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
