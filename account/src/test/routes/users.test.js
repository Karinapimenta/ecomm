/* eslint-disable no-undef */
import { describe, it } from '@jest/globals';
import request from 'supertest';
import mongoose from 'mongoose';
import app from '../../app.js';

afterAll((done) => {
  mongoose.connection.close();
  done();
});

describe('GET from /api/admin/users', () => {
  it('Must return a list of users', async () => {
    await request(app)
      .get('/api/admin/users')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let idResult;
describe('POST on /api/admin/users', () => {
  it('Must save a new user', async () => {
    const result = await request(app)
      .post('/api/users')
      .send({
        name: 'Fernando',
        email: 'frnd@company.com',
        password: 'poiA@34lo',
        cpf: '71986318001',
        phone: '319789456231',
        address: [
          {
            street: 'Rua 123',
            number: '23',
            complement: 'apt 123',
            neighborhood: 'neighborhood 1',
            zipCode: 35400000,
            city: 'OP',
            state: 'MG',
          },
        ],
        shoppingCart: [],
      })
      .expect(201);
    // eslint-disable-next-line no-underscore-dangle
    idResult = result.body._id;
  });
  it('Must NOT save a new user', async () => {
    await request(app)
      .post('/api/admin/users')
      .send({ })
      .expect(404);
  });
});
describe('GET on /api/user/:id', () => {
  it('Must return a user by its Id', async () => {
    await request(app)
      .get(`/api/users/${idResult}`)
      .expect(200);
  });
  it('Must NOT return any user', async () => {
    await request(app)
      .get('/api/users/NonExistingID')
      .expect(404);
  });
});
describe('PUT on /api/admin/user/:id', () => {
  it('Must update a user', async () => {
    await request(app)
      .put(`/api/admin/users/${idResult}`)
      .send({
        name: 'Fernando',
        email: 'frnd@company.com',
        password: 'poiA@34lo',
        cpf: '71986318001',
        phone: '319789456231',
        address: [
          {
            street: 'Rua 123',
            number: '23',
            complement: 'apt 123',
            neighborhood: 'neighborhood 1',
            zipCode: 35400000,
            city: 'OP',
            state: 'MG',
          },
        ],
        shoppingCart: [],
      })
      .expect(200);
  });
  it('Must NOT update a user', async () => {
    await request(app)
      .put('/api/admin/users/fakeId')
      .send({
        name: 'Fernando',
        email: 'frnd@company.com',
        password: 'poiA@34lo',
        cpf: '71986318001',
        phone: '319789456231',
        address: [
          {
            street: 'Rua 123',
            number: '23',
            complement: 'apt 123',
            neighborhood: 'neighborhood 1',
            zipCode: 35400000,
            city: 'OP',
            state: 'MG',
          },
        ],
        shoppingCart: [],
      })
      .expect(400);
  });
});
describe('DELETE on /api/admin/user/:id', () => {
  it('Must delete a user', async () => {
    await request(app)
      .delete(`/api/admin/users/${idResult}`)
      .expect(200);
  });
  it('Must NOT delete a user', async () => {
    await request(app)
      .delete('/api/admin/users/nonExistingId')
      .expect(404);
  });
});
