require('dotenv').config({path : "./.env"});
const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());



const server = app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});