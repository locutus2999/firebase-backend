const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Customer extends AbstractEntityModel {
  constructor() {
    super('customer', 'customer', {
      name: new types.String(2, 255),
      birthdate: new types.Date(),
      gender: new types.Enumerator([
        "male",
        "female"
      ]),
      importHash: new types.String(null, 255),
    });
  }
};
