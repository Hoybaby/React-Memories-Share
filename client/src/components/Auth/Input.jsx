import React from 'react';
import {TextField, Grid,InputAdornment, IconButon} from '@material-ui/core';

const Input = ({name,half}) => {
  return (
    <Grid item xs={12} sm={half ? 6: 12}>
        <TextField
            name={name}
            onChange={handleChange}
            variant='outlined'
            required
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            //this is the icon
            InputProps={name == 'password' && {
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                            {type === "password" ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    </Grid>
  )
}

export default Input