const express = require("express");
const router = express.Router();
const {enquiryForm , getEnquiries} =require("../controller/enquiryController")

router.get("/test-me", function (req, res) {
    res.send("this is successfully created");
  });

  router.post("/enquiryForm",enquiryForm)
  router.get("/getEnquiries",getEnquiries)
module.exports = router;