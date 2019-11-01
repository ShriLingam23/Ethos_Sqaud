import React, { useState} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import StudentLanding from '../StudentLanding';
import { FaWindows } from 'react-icons/fa';

import Swal from 'sweetalert2'

  const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',
    },
    
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const handleLogin = (email, password) => {
    let loginSucuess = false;
    if(!email || !password){
        alert("User name or password is empty");
    } else {
        if(email){
            axios.get('http://localhost:4000/api/user/get/email/'+ email)
                .then(resJson => {
                    console.log(resJson.data)
                    if(resJson.data.data && resJson.data.data[0] && resJson.data.data[0].password === password) {
                      loginSucuess = true;
                      window.localStorage.setItem('authenticated', true);
                      if(resJson.data.data[0].type === 'student'){
                        Swal.fire(
                          'Good job!',
                          'Student Successfully LoggedIn!',
                          'success'
                        )
                        window.location.assign('/student');
                      }else if(resJson.data.data[0].type === 'moderator'){
                        Swal.fire(
                          'Good job!',
                          'Moderator Successfully LoggedIn!',
                          'success'
                        )
                        window.location.assign('/moderator');
                      }else{
                        Swal.fire(
                          'Good job!',
                          'Admin Successfully LoggedIn!',
                          'success'
                        )
                        window.location.assign('/');
                      }
                      
                    } else {
                      Swal.fire(
                        'Invalid password!',
                        'You entered an incoreect password!',
                        'error'
                      )
                    }
                })
                .catch(err => {
                  Swal.fire(
                    'Something went worng!',
                    'Something went wrong!',
                    'error'
                  )
                  console.log(err)
                });
        } 
    }
    return loginSucuess;
  }

    export default function SignInSide() {
      const [loginSucuess, setLoginSucuess] = useState();
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const classes = useStyles();
    
      return (
        <Grid container component="main" className={classes.root}>
          {loginSucuess && <Link to='/'></Link>}
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                {/* <LockOutlinedIcon /> */}
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} noValidate >
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  onClick={()=>{
                    const isValid = handleLogin(email, password);
                    if(isValid){
                      setLoginSucuess(true);
                    }
                  }}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  {/* <Copyright /> */}
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>
      );
    }