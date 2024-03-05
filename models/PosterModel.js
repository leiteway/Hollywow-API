import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db.js';

const Poster = connection_db.define('posters', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  director: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
        // Opciones adicionales del modelo
        tableName: 'posters', // Nombre de la tabla en la base de datos
        timestamps: false // Deshabilitar los campos createdAt y updatedAt
      }
);

connection_db.sync({ force: true })
  .then(() => {
    console.log("✅ All models were synchronized successfully.");
  })
  .catch((error) => {
    console.error("❌ Error synchronizing models:", error);
  });

 
  export default Poster;
