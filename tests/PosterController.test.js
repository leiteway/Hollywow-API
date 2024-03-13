// import require  from 'express';
import request from 'supertest';
import app, { server } from '../app.js'; 
// import { afterEach } from 'node:test';
import { Poster } from '../models/PosterModel.js';
import connection_db from '../database/connection_db.js';

const api = request(app);
describe('Testing CRUD posters', () => {
    afterAll(async () => {
    await Poster.destroy({ where : { name: 'test'}});  // Esto borrará todas las tablas
        // await Poster.truncate(); // esto si funciona
        await connection_db.close();
        server.close();
    console.log('Every table is deleted');
  });
    
    test('Post response should respond with a 201 status', async () => {
        const response = await api.post('/api').send({
            "name": "Test Poster",
            "director": "Test Director",
            "year": 2023,
            "imageUrl": "http://example.com/image.jpg"
        });
        expect(typeof response.body).toBe('object');
        expect(response.status).toBe(201);
    });

    test('Response body must be an array and then show 200 status', async () => {
        const response = await api.get('/api');
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.status).toBe(200);
    });
    
    });

    // afterAll(() => {
    //     return clearfilms_testsDatabase();
    //   });
      
    //   test('films_tests database has Test', () => {
    //     expect(isfilms_tests('Test')).toBeTruthy();
    //   });
    
    // });

    // it("Debería crear un post", async()=>{
    //     const res = await request(app)
    //     .post('/posts')
    //     .send({
    //         title: "Título del Post",   
    //         content: "Contenido del Post"                                    
    //     });
    //     expect(res.status).toBe(201);
    //     expect(res.body).toHaveProperty('id'); 
    //     expect(res.body.title).toEqual("Título del Post");    
    // });







/* describe('PosterController', () => {
 it('should create a new poster', async () => {
    const newPoster = {
      name: 'Test Poster',
      director: 'Test Director',
      year: 2023,
      imageUrl: 'http://example.com/image.jpg',
    };

    const response = await request(app)
      .post('/posters') // Asegúrate de que esta ruta coincida con la ruta de tu API
      .send(newPoster);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('poster');
    expect(response.body.poster).toHaveProperty('name', newPoster.name);
    // Agrega más expectativas según sea necesario
 });

 // Agrega más pruebas para otros casos, como errores de validación, etc.
}); */


