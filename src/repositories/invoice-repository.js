const CrudRepository = require("./crud-repository");
const Invoice = require("../models/invoice");

class InvoiceRepository extends CrudRepository {
  constructor() {
    super(Invoice);
  }
}

module.exports = InvoiceRepository;
