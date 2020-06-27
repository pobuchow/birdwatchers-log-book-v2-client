import React, { useState } from 'react';

import { userService } from '../../services/userService';
import { createBrowserHistory } from "history";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const history = createBrowserHistory({forceRefresh:true});

const useStyles = makeStyles((theme) => ({
    root: {
        '& label.Mui-focused': {
            color: '#595142',
        },
        '& .MuiFilledInput-underline:after': {
            borderBottomColor: '#595142',
        },
        '& > *': {
            margin: 'auto',
            width: '25ch',
            background: "#BFAE56",
            justify: "center"
        },
    },
    button: {
        color: '#595142',
        backgroundColor: "#A69677",
        "&:hover": {
            backgroundColor: "#A69677"
        }
    },
}));

export default function Login() {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async () => {
        userService.login(username, password)
            .then(
                user => {
                    alert("Here we go again, " + user.username);
                    history.push("/home");
                },
                error => {
                    alert("Something went wrong, " + error.toString());
                    console.log(error.toString());  
                }
            );
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="login-username"
                        label="username"
                        variant="filled"
                        onChange={(_e) => setUsername(_e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="login-password"
                        label="password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                        onChange={(_e) => setPassword(_e.target.value)}
                    /></Grid>
                <Grid item xs={12}>
                    < Button variant="contained" className={classes.button} type="submit">Login</Button>
                </Grid>
            </Grid>
        </form>
    );
}
