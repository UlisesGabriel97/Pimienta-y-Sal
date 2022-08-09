let platos = require("../data/platos.json")

 module.exports = {
    index : (req, res) => {
        res.render("index",{platos})
    },
    detalleMenu : (req, res) => {
        let id = + req.params.id
        let platoDetallado = platos.find((producto) => producto.id === id)
        return res.render("detalleMenu",{
            plato : platoDetallado,
            platos
        })
    }
 }