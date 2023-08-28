const express = require("express");
const router = express.Router();
const {enquiryForm , getEnquiries} =require("../controller/enquiryController")
const {register , login} =require("../controller/userController")

router.get("/test-me", function (req, res) {
    res.send("this is successfully created");
  });
//=============================================================================
  router.post("/enquiryForm",enquiryForm)
  router.get("/getEnquiries",getEnquiries)
  //===========================================================================
  router.post("/register",register)
  router.post("/login",login)
module.exports = router;