import 'dotenv/config';
import connection_db from "./database/connection_db.js";
import Poster from "./models/PosterModel.js"



try {
    await connection_db.authenticate();
    console.log('✅ Connection has been established successfully.');
    await Poster.sync();
    console.log(`synchronized successfully`)
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }