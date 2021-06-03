import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import { Container, TextField, Button, Grid, Grow } from "@material-ui/core";

export class Header extends Component {
  render() {
    return (
      <AppBar className='app-bar'>
        <Container maxWidth='xl'>
          <Grid
            container
            spacing={4}
            justify='center'
            className='grid-container-header'>
            <Button color='inherit' className='menu-button'>
              <Link to='/hot'>Hot</Link>
            </Button>
            <Button color='inherit' className='menu-button'>
              <Link to='/regular'>Regular</Link>
            </Button>
          </Grid>
        </Container>
      </AppBar>
    );
  }
}
