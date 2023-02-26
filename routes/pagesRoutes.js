import express from "express";
import protegerRuta from "../middleware/protegerRuta.js";
import { homeMain } from "../controllers/pagesController.js";
import { home } from "../controllers/pagesController.js";
import { ac } from "../controllers/pagesController.js";

const router = express.Router()

router.get("/homeMain", homeMain)
router.get("/home", protegerRuta, home)
router.get("/ac", protegerRuta, ac)


export default router