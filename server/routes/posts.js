import express from 'express';
import {getPosts, createPost} from '../controllers/posts.js'

const router = express.Router();

// the first part is the location/url endpoint which will call a function
// this wont be called with localhost:5000/, because i changed how it is called in index.js
router.get('/', getPosts);

router.post('/', createPost)

export default router;