const express = require('express');
const router = express.Router();
const cors = require('cors');
const controller = require('../controllers/isbn');
var corsOptions = {
    origin: false,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
router.options("*", cors());
router.get("/isbn/get/:isbn", cors(), controller.getISBN);

module.exports = router;
