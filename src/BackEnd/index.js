const express = require("express");
const { ButtonArray } = require("../FrontEnd/pages/Home");

const app = express();
const router =express.Router();

router.use("/calculaton" ,ButtonArray)

module.exports = router;  