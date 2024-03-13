const express = require("express");

const { createUser, signin } = require("../../controllers/user-controller");
const { createInvoice,getInvoice } = require("../../controllers/invoice-controller");
const {
  validateAuthRequest,
  checkAuth,
} = require("../../middlewares/auth-request-middleware");

const router = express.Router();

// /api/v1/user POST
router.post("/user", createUser);

// /api/v1/invoice POST
router.post("/invoice", checkAuth, createInvoice);

// /api/v1//signin POST
router.post("/signin", validateAuthRequest, signin);

// /api/v1/generatepdf GET
router.get("/generatepdf",checkAuth,getInvoice );

module.exports = router;
