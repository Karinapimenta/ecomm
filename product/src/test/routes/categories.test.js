/* eslint-disable no-undef */
import { describe, it } from '@jest/globals';
import request from 'supertest';
import mongoose from 'mongoose';
import app from '../../app.js';

afterAll((done) => {
  mongoose.connection.close();
  done();
});

describe('GET from /api/categories', () => {
  it('Must return a list of categories', async () => {
    await request(app)
      .get('/api/categories')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let idResult;
describe('POST on /api/admin/categories', () => {
  it('Must save a new categories', async () => {
    const result = await request(app)
      .post('/api/admin/categories')
      .send({
        name: 'AUTOCUIDADO',
        status: true,
      })
      .expect(201);
    // eslint-disable-next-line no-underscore-dangle
    idResult = result.body._id;
  });
  it('Must NOT save a new product', async () => {
    await request(app)
      .post('/api/admin/categories')
      .send({ })
      .expect(401);
  });
});
describe('GET on /api/categories/:id', () => {
  it('Must return a category by its Id', async () => {
    await request(app)
      .get(`/api/categories/${idResult}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
  it('Must NOT return any categories', async () => {
    await request(app)
      .get('/api/categories/NonExistingID')
      .expect(404);
  });
});
describe('PUT on /api/admin/categories/:id', () => {
  it('Must update a category', async () => {
    await request(app)
      .put(`/api/admin/categories/${idResult}`)
      .send({
        name: 'AUTOCUIDADO',
        status: true,
      })
      .expect(200);
  });
  it('Must NOT update a category', async () => {
    await request(app)
      .put(`/api/admin/categories/${idResult}`)
      .send({ })
      .expect(404);
  });
});
describe('DELETE on /api/admin/categories/:id', () => {
  it('Must delete a category', async () => {
    await request(app)
      .delete(`/api/admin/categories/${idResult}`)
      .expect(200);
  });
  it('Must NOT delete a category', async () => {
    await request(app)
      .delete('/api/admin/categories/nonExistingId')
      .expect(404);
  });
});
describe('PATCH on /api/admin/categories/:id', () => {
  it('Must activate a category', async () => {
    await request(app)
      .patch(`/api/admin/categories/${idResult}`)
      .expect(200);
  });
  it('Must NOT activate a category', async () => {
    await request(app)
      .patch('/api/admin/categories/nonExistingId')
      .expect(404);
  });
});
