import React,{useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Button, Avatar } from '@material-ui/core';
import  {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useHistory, useLocation} from 'react-router-dom';

import useStyles from './styles';
import memories from '../../images/memories.png';


// import memories from '../..//images/memories.png'

const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    // console.log("testing if user pops up below");
    // console.log(user);

    useEffect(() => {
        const token = user?.token;

        //going to check JWT for later
        setUser(JSON.parse(localStorage.getItem('profile')));
        //when location changes it will change as well
    }, [location]);


    const logout =() => {
        try {
            dispatch({type: 'LOGOUT'});
            history.push('/');

            //user will be null after logout.
            setUser(null);
        } catch (error) {
            
        }
    }

    //mock user for later
    // useEffect will happen and occur when something changes it will relaunch component
    
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
            <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
            <img src={memories} className={classes.image} alt="memories" height="60"/>
        </div>
        <Toolbar className={classes.toolbar}>
            {user?.result ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>   
                    <Typography className={classes.userName} variant="h6"> {user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Log Out</Button>
                </div>
            ): (
                <Button component={Link} to='/auth' variant="contained" color="primary"> Sign In</Button>
            )}
        </Toolbar>
      </AppBar>
  )
}

export default Navbar;