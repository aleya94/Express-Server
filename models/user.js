const mongoose = require("mongoose"); //mongoose k require korlam
const userSchema = mongoose.Schema( {

}, 
);
    //mongoose er schema w/ 2 parameter- ({blank}, {timestamps: , versionKey: })

const User = mongoose.model("User", userSchema); 
//userSchema base kore User name e akta collection create korlam

module.exports = User;


//thred the model thin the controller

