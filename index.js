const express = require('express');
const test = require('./controller');

const app = express();

//to use the existing middlewares
app.use(express.json());

app.post("/",(req,res,next)=> {
    console.log("I'm middle finger");
    next();
}, test);

const port = process.env.port || 3000;
app.listen(port,()=>{
    console.log(`Listening on ${port}`);
})


