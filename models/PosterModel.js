import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db.js';
import {body} from "express-validator"

export const validatePoster = [
    body('name').notEmpty().withMessage('El nombre es requerido'),
    body('director').notEmpty().withMessage('Director no debe estar vacío'),
    body('year').isInt().withMessage('Year debe tener números enteros'),
    body('imageUrl').notEmpty().withMessage('La imagen es obligatoria')
]


export const Poster = connection_db.define('Poster', {
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
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
  ,
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
        tableName: 'posters', // Nombre de la tabla en la base de datos
        timestamps: false, // Disable timestamps
      }
);

  export default Poster;
