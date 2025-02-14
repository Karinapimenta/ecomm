/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Invoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      customerData: {
        type: Sequelize.JSON,
      },
      address: {
        type: Sequelize.JSON,
      },
      products: {
        type: Sequelize.JSON,
      },
      paymentId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: { model: 'Payments', key: 'id' },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Invoices');
  },
};
