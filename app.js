const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("CureFund backend running 🚀");
});

//path not found handler 404
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});


app.listen(process.env.PORT, () => {
    console.log(`Server is running http://localhost:${process.env.PORT}`)
})