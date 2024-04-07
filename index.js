const express = require('express');
const dotenv =  require('dotenv').config();

const app = express();

const port = process.env.PORT 

app.get('/' , (req, res)=>{

    res.send("Hi , you are on the Home Route ")
})

app.get('/dream11' ,(req , res)=>{

    res.send("You can start playing and show your skills on Dream 11")
})

app.listen( port , ()=>{

    console.log( `Server is running on the port no. ${ port}`);
})