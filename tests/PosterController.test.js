import request from 'supertest';
import app from '../app.js'; 

const api = request(app);
describe('testing', () => {

    /* test('should create a new poster', async()=>{
      const  response = await api.post('/api');
      expect(response.status).toBe(201);

    }); */

    test('should get posters', async() => {
      const response = await api.get('/api');
      expect(response.status).toBe(200);
    });
  });
