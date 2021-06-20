import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Button, Grid } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  button: {
    height: 25,
    "&.active": {
      fontWeight: 700,
    },
  },
  logo: {
    fontSize: 24,
    paddingBottom: 5
  },
  container: {
    display:'flex',
    flexDirection:'row',
    alignContent: 'stretch'
  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar className='app-bar'>
      <Container maxWidth='xl'className={classes.container}>
        <Button color='inherit' className='menu-button logo-button'>
          <NavLink to='/' className={`${classes.logo} ${classes.button}`}>
            M
          </NavLink>
        </Button>
        <Grid
          container
          spacing={4}
          justify='flex-end'
          className='grid-container-header'>
          <Button color='inherit' className='menu-button'>
            <NavLink to='/regular' className={classes.button}>
              Regular
            </NavLink>
          </Button>

          <Button color='inherit' className='menu-button'>
            <NavLink to='/hot' className={classes.button}>
              Hot
            </NavLink>
          </Button>

          <Button color='inherit' className='menu-button'>
            <NavLink to='/favourites' className={classes.button}>
              Favourites
            </NavLink>
          </Button>

          <Button color='inherit' className='menu-button'>
            <NavLink to='/add' className={classes.button}>
           <AddIcon/>
            </NavLink>
          </Button>
        </Grid>
      </Container>
    </AppBar>
  );
}
