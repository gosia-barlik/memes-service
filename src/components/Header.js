import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Button, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    "&.active": {
      fontWeight:700,
    },
  },
});

export default function Header () {
  const classes = useStyles();

    return (
      <AppBar className='app-bar'>
        <Container maxWidth='xl'>
          <Grid
            container
            spacing={4}
            justify='center'
            className='grid-container-header'>
            <Button color='inherit' className='menu-button'>
              <NavLink to='/hot' className={classes.button}>Hot</NavLink>
            </Button>
            <Button color='inherit' className='menu-button'>
              <NavLink to='/regular' className={classes.button}>Regular</NavLink>
            </Button>
          </Grid>
        </Container>
      </AppBar>
    );
  
}
