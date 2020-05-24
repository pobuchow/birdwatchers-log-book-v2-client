import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& label.Mui-focused': {
            color: '#595142',
          },
        '& .MuiFilledInput-underline:after': {
            borderBottomColor: '#595142',
        },
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            background: "#BFAE56",
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
    const handleSubmit = () => {
        alert(`user: ${username} pass:  ${password}`);
    }
    
    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={ handleSubmit }>
            <TextField
                required
                id="login-username"
                label="username"
                variant="filled"
                onChange = {(_e) => setUsername(_e.target.value)}
            />
            <TextField
                required
                id="login-password"
                label="password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                onChange = {(_e) => setPassword(_e.target.value)}
            />
            < Button variant="contained" className={classes.button} type="submit">Login</Button>
        </form>
    );
}
