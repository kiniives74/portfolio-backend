const mysql = require('mysql');
require('dotenv').config();

const connexion = mysql.createConnection({

    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME

}); 

connexion.connect((Error)=>{

    if(Error){
        console.log("erreur de connexion "+ Error.stack);
    }
    else{

        console.log('connexion à la base de donnée réussie!');
    }
});

module.exports = connexion;