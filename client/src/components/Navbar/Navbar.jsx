import React from 'react';
import { AppBar, Typography, Toolbar, Button, Avatar } from '@material-ui/core';
import  {Link} from 'react-router-dom';

import useStyles from './styles';
import memories from '../../images/memories.png';

// import memories from '../..//images/memories.png'

const Navbar = () => {
    const classes = useStyles();

    //mock user for later
    const user = null;
    
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
            <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
            <img src={memories} className={classes.image} alt="memories" height="60"/>
        </div>
        <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
                        {user.result.name.charAt(0)}
                        <Typography className={classes.userName} variant="h6"> {user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary">Log Out</Button>
                    </Avatar>
                </div>
            ): (
                <Button component={Link} to='/auth' variant="contained" color="primary"> Sign In</Button>
            )}
        </Toolbar>
        
      </AppBar>
  )
}

export default Navbar;