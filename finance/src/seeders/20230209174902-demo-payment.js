/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Payments',
      [
        {
          value: 807.0,
          name: 'Martin Baba',
          number: 4770439826908345,
          expirationDate: '2026-04',
          cvv: 240,
          status: 'CONFIRMADO',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 796.0,
          name: 'Martha Gordon',
          number: 4220611464873223,
          expirationDate: '2024-04',
          cvv: 756,
          status: 'CANCELADO',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 560.0,
          name: 'Nicolai Napolitano',
          number: 4118332728723600,
          expirationDate: '2030-01',
          cvv: 121,
          status: 'CRIADO',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 760.0,
          name: 'Herbert Hansson',
          number: 4461936198926411,
          expirationDate: '2024-11',
          cvv: 134,
          status: 'CRIADO',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },
};
