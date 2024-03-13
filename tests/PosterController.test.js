import request from 'supertest';
import app from '../app.js'; 

const api = request(app);
describe('testing', () => {

    test('should create a new poster', async()=>{
      const  response = await api.post('/api').send(
        {
          name: "test",
          director: "test",
          year: 1989,
          image_url:"https://image.com"
        });
      expect(typeof response.body).toBe('object');
   expect(response.status).toBe(201);

    });

    /* test('should get posters', async() => {
      const response = await api.get('/api');
      expect(response.status).toBe(200);
    }); */

    test('should deleted poster', async() =>{
      const response = await  api.delete("/api/:id");
      expect('id');
    })
  });
