const mysql = require('mysql');

const connexion = mysql.createConnection({

    host:"localhost",
    user:"portugais",
    password:"Ives19052005",
    database:"portfolio"

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