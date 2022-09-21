import React from 'react';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import useStyles from './styles';

const Form = () => {
    const classes= useStyles();
    const handleSubmit =() => {

    }
    return(
        <Paper class={classes.paper}>
            <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6"> Creating a Memory</Typography>
                <TextField name="creator" variant='outline' 
                label="Creator" 
                fullWidth
                //stored in the state called postData
                //each object key will be a specific text field.
                value={postData.creator}
                onChange
                 />
            </form>

        </Paper>
    )
}


export default Form;