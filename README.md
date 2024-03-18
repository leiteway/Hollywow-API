

# 🎞🎟 # Hollywow-API 
This project consists in the Back-end of an API called Hollywow, which consists of performing the __CRUD__ method using POST (Create), GET (Read), PUT (Update) and DELETE (Delete) requests, with several technologies.


# Index

- [Description](#description)
- [Project Configuration](#project-configuration)
- [Inicialize the Postman](#inicialize-the-postman)
- [Test](#test)
- [Project Structure ](#project-structure)

# 🧾 Description 
We have developed the application to manage films data, to allow the users to record the information of the poster´s movies.

## Project Configuration

1. **Clone the Repository:**

`bash`
* Copy code in your terminal: `git clone https://github.com/leiteway/Hollywow-API.git`
* Copy code in your terminal: `cd Hollywow-API`
To enter the repository folder.

2. **Create the file ´.env´**
   
* Create the file ´.env´ located in the folder "Hollywow-API"
* Copy the information placed on ´.env_example´ and fill it with your personal data

3. **Install Dependencies:** 

`bash`
* Copy code: `npm install`
* Copy code to make the server run: `npm run dev`
This will start the server http://localhost:3008 using the database on MySQL Workbench.

#4. **Inicialize the Postman**
[Doc. Postman.pdf](https://github.com/leiteway/Hollywow-API/files/14641270/Doc.Postman.pdf)
<h3>routes-HollywowApi</h3>
Methods in Postman to view, add, edit, and delete movie posters in our database.
<h4>GET routGet</h4> <br>
http://localhost:5000/api <br>
Route to do the method GET from the CRUD of our project, including our URL and an example of the response. <br>
<img width="600" alt="Captura de pantalla 2024-03-18 a las 20 22 39" src="https://github.com/leiteway/Hollywow-API/assets/152177946/610a4cc4-c773-4c18-9ea5-2ba53af12a4d">
<h4>DELETE routDelete</h4> <br>
http://localhost:5000/api/ <br>
Route to do the method DELETE from the CRUD of our project, including our URL and an example of the response. <br>
<img width="600" alt="Captura de pantalla 2024-03-18 a las 20 25 10" src="https://github.com/leiteway/Hollywow-API/assets/152177946/22c177f7-1732-41e2-b295-bb70d643ae92">
<h4>PUT routPut</h4> <br>
http://localhost:5000/api/4 <br>
Route to do the method PUT from the CRUD of our project, including our URL and an example of the response. <br>
<img width="600" alt="Captura de pantalla 2024-03-18 a las 20 31 21" src="https://github.com/leiteway/Hollywow-API/assets/152177946/89ab25bd-f99c-4a7a-ae27-09605f3c92a3">
<h4>POST routPost</h4> <br>
http://localhost:5000/api <br>
Route to do the method POST from the CRUD of our project, including our URL and an example of the response. <br>
<img width="600" alt="Captura de pantalla 2024-03-18 a las 20 31 56" src="https://github.com/leiteway/Hollywow-API/assets/152177946/2780a1f6-049a-45ca-a03a-0e5fbeafd1dc">
<h4>GET routGetById</h4> <br>
http://localhost:5000/api/ <br>
Route to do the method GET BY ID from the CRUD of our project, including our URL and an example of the response. <br>
<img width="600" alt="Captura de pantalla 2024-03-18 a las 20 29 43" src="https://github.com/leiteway/Hollywow-API/assets/152177946/df025051-7fcf-48ff-8582-6aaff48876c8">


#5. **Test**
* Copy code: `npm run test`
This will run the tests.



## Project Structure 
* __controllers:__ to handle HTTP requests.
* __database:__ configuration of connections with the database.
* __helpers:__ contains the import and export validations from express-validator.
* __models__: the model of database.
* __node_modules:__ contains all the dependencies of your project. When you install packages using npm, they are stored here.
* __routes:__ route definitions for the methods of the API
* __test:__ unit and integration tests in one file.
* __validators:__ contains the validations of the methods of the CRUD.
* __.env:__ is a configuration file commonly used to store environment variables.
* __.gitignore:__  Specifies files and folders ignored by Git to prevent irrelevant or automatically generated files from being tracked.
* __app.js:__ entry point of the application.
*__config.js:__ application configuration, such as database and server configuration.
* __package.json and package-lock.json:__ These files contain metadata about your project and its dependencies. They also include scripts for running various tasks like starting the development server or building the production bundle.
* __README.md:__ This file typically contains instructions on how to set up and run your project, as well as any other relevant information for contributors or users.

## Contributions
Contributions are welcome! If you find any problems or have suggestions for improvement, please create an issue or make a pull request.

# Technologies 
![Our Skills](https://skillicons.dev/icons?i=js,git,github,vite,discord,react,)
*MySQLWorkbench
*Express Validator
*Jest
*Supertest
*Nodemon
*Sequelize
*Postman

# 🧙🏻‍♀️ Authors 

 - J.Leite  https://github.com/leiteway
 - Fatima Capilla  https://github.com/FatimaCapilla
 - Desirée Carrizosa  https://github.com/DesireeCSilva
 - Nhoeli Salazar https://github.com/Nho89
