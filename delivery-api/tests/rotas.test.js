const request = require('supertest');
const app = require('../app');

describe('Rotas API', () => {
  it('GET /rotas - deve retornar uma lista de rotas', async () => {
    const response = await request(app).get('/rotas');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('POST /rotas - deve criar uma nova rota', async () => {
    const newRota = {
      latitude: -23.563210,
      longitude: -46.654250
    };

    const response = await request(app).post('/rotas').send(newRota);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.latitude).toBe(newRota.latitude);
  });

  it('GET /rotas/melhor-rota/:id - deve retornar a melhor rota de entrega', async () => {
   
    const rotaResponse = await request(app).post('/rotas').send({
      latitude: -23.563210,
      longitude: -46.654250
    });


    const pedidoResponse = await request(app).post('/pedidos').send({
      endereco: 'Rua Teste',
      latitude: -23.563210,
      longitude: -46.654250,
      produto: 'Produto Teste',
      quantidade: 2
    });


    const response = await request(app).get(`/rotas/melhor-rota/${rotaResponse.body.id}`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
