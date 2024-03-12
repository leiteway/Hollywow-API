import {body} from "express-validator"
import {validateResult} from "../helpers/validatorHelper.js"

export const validatePoster = [
    body('name').notEmpty().withMessage('El nombre es requerido'),
    body('director').notEmpty().withMessage('Director no debe estar vacío'),
    body('year').isInt().withMessage('Year debe tener números enteros'),
    body('imageUrl').notEmpty().withMessage('La imagen es obligatoria')
    
]; 

