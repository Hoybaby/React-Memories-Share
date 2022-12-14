import React, {useState, useEffect} from 'react';
import {Container, Grow, Grid, Paper} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import {GoogleOAuthProvider} from '@react-oauth/google';

import Paginate from '../Pagination/Pagination';
// import * as dotenv from 'dotenv';
// dotenv.config();

// import useStyles from './styles';

const Home = () => {

    const [currentId, setCurrentId] = useState(0);
    // const classes= useStyles();
    const dispatch = useDispatch();
  
    useEffect(()=> {
      dispatch(getPosts());
    }, [currentId, dispatch]);
  
  return (
    <GoogleOAuthProvider clientId={`${process.env.GOOGLE_CLIENT_ID}`}>
      <Grow in>
        <Container>
          <Grid  container justifyContent="space-between" alignItems="stretch" spacing={3}>
            {/* this means that XS small screens will take up whole page */}
            <Grid item xs={12} sm={7}>
              {/* this will make the setter avaiable in the Posts to use. Like Inheritance */}
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
              <Paper elevation={6}>
                <Paginate/>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </GoogleOAuthProvider>
    
  )
}

export default Home;