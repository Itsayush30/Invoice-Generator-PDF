const CrudRepository = require("./crud-repository");
const Invoice = require("../models/invoice");

class InvoiceRepository extends CrudRepository {
  constructor() {
    super(Invoice);
  }
  async getInvoiceById(userId) {
    try {
      console.log(userId);
      const result = await Invoice.find({userId});
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }
}

module.exports = InvoiceRepository;
