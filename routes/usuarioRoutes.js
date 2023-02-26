import express from "express"
import { formularioLogin, autenticar, cerrarSesion, formularioRegistro, registrar, confirmar, formularioRestablecerPass, resetPass, comprobarToken, nuevoPass } from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/login", formularioLogin)
router.post("/login", autenticar)

router.post("/cerrarSesion", cerrarSesion)

router.get("/registro", formularioRegistro)
router.post("/registro", registrar)

router.get("/confirmar/:token", confirmar)

router.get("/restablecerPass", formularioRestablecerPass)
router.post("/restablecerPass", resetPass)

router.get("/restablecerPass/:token", comprobarToken)
router.post("/restablecerPass/:token", nuevoPass)

export default router 