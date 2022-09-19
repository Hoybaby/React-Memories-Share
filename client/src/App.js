import React from 'react';
// import './App.css';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import memories from './images/memories.png'
import Form from './components/Form/Form';
const App= () => {
  return (
    <Container maxidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Memories</Typography>
        <img src={memories} alt="memories" heigth="60"/>
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
