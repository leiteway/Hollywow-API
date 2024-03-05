import express from "express";
import { getAllPosters } from "../controllers/PosterController.js";


const router = express.Router();

router.get("/", getAllPosters);

export default router;