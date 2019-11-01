import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

import Swal from 'sweetalert2'

import {IoIosPerson} from "react-icons/io"

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const handleSignUp = (name, email, password, phone, gender='male', type='student') => {
  const user = {name, email, password, phone, gender, type}
    axios.post('http://localhost:4000/api/user/add',user)
            .then(
                res=>{
                    console.log(res.data)
                    Swal.fire(
                      'Good job!',
                      'Notice Successfully published!',
                      'success'
                    )
                    window.location.assign('/login');
                },
                err=>console.log(err)
            )

}

export default function SignUp() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div class="card" style={{width:'28rem',height:'560px',paddingTop:'-40px'}}>
      <div class="card-body">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <IoIosPerson size="50px"/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={(e)=>{setName(e.target.value)}}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e)=>{setEmail(e.target.value)}}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e)=>{setGender(e.target.value)}}
                autoComplete="fname"
                name="gender"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Gender"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e)=>{setPassword(e.target.value)}}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid>
            <TextField
              onChange={(e)=>{e.target.value.length<11 && setPhone(e.target.value)}}
              variant="outlined"
              id="phoneNumber"
              label="Phone number"
              type="number"
              required
              fullWidth
        />
            </Grid>
          </Grid>
          <Button
            onClick={()=>handleSignUp(name, email, password, phone, gender, 'student')}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
      <Box mt={5}>
      </Box>
      </div>
      </div>
    </Container>
  );
}