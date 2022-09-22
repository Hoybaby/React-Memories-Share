import React, {useEffect, useState} from 'react';
// import './App.css';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import memories from './images/memories.png'

import {getPosts} from './actions/posts';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './styles';
import './index.css';


const App= () => {

  const [currentId, setCurrentId] = useState(null);
  const classes= useStyles();
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img src={memories} className={classes.image} alt="memories" height="60"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            {/* this means that XS small screens will take up whole page */}
            <Grid item xs={12} sm={7}>
              {/* this will make the setter avaiable in the Posts to use. Like Inheritance */}
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>

    </Container>
  );
}

export default App;
