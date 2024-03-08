import express from "express";
import { getAllPosters, deletePoster } from "../controllers/PosterController.js";


const router = express.Router();

router.get("/", getAllPosters);
router.delete("/:id", deletePoster);
export default router;