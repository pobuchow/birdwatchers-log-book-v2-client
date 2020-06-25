import React, { useState } from 'react';

import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1, 
  },
  toolbar:{
    background: "#3726A6"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#ACC3F2"
  },
}));



export default function NavBar(props) {
  const classes = useStyles();
  let button;
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  if (user) {  
    button = <Button  data-testid="navbar-logout-button" 
                      style={{textDecoration: 'none', color: "#ACC3F2"}} 
                      component={Link}
                      onClick={() => {
                        localStorage.removeItem('user');
                        setUser(null)
                      }}
                      to={"/"}>
                        Logout
              </Button>
  } else {      
    button = <Button  data-testid="navbar-login-button" 
                      style={{textDecoration: 'none', color: "#ACC3F2"}} 
                      component={Link} 
                      to={"/login"}>
                        Login
              </Button>
  }

  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
              <Typography  variant="h6" className={classes.title} data-testid="navbar-title" color="inherit" style={{textDecoration: 'none'}} component={Link} to={"/"}>
                {props.title}
              </Typography>
              {button}
          </Toolbar>
        </AppBar>
      </div>
  );
}