const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const InvoiceService = require("../services/invoice-service");
const invoiceService = new InvoiceService();

const createInvoice = async (req, res) => {
  try {
    const response = await invoiceService.create({
      product: req.body.product,
      qty: req.body.qty,
      rate: req.body.rate,
      userId: req.user,
    });
    SuccessResponse.data = response;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
};

const getInvoice = async (req, res) => {
  try {
    const response = await invoiceService.getInvoice({
      userId: req.user,
    });
    SuccessResponse.data = response;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
};

module.exports = { createInvoice, getInvoice };
