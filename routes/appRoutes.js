import express from "express";
import { inicio, noEncontrado } from "../controllers/appController.js";

const router = express.Router()


router.get("/", inicio)

router.get("/noEncontrado", noEncontrado)


export default router