import require  from 'express';
import request from 'supertest';
import app from '../app.js'; 

const api = request(app);
describe('POST /posts', () => {
  



    /* it("Debería crear un post", async()=>{
        const res = await request(app)
            .post('/posts')
            .send({
                title: "Título del Post",   
                content: "Contenido del Post"                                    
            });
         expect(res.status).toBe(201);
         expect(res.body).toHaveProperty('id'); 
         expect(res.body.title).toEqual("Título del Post");    
    })  */ 
});






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