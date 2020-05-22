// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

const express = require('express');
const body_Parser = require('body-parser');
const cor = require('cors');

// Start up an instance of app

const app = express();

app.use(cor());

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(body_Parser.urlencoded({
    extended: false
}));
app.use(body_Parser.json());

//body parser

const fetch = require('node-fetch');

// Cors for cross origin allowance

const cors = require('cors');
app.use(cors());
//main project initialization
app.use(express.static('website'));

// Initialize the main project folder
app.use(express.static('website'));

//GET Route for the projectData

app.get('/api/projectdata', (req, res) => {
    res.status(300).send(projectData)
})

//POST Route to store date, user and temp input in projectData

app.post('api/projectdata', (req, res) => {
    const {
        date,
        temp,
        content
    } = req.bodyprojectData[date] = {
        temp,
        content,
    }
    res.status(301).send()
})


// Setup Server
app.listen(8000, () => {
    console.log('Server Running on port 8000...............')
});