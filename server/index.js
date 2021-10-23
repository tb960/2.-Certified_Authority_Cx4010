require('dotenv').config();
const express = require('express');
const connectDB = require('./services/db');

const app = express();

//use middleware
app.use(express.json({ extended : true }));

connectDB();

app.listen(process.env._PORT, () => {console.log(`Server listening on Port: ${process.env._PORT}`)});