import express from "express";
import { getAllPosters, deletePoster, createPoster,  } from "../controllers/PosterController.js";


const router = express.Router();

router.get("/", getAllPosters);
router.delete("/:id", deletePoster);
router.post("/", createPoster);
router.update("/:id", updatePoster);
export default router;