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

app.post('/xapiData/statements', (req, res)=>{
    console.log("data coming ==>>", req.body.object.definition.description);
    res.json({message:"your data is saved..."})
})

app.listen(port, async () => {
    try {
      await connectDb();
      console.log(`Server is connected to the port ${port}`);
    } catch (err) {
      console.log("Error in running server", err);
    }
  });