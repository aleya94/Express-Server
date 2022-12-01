const express = require('express');
const app = express();
const helmet = require('helmet');
const   mongoose = require('mongoose');
require("dotenv").config();
const morgan = require('morgan');
const cors = require('cors');
const {readdirSync} = require('fs')


//middlewares
//app to set route and application set 

app.use(helmet())
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));
app.use(cors());

//DB connection

mongoose
.connect("mongodb://127.0.0.1:27017/ostadb2")
.then(() => console.log("DB connected"))
.catch(err => console.log("DB Error => ", err));

console.log (process.env.DATABASE)

//routes middleware
// readdirSync("./routes").map(r => app.use("/api/v1", requier(`./routes/${r}`)))
app.get('/', (req, res) => {
    res.send('Aleya Aly!')
  })
//server
const port = process.env.PORT || 8000;

app.listen(port, () =>{
    console.log(`App is running on port ${port}`);
});

