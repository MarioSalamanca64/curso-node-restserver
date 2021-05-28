const {response, request} = require('express');


const usuariosGet = (req =  request, res = response) => {
    //si no trae nombre pondria no name
    const {q, nombre = 'no name', apikey, page = 1, limit} = req.query;

    // res.send('Hello World')estatico por eso siempre se manda json
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })
};

const usuariosPost = (req, res) => {
    // req lo que la persona esta solisitando y es mandar informacion obtener datos por post
    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    });
};
  

const usuariosPut = (req, res = response) => {
    //es si mandas un /10 para que lo acepte
    const { id } = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    });
};

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - controlador'
    });
  };

const usuariosDelete =  (req, res) => {
    res.json({
        msg: 'delete - controlador'
    });
  }


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}