const express = require('express');
const cors = require('cors');


class Server{

    constructor(){
        this.app  = express();
        this.port = process.env.PORT;
        //mostrar la ruta para que se mas facil de ver 
        this.usuariosRouterPath = '/api/usuarios';
        //middlewares son objetos q se le vantaran cuando iniciemos el servidor
        this.middlewares();
        //rutas de mi aplicacion 
        this.routes();
 
    }

    middlewares(){
        //cors para quietar errores
        this.app.use(cors())
        //escribir y lectura del body mandar objeto json ontener datos por post
        this.app.use(express.json() );

        //directorio publico
        this.app.use( express.static('public'));

    }

    routes(){
       
        this.app.use(this.usuariosRouterPath /*aqui se pone la ruta*/ , require('../routes/usuarios'))
    }

    listen(){
        //pordonde lo esta escuchando 
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en pueto', this.port);
        });
    }

}




module.exports = Server;