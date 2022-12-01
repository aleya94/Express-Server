const express = require('express');
const router = express.Router();


//controllers

const {greetings,overview} = require("..controllers/auth")

//Routers

router.get("/", greetings)
router.get("/overview", overview)

router.get("/", async(req,res) => {
    res.send(`<h1> Hello </h1>`);
})

module.exports = router;

