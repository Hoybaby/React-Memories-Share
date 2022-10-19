import React, {useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlinedIcon';
import useStyles from './styles';
import Input from './Input';

const Auth = () => {
    const classes = useStyles();

    const [showPassword,setShowPassword] = useState(false);

    const isSignup = false;

    const handleSubmit = () => {

    }

    const handleChange =() => {

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
              <Input name="password" label="Password" handleChange={handleChange} type="password"/>
            </Grid>
        </form>

      </Paper>
    </Container>

  )
}

export default Auth;