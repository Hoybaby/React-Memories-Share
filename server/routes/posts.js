import express from 'express';
import {getPosts, createPost, updatePost, deletePost, likePost} from '../controllers/posts.js'

import auth from '../middleware/auth.js';
const router = express.Router();

// the first part is the location/url endpoint which will call a function
// this wont be called with localhost:5000/, because i changed how it is called in index.js
router.get('/', getPosts);

//user to be authenticated to make a post
router.post('/', auth, createPost);

router.patch('/:id',auth, updatePost);

router.delete('/:id', auth, deletePost);

//liking something is updating it
router.patch('/:id/likePost', auth, likePost);

export default router;