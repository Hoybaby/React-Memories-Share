import React, {useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';

const Auth = () => {
    const classes = useStyles();

    const [showPassword,setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    // const isSignup = true;

    // acts like a switch
    const handleShowPassword = () => {
      // whenever your changing the sate with old state, need to use prev
      setShowPassword((prevShowPassword)=> !prevShowPassword);
    }

    const handleSubmit = () => {

    }

    const handleChange =() => {

    }

    const switchMode =() => {
      setIsSignup((prevIsSignup) => !prevIsSignup);
      handleShowPassword(false);
    }
    
  return (
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

  )
}

export default Auth;