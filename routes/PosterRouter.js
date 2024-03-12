import express from "express";
import { getAllPosters, deletePoster, createPoster, updatePoster, getPosterById } from "../controllers/PosterController.js";
import {validatePoster} from "../validators/posterValidator.js"
import {validateResult} from "../helpers/validatorHelper.js"
const router = express.Router();
  
router.get("/", getAllPosters);
router.delete("/:id", deletePoster);
router.post("/", validatePoster,validateResult, createPoster);
router.put("/:id", updatePoster);
router.get("/:id", getPosterById);
export default router;