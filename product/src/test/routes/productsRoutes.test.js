/* eslint-disable no-undef */
import { describe, it } from '@jest/globals';
import request from 'supertest';
import app from '../../app.js';

let server;
beforeEach(() => {
  const port = 3030;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe('GET from /api/products', () => {
  it('Must return a list of products', async () => {
    await request(app)
      .get('/api/products')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
  it.skip('Must NOT return a list of products', async () => {
    await request(app)
      .get('/api/products')
      .expect(404);
  });
});

let idResult;
describe('POST on /api/admin/products', () => {
  it('Must save a new product', async () => {
    const result = await request(app)
      .post('/api/admin/products')
      .send({
        category: {
          _id: '63f6358ea41dbcd4671015b9',
          name: 'MÓVEIS',
          status: 'true',
        },
        product: 'Notebook Samsung',
        description: 'Samsung Book Core i5-1135G7, 8G, 256GB SSD, Iris Xe, 15.6"FHD, W11 Cinza',
        slug: 'notebook-samsung',
        pricePerUnit: {
          $numberDecimal: '3523',
        },
        quantityInStock: {
          $numberDecimal: '30',
        },

      })
      .expect(201);
    // eslint-disable-next-line no-underscore-dangle
    idResult = result.body._id;
  });
  it('Must NOT save a new product', async () => {
    await request(app)
      .post('/api/admin/products')
      .send({ })
      .expect(401);
  });
});
describe('GET on /api/products/:id', () => {
  it('Must return a product by its Id', async () => {
    await request(app)
      .get(`/api/products/${idResult}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
  it('Must NOT return any product', async () => {
    await request(app)
      .get('/api/products/NonExistingID')
      .expect(404);
  });
});
describe('PUT on /api/admin/products/:id', () => {
  it('Must update a product', async () => {
    await request(app)
      .put(`/api/admin/products/${idResult}`)
      .send({
        category: {
          _id: '63f6358ea41dbcd4671015b9',
          name: 'MÓVEIS',
          status: 'true',
        },
        product: 'Notebook Samsung',
        description: 'Samsung Book Core i5-1135G7, 8G, 256GB SSD, Iris Xe, 15.6"FHD, W11 Cinza',
        slug: 'notebook-samsung',
        pricePerUnit: {
          $numberDecimal: '3523',
        },
        quantityInStock: {
          $numberDecimal: '30',
        },

      })
      .expect(200);
  });
  it('Must NOT update a product', async () => {
    await request(app)
      .put(`/api/admin/products/${idResult}`)
      .send({ })
      .expect(404);
  });
});
describe('DELETE on /api/admin/products/:id', () => {
  it('Must delete a product', async () => {
    await request(app)
      .delete(`/api/admin/products/${idResult}`)
      .expect(200);
  });
  it('Must NOT delete a product', async () => {
    await request(app)
      .delete('/api/admin/products/nonExistingId')
      .expect(404);
  });
});
