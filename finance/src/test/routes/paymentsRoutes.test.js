const request = require('supertest');
const { describe, it } = require('@jest/globals');
const app = require('../../index.js');

let idResult;
describe('POST on /payments', () => {
  it('Must save a new payment', async () => {
    const result = await request(app)
      .post('/payments')
      .send({
        value: 150,
        name: 'Karina Pimenta',
        number: '1234567890126363',
        expirationDate: '2028-08',
        cvv: 158,
        status: 'CONFIRMADO',
      })
      .expect(201);
    // eslint-disable-next-line no-underscore-dangle
    idResult = result.body.id;
  });
  it('Must NOT save a new payment', async () => {
    await request(app)
      .post('/payments')
      .send({ })
      .expect(400);
  });
});
describe('GET on /payments/:id', () => {
  it('Must return a payment by its Id', async () => {
    await request(app)
      .get(`/payments/${idResult}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
  it('Must NOT return any payment', async () => {
    await request(app)
      .get('/api/payments/NonExistingID')
      .expect(404);
  });
});
describe('PATCH on /payments/:id/CONFIRMADO', () => {
  it('Must activate a payment', async () => {
    await request(app)
      .patch(`/payments/${idResult}/CONFIRMADO`)
      .expect(200);
  });
  it('Must NOT activate a payment', async () => {
    await request(app)
      .patch('/payments/nonExistingId/CONFIRMAD')
      .expect(400);
  });
});
describe('PATCH on /payments/:id/CANCELADO', () => {
  it('Must activate a payment', async () => {
    await request(app)
      .patch(`/payments/${idResult}/CANCELADO`)
      .expect(200);
  });
  it('Must NOT activate a payment', async () => {
    await request(app)
      .patch('/payments/nonExistingId/CANCELAD')
      .expect(400);
  });
});
