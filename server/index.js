import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import postRoutes from './routes/post.js';
// before i had to import like const express = require('express');
// in new version of node, i dont have to import it like this anymore

const app = express();

// -----------ROUTES----------

app.use('/posts', postRoutes)

// applying a limit to make a max size for images
app.use(bodyParser.json({limit: "30mb", extended: true}));
// setting up boddy parses
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// console.log(process.env.TEST);

//----------------DB-------------

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err)=> console.log(err.message))

// mongoose.set('useFindAndModify', false);
