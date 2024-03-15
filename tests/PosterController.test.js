import request from 'supertest';
import {server, app} from '../app.js'; 
import connection_db from '../database/connection_db.js'; 
import Poster from  '../models/PosterModel.js'

const api = request(app);
describe('testing', () => {

      beforeAll( () => {
        connection_db.sync();
    });

      afterAll(async ()=>{
        try {
            await Poster.destroy({where: { director: "Tim Burton"}});
        } catch (error) {
            console.error('Error destroying poster:', error);
        }
        await connection_db.close();
        server.close();
});


    test('should create a new poster', async()=>{
      const  response = await api.post('/api').send(
        {
          "name": 'test',
          "director": "test",
          "year": "1989",
          "imageUrl":"https://image.com"
        });
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id'); 
      expect(response.body.name).toBe('test');
    });

  

    test('should deleted poster', async() =>{
      const response = await  api.delete("/api/:id");
        expect(response.status).toBe(400);
    })
  });
