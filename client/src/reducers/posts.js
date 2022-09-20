// reducer is a function, it accpets the state AND ACTION

import { CardActionArea } from "@material-ui/core"

//based on the action type
// the state is an array because we have will have mutiple posts.
const reducer = (posts= [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return posts;
        case 'CREATE':
            return posts;

        default:
            break;
    }
}