const enquiryModel = require("../model/enquiryModel");
const moment = require("moment");
require("moment-timezone");
let enquiryForm = async (req, res) => {
  try {
    let data = req.body;
    moment.tz.setDefault("Asia/Kolkata");

    // Get the current date and time
    let date = moment().format("YYYY-MM-DD");
    let time = moment().format("HH:mm:ss");

    // Add date and time to the data object
    data.date = date;
    data.time = time;
    let saveData = await enquiryModel.create(data);

    // Return the successful response
    res.status(201).send({ status: true, data: saveData });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

const getEnquiries = async (req, res) => {
  try {
    let filter = req.query;
    if (Object.keys(filter).length == 0) {
      let data = await enquiryModel
        .find({ isDeleted: false })
        .sort({createdAt : -1});
      if (!data) {
        return res.status(404).send({ status: true, message: "no data found" });
      }
      return res.status(200).send({ status: true, data: data });
    } else {
      let data = await enquiryModel.find( filter );
      if (!data) {
        return res.status(404).send({ status: true, message: "no data found" });
      }
      return res.status(200).send({ status: true, data: data });
    }
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { enquiryForm, getEnquiries };
