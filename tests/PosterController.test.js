import require  from 'express';
import request from 'supertest';
import { app } from '../app.js'; 
import connection_db from '../database/connection_db.js';

const api = request(app); //request nos permite hacer solicitudes a la app
describe('Testing CRUD Posters', () => {

  test("Response body must be an array and then show 200 status", async()=>{
    const response = await api.get('/api');
    expect(Array.isArray(response.body)).toBe(true); //que objeto quiero recibir, modificar
    expect(response.status).toBe(200);
    });

  test ("Should create a poster with every field filled from the model", async () => {
    const response = await api.post ('/api').send(
        {
          "name": "test",
          "director": "test",
          "year": 2023,
          "imageUrl": "http://example.com/image.jpg",
        });
        expect (typeof response.body).toBe("object");//tipo de dato que esperamos obtener
        expect (response.status).toBe(201);
  });
  afterAll(async ()=> {
    await connection_db.sync({force: true});
    console.log("Every table was deleted!✌");
  });
});