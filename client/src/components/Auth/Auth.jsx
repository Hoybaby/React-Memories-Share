import React, {useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';
import {GoogleOAuthProvider} from '@react-oauth/google';
import {GoogleLogin} from '@react-oauth/google';
import * as dotenv from 'dotenv';
import { useDispatch} from 'react-redux';
import jwt_decode from 'jwt-decode';
import {useHistory} from 'react-router-dom';
import {signin, sigup} from '../../actions/auth';
dotenv.config();

const initialState = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};

const Auth = () => {
    const classes = useStyles();
    const [showPassword,setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();

    // const isSignup = true;

    // acts like a switch
    const handleShowPassword = () => {
      // whenever your changing the sate with old state, need to use prev
      setShowPassword((prevShowPassword)=> !prevShowPassword);
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      if(isSignup) {
        // passing the history so we can naviagate if something happens
        dispatch(signup(formData, history));
      } else {
        dispatch(signin(formData, history));
      }
      console.log(formData);
    }

    const handleChange =(e) => {
      //this will make sure to spread to properties but only change the one we are on.
      setFormData({...formData, [e.target.name]: e.target.value})
    }

    const switchMode =() => {
      setIsSignup((prevIsSignup) => !prevIsSignup);
      handleShowPassword(false);
    }
    
    // console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID)
    // console.log("test");
    // console.log(process.env.REACT_APP_TEST);

    const googleSuccess = async (res) => {
      const result = jwt_decode(res?.credential);

      const token = res.credential;

      try {
        dispatch({type: 'AUTH', data: {result, token}});
        //want to redirect to home so will use history
        history.push('/');
      } catch(error) {
        console.log(error);
      }

      
    }
    
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        {/* if isSignup is true which means user is in and will show Sign in */}
        <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {
                isSignup && (
                  <>
                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
      
                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                  </>
                )
              }
              <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
              <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
              />
              {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
            </Grid>
            {/* making it with conditional for user input */}
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                {isSignup ? ' Sign up' : "Sign in"}
            </Button>
            <GoogleLogin
              onSuccess={googleSuccess}
            />
            {/* {process.env.REACT_APP_TEST} */}

            <Grid container justifyContent='flex-end'>
              <Grid item>
                  <Button onClick={switchMode}> 
                    {isSignup? 'Already have an a ccount? Sign in' : "Don't have have an account? Sign up!"}
                  </Button>
              </Grid>

            </Grid>
        </form>

      </Paper>
    </Container>
    </GoogleOAuthProvider>
    

  )
}

export default Auth;