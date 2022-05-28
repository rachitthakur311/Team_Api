const express = require("express");
const router = express.Router()
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const teams = require('./model/teamSchema')
const users = require('./model/userSchema')
const teamRoutes = require('./routes/teamListRoutes')
const dotenv = require("dotenv")
const app = express()
dotenv.config({ path: './config/config.env' });

mongoose.connect('mongodb://localhost:27017/teamapi').then(() => {
    console.log('mongodb connected.......')
})
const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
};

app.use('/teams', teamRoutes);

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`server is running in ${process.env.NODE_ENV} mode on the port ${PORT}`)
})