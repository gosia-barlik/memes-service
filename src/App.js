import React, { Component } from "react";
import MemesList from "./components/memes/MemesList";
import AddMemeForm from "./components/memes/AddMemeForm";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Grid from "@material-ui/core/Grid";

class App extends Component {
  render() {
    return (
        <div className='App'>
          <BrowserRouter>
          <Header />
              <Grid
                container
                spacing={8}
                className='memeslist-container'>
                  <Switch>
                    <Route exact path='/favourites'>
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
              </Grid>
          </BrowserRouter>
        </div>
    );
  }
}
export default App;
