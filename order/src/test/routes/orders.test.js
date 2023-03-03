const request = require('supertest');
const { describe, it } = require('@jest/globals');
const app = require('../../index.js');

let idResult;
describe('POST on /orders', () => {
  it('Must save a new order', async () => {
    const result = await request(app)
      .post('/orders')
      .send({
        customerId: '64020888cd8abb571043af8a',
        customerName: 'Karina',
        customerCpf: '71986318001',
        deliveryAddress: {
          street: 'Rua 123',
          number: '23',
          complement: 'apt 123',
          neighborhood: 'neighborhood 1',
          zipCode: 35400000,
          city: 'OP',
          state: 'MG',
        },
        orderItems: {
          product: 'Iphone',
          quantity: 1,
          price: 1500,
          finalPrice: 1350,
        },
      })
      .expect(201);
    idResult = result.body.id;
  });
  it.skip('Must NOT save a new order', async () => {
    await request(app)
      .post('/orders')
      .send({ })
      .expect(500);
  });
});
describe('PATCH on /orders/:id/CONFIRMADO', () => {
  it('Must confirm an order of payment', async () => {
    // eslint-disable-next-line no-undef
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({
        customerId: '64020888cd8abb571043af8a',
        name: 'Karina',
        cpf: '71986318001',
        deliveryAddress: {
          city: 'OP',
          state: 'MG',
          number: '23',
          street: 'Rua 123',
          zipCode: 35400000,
          complement: 'apt 123',
          neighborhood: 'neighborhood 1',
        },
      }),
    }));
    await request(app)
      .patch(`/orders/${idResult}/CONFIRMADO`)
      .expect(200);
  });
  it('Must NOT confirm an order', async () => {
    await request(app)
      .patch('/orders/nonExistingId/CONFIRMAD')
      .expect(500);
  });
});
describe('PATCH on /orders/:id/CANCELADO', () => {
  it('Must activate a order', async () => {
    await request(app)
      .patch(`/orders/${idResult}/CANCELADO`)
      .expect(200);
  });
  it('Must NOT activate a order', async () => {
    await request(app)
      .patch('/orders/nonExistingId/CANCELAD')
      .expect(500);
  });
});
