const { StatusCodes } = require("http-status-codes");
const { InvoiceRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

class InvoiceService {
  constructor() {
    this.invoiceRepository = new InvoiceRepository();
  }

  async create(data) {
    try {
      console.log("here1", data);
      const invoice = await this.invoiceRepository.create(data);
      return invoice;
    } catch (error) {
      throw new AppError(
        "cannot create a new invoice",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getInvoice(data) {
    try {
      const invoice = await this.invoiceRepository.getInvoiceById(data.userId);
      return invoice;
    } catch (error) {
      throw new AppError(
        "cannot create a new invoice",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
} // Added closing brace for the UserService class
module.exports = InvoiceService;
