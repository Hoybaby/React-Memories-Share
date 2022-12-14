import express from 'express';
import {signin, signup} from '../controllers/user.js';

const router = express.Router();

//sending the details from the form to the backend
router.post('/signin', signin);
router.post('/signup', signup);

export default router;