import express from "express";
import { getAllPosters, deletePoster, createPoster, updatePoster, getPosterById } from "../controllers/PosterController.js";
import {validateCreatePoster, validateDeletePoster} from "../validators/posterValidator.js"
const router = express.Router();
  
router.get("/", getAllPosters);
router.delete("/:id",validateDeletePoster, deletePoster);
router.post("/", validateCreatePoster,createPoster);
router.put("/:id", updatePoster);
router.get("/:id", getPosterById);
export default router;