import 'dotenv/config';
import connection_db from "./database/connection_db.js";
import PosterModel from "./models/PosterModel.js"


// try {
//     await connection_db.authenticate() 
//     console.log('✅ Connection has been established successfully.');
//   await PosterModel.sync() 
//   console.log('✅ PosterModel has been syncronized with the data base');

//   catch (error) 
//     console.error('❌ Unable to connect to the database:', error);
//   }