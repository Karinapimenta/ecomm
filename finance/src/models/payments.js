const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Payments extends Model {
    static associate(models) {
      Payments.hasOne(models.Invoices, {
        foreignKey: 'paymentId',
      });
    }
  }
  Payments.init(
    {
      value: DataTypes.DECIMAL,
      name: DataTypes.STRING,
      number: DataTypes.STRING,
      expirationDate: DataTypes.STRING,
      cvv: DataTypes.DOUBLE,
      status: DataTypes.STRING,
      invoiceId: DataTypes.INTEGER,
      links: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: 'Payments',
    },
  );
  return Payments;
};
