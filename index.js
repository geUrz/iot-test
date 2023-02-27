import express from "express"
import csurf from "csurf"
import cookieParser from "cookie-parser"
import usuarioRoutes from "./routes/usuarioRoutes.js"
import pagesRoutes from "./routes/pagesRoutes.js"
import appRoutes from "./routes/appRoutes.js"
import db from "./config/db.js"
const app = express()

app.use(express.urlencoded({extended: true}))

app.use(cookieParser())

app.use(csurf({cookie: true}))

app.set("view engine", "pug")
app.set("views", "./views")
app.use(express.static("public"))

try{
    await db.authenticate()
    db.sync()
    console.log("Se conecto a base de datos")
}catch(err){
    console.log("Error al conectar a base de datos")
}

app.use("/", appRoutes)
app.use("/auth", usuarioRoutes)
app.use("/", pagesRoutes)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Servidor node conectado en el puerto: " + port)
})

