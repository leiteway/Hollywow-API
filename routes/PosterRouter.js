import express from "express";
import { getAllPosters, deletePoster, createPoster, updatePoster, getPosterById } from "../controllers/PosterController.js";


const router = express.Router();

router.get("/", getAllPosters);
router.delete("/:id", deletePoster);
router.post("/", createPoster);
router.put("/:id", updatePoster);
router.get("/:id", getPosterById);
export default router;