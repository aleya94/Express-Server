//data structure guli design korbo model e


const mongoose = require("mongoose");
const validator = require("validator");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

const authSchema = mongoose.Schema(
    {
        email: {
            type: "string",
            
        }
    }
)