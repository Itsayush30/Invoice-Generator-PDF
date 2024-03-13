const express = require("express");

const { createUser, signin } = require("../../controllers/user-controller");
const { createInvoice } = require("../../controllers/invoice-controller");

const router = express.Router();

// /api/v1/user POST
router.post("/user", createUser);

// /api/v1/invoice POST
router.post("/invoice", createInvoice);

// /api/v1//signin POST
router.post("/signin", signin);

module.exports = router;
