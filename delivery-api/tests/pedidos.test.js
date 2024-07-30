const request = require('supertest');
const app = require('../app');

describe('Pedidos API', () => {
  it('GET /pedidos - deve retornar uma lista de pedidos', async () => {
    const response = await request(app).get('/pedidos');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('POST /pedidos - deve criar um novo pedido', async () => {
    const newPedido = {
      endereco: 'Rua Teste',
      latitude: -23.563210,
      longitude: -46.654250,
      produto: 'Produto Teste',
      quantidade: 2
    };

    const response = await request(app).post('/pedidos').send(newPedido);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.produto).toBe(newPedido.produto);
  });
});
