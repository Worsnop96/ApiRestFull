const express = require("express");
const ruta = express.Router();
const Usuario = require("../models/usuario_model");

ruta.get("/", () => {
  res.json("lista de usuarios");
});

ruta.post("/", (req, res) => {
  let body = req.body;
  let resultado = crearUsuario(body);
  resultado
    .then((user) => {
      res.json({
        valor: user,
      });
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
});


ruta.put('/:email', (req, res)=>{

})


async function crearUsuario(body) {
  let usuario = Usuario({
    email: body.email,
    nombre: body.nombre,
    password: body.password,
  });
  return await usuario.save();
}

async function actualizarUsuario(email, body){
  let usuario = await Usuario.findOneAndUpdate(email, {
    $set:{
      nombre:body.nombre, 
      password: body.password
    }
  }, {new:true});
  return usuario
}

module.exports = ruta;
