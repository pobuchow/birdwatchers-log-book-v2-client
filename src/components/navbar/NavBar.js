import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Login from './../login/Login';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar(props) {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
              <Typography  variant="h6" className={classes.title} data-testid="navbar-title" color="inherit" style={{textDecoration: 'none'}} component={Link} to={"/"}>
                {props.title}
              </Typography>
              <Button data-testid="navbar-login-button" color="inherit" style={{textDecoration: 'none'}} component={Link} to={"/login"}>Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}
