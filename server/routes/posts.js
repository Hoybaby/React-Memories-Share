import express from 'express';
import {getPosts, createPost, updatePost, deletePost, likePost} from '../controllers/posts.js'

const router = express.Router();

// the first part is the location/url endpoint which will call a function
// this wont be called with localhost:5000/, because i changed how it is called in index.js
router.get('/', getPosts);

router.post('/', createPost);

router.patch('/:id', updatePost);

router.delete('/:id', deletePost);

//liking something is updating it
router.patch('/:id/likePost', likePost);

export default router;