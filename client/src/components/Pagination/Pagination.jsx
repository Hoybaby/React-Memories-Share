import React from 'react';
import {Pagination, PaginationItem} from '@material-ui/lab';
import {Link} from 'react-router-dom';

import useStyles from './styles';

const Paginate =() => {
    const classes = useStyles();

    return (
        <Pagination 
            classes={{ul: classes.ul}}
            //static amount but we have to dynamically fetch posts depending on what we have
            count={5}
            page={1}
            variant="outlined"
            color="primary"
            renderItem={(item)=> (
                <PaginationItem
                //spreading the items
                    {...item}
                    component={Link}
                    to={`/posts?page=${1}`}
                />
            )}  
        
        />

       
    )
}

export default Paginate;