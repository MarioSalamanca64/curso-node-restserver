//instalaciones 
//npm i express dotenv 
//npm i cors  /// para delimitar las url es un midelware
require('dotenv').config();

const Server = require('./models/server');


//llamar models server.js
const server = new Server();


//mandar a reporducir el server
server.listen()


 

 
