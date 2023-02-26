import { check, validationResult } from "express-validator"
import bcrypt from "bcrypt"
import Usuario from "../models/Usuario.js"
import { generarJWT, generarId } from "../helpers/tokens.js"
import { emailRegistro, emailrestablecerPass } from "../helpers/emails.js"

const formularioLogin = (req, res) => {
    res.render("auth/login", {
        pagina: "Iniciar sesion",
        csrfToken: req.csrfToken()
    })
}

const autenticar = async (req, res) => {

    await check("nombre").notEmpty().withMessage("¡ El nombre no puede estar vacio !").run(req)
    //await check("email").isEmail().withMessage("¡ El correo no puede estar vacio !").run(req)
    await check("password").notEmpty().withMessage("¡ La contraseña es invalida !").run(req)

    let resultado = validationResult(req)

    if (!resultado.isEmpty()) {

        return res.render("auth/login", {
            pagina: "Iniciar sesion",
            csrfToken: req.csrfToken(),
            errores: resultado.array()
        })
    }

    const {nombre, password} = req.body

    const usuario = await Usuario.findOne({where: {nombre}})

    if(!usuario){

        return res.render("auth/login", {
            pagina: "Iniciar sesion",
            csrfToken: req.csrfToken(),
            errores: [{msg: "¡ El usuario no existe !"}]
        })

    }

    if(!usuario.confirmado){

        return res.render("auth/login", {
            pagina: "Iniciar sesion",
            csrfToken: req.csrfToken(),
            errores: [{msg: "¡ La cuenta no esta activada !"}]
        })

    }

    if(!usuario.verificarPass(password)){

        return res.render("auth/login", {
            pagina: "Iniciar sesion",
            csrfToken: req.csrfToken(),
            errores: [{msg: "¡ La contraseña es incorrecta !"}]
        })
    }

    const token = generarJWT(usuario.id)

    console.log(token)

    return res.cookie("_token", token, {


        httpOnly: true,
        //secure: true

    }).redirect("/home");
}

const cerrarSesion = (req, res) => {

}

const formularioRegistro = (req, res) => {

    res.render("auth/registro", {
        pagina: "Crear cuenta",
        csrfToken: req.csrfToken()
    })
}

const registrar = async (req, res) => {

    await check("nombre").notEmpty().withMessage("¡ El nombre no puede estar vacio !").run(req)
    await check("email").isEmail().withMessage("¡ El correo no puede estar vacio !").run(req)
    await check("password").isLength({ min: 6 }).withMessage("¡ La contraseña es invalida !").run(req)
    await check("confirmar_password").equals(req.body.password).withMessage("¡ Las contraseñas no coinciden !").run(req)

    let resultado = validationResult(req)

    if (!resultado.isEmpty()) {

        return res.render("auth/registro", {
            pagina: "Crear cuenta",
            csrfToken: req.csrfToken(),
            errores: resultado.array(),
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email
            }
        })

    }

    const {nombre, email, password} = req.body

    const existeUsuario = await Usuario.findOne({where : { email }})

    if(existeUsuario){

        return res.render("auth/registro", {
            pagina: "Crear cuenta",
            csrfToken: req.csrfToken(),
            errores: [{msg: "¡ Este correo ya esta registrado !"}],
            usuario: {
                nombre: req.body.nombre,
                email: req.body.email
            }
        })
    }

    const usuario = await Usuario.create({
        nombre,
        email,
        password,
        token: generarId()
    })

    emailRegistro({
        nombre: usuario.nombre,
        email: usuario.email,
        token: usuario.token
    })

    res.render("templates/mensajes", {
        pagina: "¡ Cuenta creada exitosamente !",
        mensaje: "¡ Se envió un enlace a tu correo para activar la cuenta !"
    })

}

const confirmar = async (req, res) => {
    
    const {token} = req.params
    
    console.log(token)

    const usuario = await Usuario.findOne({where: {token}})

    if(!usuario){
        return res.render("auth/confirmarCuenta", {
            pagina: "¡ Hubo un error al confirmar tu cuenta !",
            mensaje: "¡ Intenta de nuevo !",
            error: true
        })
    }

    usuario.token = null
    usuario.confirmado = true
    await usuario.save()

    return res.render("auth/confirmarCuenta", {
        pagina: "¡ Cuenta activada !",
        mensaje: "¡ La cuenta ha sido activada exitosamente !"
    })

}

const formularioRestablecerPass = (req, res) => {
    res.render("auth/restablecerPass", {
        pagina: "Restablecer contraseña",
        csrfToken: req.csrfToken()
    })
}

const resetPass = async (req, res) => {

    await check("email").isEmail().withMessage("¡ El correo no puede estar vacio !").run(req)

    let resultado = validationResult(req)

    if (!resultado.isEmpty()) {

        return res.render("auth/restablecerPass", {
            pagina: "Restablecer contraseña",
            csrfToken: req.csrfToken(),
            errores: resultado.array()
        })

    }

    const {email} = req.body

    const usuario = await Usuario.findOne({where: {email}})

    if(!usuario){
        return res.render("auth/restablecerPass", {
            pagina: "Restablecer contraseña",
            csrfToken: req.csrfToken(),
            errores: [{msg: "¡ Este correo no esta registrado !"}]
        })
    }

    usuario.token = generarId()
    await usuario.save()

    emailrestablecerPass({

        email: usuario.email,
        nombre: usuario.nombre,
        token: usuario.token
    })
    
    res.render("templates/mensajes", {
        pagina: "¡ Revisa tu correo !",
        mensaje: "¡ Se envió un enlace a tu correo para restablecer la contraseña !"
    })

}

const comprobarToken = async (req, res) => {

    const {token} = req.params

    const usuario = await Usuario.findOne({where: {token}})

    if(!usuario){

        return res.render("auth/confirmarCuenta", {
            pagina: "¡ Restablece tu contraseña !",
            mensaje: "¡ Hubo un error al validar tu información, Intenta de nuevo !",
            error: true
        })

    }

    res.render("auth/resetPass", {
        
        pagina: "Restablece tu contraseña",
        csrfToken: req.csrfToken()
    })
    
}

const nuevoPass = async (req, res) => {
    
    await check("password").isLength({ min: 6 }).withMessage("¡ La contraseña es invalida !").run(req)

    let resultado = validationResult(req)

    if (!resultado.isEmpty()) {

        return res.render("auth/resetPass", {
            pagina: "Restablecer contraseña",
            csrfToken: req.csrfToken(),
            errores: resultado.array()
        })
    }

    const {token} = req.params
    const {password} = req.body

    const usuario = await Usuario.findOne({where: {token}})

    const salt = await bcrypt.genSalt(10)
    usuario.password = await bcrypt.hash(password, salt)

    usuario.token= null
    await usuario.save()

    res.render("auth/confirmarCuenta", {
        pagina: "¡ Contraseña restablecida !",
        mensaje: "¡ La contraseña se ha restablecido exitosamente !"
    })

}

export {
    formularioLogin,
    autenticar,
    cerrarSesion,
    formularioRegistro,
    registrar,
    confirmar,
    formularioRestablecerPass,
    resetPass,
    comprobarToken,
    nuevoPass
}