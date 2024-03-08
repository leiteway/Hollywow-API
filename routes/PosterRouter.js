import express from "express";
import { getAllPosters, deletePoster, createPoster, updatePoster } from "../controllers/PosterController.js";


const router = express.Router();

router.get("/", getAllPosters);
router.delete("/:id", deletePoster);
router.post("/", createPoster);
router.put("/:id", updatePoster);
export default router;