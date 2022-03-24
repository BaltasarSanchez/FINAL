export default {
    //vista de mensajes.
    getMensajes: async(req, res) => {
        return res.render('mensajes.ejs')
    },
    //vista de mensajes de el usuario.
    getMensajesUsuario: async(req, res) => {
        return res.render('mensajesUsuario.ejs')
    }
}
