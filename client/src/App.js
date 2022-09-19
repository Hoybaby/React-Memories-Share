import React from 'react';
// import './App.css';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import memories from './images/memories.png'
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './styles';


const App= () => {
  const classes= useStyles();

  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img src={memories} className={classes.image} alt="memories" height="60"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            {/* this means that XS small screens will take up whole page */}
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>

    </Container>
  );
}

export default App;
