const mongoose = require("mongoose")
let enquirySchema = new mongoose.Schema({
name :{
    type:String,
    require:true
},
email:{
    type:String,
    require:true
},
number :{
    type:String,
    require:true
},
model:{
    type:String,
    require:true
},
category:{
    type:String
},
message:{
    type:String
},
date: {
    type: String
},
time:{
    type:String
},
deletedAt: {
    type: Date
},
isDeleted: {
    type: Boolean,
    default: false
},
}, { timestamps: true })
module.exports = mongoose.model('enquiry', enquirySchema)