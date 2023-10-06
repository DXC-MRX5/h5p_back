let dataArray = [];
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT
const { connectDb } = require("./config")

const app = express();
app.use(express.json());

app.use(cors({
    origin:"*"}))

app.get('/home', (req, res)=>{
    res.json({message:"this is the homepage..."})
})

app.get('/xapiAllData', (req, res)=>{
  res.json(dataArray);
})

let count = 0;

app.post('/xapiData', (req, res)=>{
    // dataArray.push(req.body);
    res.send({message:"your data is saved..."})
    count++
    console.log("total object Received", count);
})

app.listen(port, async () => {
    try {
      await connectDb();
      console.log(`Server is connected to the port ${port}`);
    } catch (err) {
      console.log("Error in running server", err);
    }
  });