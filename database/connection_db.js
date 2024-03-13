import {Sequelize} from "sequelize";
import { DB_USER, DB_PASSWORD, DB_DEV_NAME, DB_TEST_NAME, NODE_ENV } from '../config.js';

const DB_NAME = NODE_ENV === "test" ? DB_TEST_NAME : DB_DEV_NAME //Condicional que decide si es un entorno u otro dependiendo de lo que encuentre, la interrogación es un if y los dos puntos es un else 

const connection_db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});

export default connection_db;