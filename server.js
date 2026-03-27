/*const http = require('http');
const app = require('./app');

const server = http.createServer((req,res)=>{

    console.log("server en ligne");

});

server.listen(3000); */

const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 3000;;

const server = http.createServer(app); 
server.listen(PORT, () => {
    console.log(`Server en ligne sur le port ${PORT}`);
});