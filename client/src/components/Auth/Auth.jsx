import React from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlinedIcon';
import useStyles from './styles';

const Auth = () => {
    const classes = useStyles();

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
                  <Grid xs={6} md={12}>
                    <TextField name="firstName" label="First Name" handleChange={handleChange} autoFocus xs={6}/>
                  </Grid>
                  <Grid xs={6} md={12}>
                    <TextField name="lastName" label="Last Name" handleChange={handleChange} autoFocus xs={6}/>
                  </Grid>
                    
                  </>
                )
              }
            </Grid>
        </form>

      </Paper>
    </Container>

  )
}

export default Auth;