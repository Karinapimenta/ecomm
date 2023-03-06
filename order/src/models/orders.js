const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
<<<<<<< HEAD
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
=======
>>>>>>> ee80271fc9babd2375e4105821fde148b2068e5d
  }
  Orders.init({
    customerId: DataTypes.STRING,
    customerName: DataTypes.STRING,
    customerCpf: DataTypes.STRING,
    deliveryAddress: DataTypes.JSON,
    orderItems: DataTypes.JSON,
    status: DataTypes.STRING,
    links: DataTypes.JSON,
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};
