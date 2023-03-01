import nodemailer from  "nodemailer"


const emailRegistro = async (datos) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        //secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    })

    const {email, nombre, token} = datos

    await transport.sendMail({
        from: "IoT Test", 
        to: email,
        subject: "Activar cuenta",
        text: "Activar tu cuenta",
        html: 
            `<p>Hola ${nombre} comprueba tu cuenta de IoT en el siguiente enlace:</p>
            <p><a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/confirmar/${token}">Activar cuenta</a></p>`
    })
}


const emailrestablecerPass = async (datos) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,

        }
    })

    const {email, nombre, token} = datos

    await transport.sendMail({
        from: "Node Prueba",
        to: email,
        subject: "Restablecer contraseña",
        text: "Restablecer tu contraseña",
        html: 
            `<p>Hola ${nombre}, has solicitado restablecer tu contraseña, da click en el siguiente enlace:</p>
            <p><a href="${process.env.BACKEND_URL}:${process.env.PORT ?? 3000}/auth/restablecerPass/${token}">Restablecer contraseña</a></p>`
    })
}

export {
    emailRegistro,
    emailrestablecerPass
}