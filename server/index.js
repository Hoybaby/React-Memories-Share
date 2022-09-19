import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
// before i had to import like const express = require('express');
// in new version of node, i dont have to import it like this anymore

const app = express();

// applying a limit to make a max size for images
app.use(bodyParser.json({limit: "30mb", extended: true}));
// setting up boddy parses
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

console.log(process.env.TEST);
