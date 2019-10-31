import React from 'react';
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
import StudentLanding from './components/StudentLanding';


export default class SignInSide extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        email:'',
        password:'', 
    }
  }

  handleLogin = (e) => {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    if(!email || !password){
        alert("User name or password is empty");
    } else {
        window.sessionStorage.setItem('email', email);

        if(email){
            axios.get('http://localhost:4000/api/user/get/'+ email)
                .then(resJson => {
                    console.log(resJson)
                    if(resJson.data[0].password === password) {
                        // ReactDOM.render(<StudentLanding/>, document.getElementById('root'));
                        this.setState({loginSucuess:true});
                    } else {
                      this.setState({loginSucuess:false});
                        alert("You have entered an invalid password",this.state.password)
                    }
                })
                .catch(err => console.log(err));
        } else if(email.startsWith("S") || email.startsWith("s")){
            console.log("Student");
            this.setState({loginSucuess:true});
        } else if(email.startsWith("I") || email.startsWith("i")){
            axios.get('http://localhost:4000/api/instructor/getByReg/'+email)
                .then(resJson => {
                    if(resJson.data[0].password == password) {
                        this.setState({loginSucuess:true});
                    } else {
                      this.setState({loginSucuess:true});
                        alert("You have entered an invalid password",this.state.password)
                    }
                })
                .catch(err => console.log(err))
        } else {
          this.setState({loginSucuess:false});
            alert("User name is invalid")
        }
    }
  }


  useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
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

  render(){
    const classes = this.useStyles;

  return (
    <Grid container component="main" className={classes.root}>
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
          {/* <form className={classes.form} noValidate> */}
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
              onChange={(e)=>{this.setState({email:e.target.value})}}
              value={this.state.email}
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
              onChange={(e)=>{this.setState({password:e.target.value})}}
              value={this.state.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={this.handleLogin}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
            <Box mt={5}>
            </Box>
        </div>
      </Grid>
    </Grid>
  );
}
}
