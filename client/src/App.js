import React from 'react';

import {Container} from '@material-ui/core';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';


const App= () => {

    const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <BrowserRouter>
      <Container maxidth="xl">
        <Navbar/>
        <Switch>
          {/* doing a callback which will call the redirect
          it is goign to redirect to /posts. we only want to see pots on this specific path */}
          <Route path="/" exact component={() => <Redirect to="/posts"/>}/>
          <Route path="/posts" exact component={Home}/>
          <Route path="/posts/search" exact component={Home}/>
          {/* will be dynamic */}
          <Route path="/posts/:id" component={PostDetails}/>
          <Route path="/auth" exact component={() => (!user ? <Auth/> : <Redirect to="/posts" />)}/>
        </Switch>
      </Container>
    </BrowserRouter>
    
  );
}

export default App;
