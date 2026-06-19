const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Listening to http://localhost:${PORT}`);
});