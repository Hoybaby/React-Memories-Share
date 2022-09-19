import express from 'express';

const router = express.Router();

// the first part is the location/url endpoint which will call a function
// this wont be called with localhost:5000/, because i changed how it is called in index.js
router.get('/', (req,res) => {
    res.send('this works');
})

export default router;