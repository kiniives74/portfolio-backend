const  text  = require('body-parser');
const connexion = require('../db/db');
const mailer = require('nodemailer');
const transporter  = require('../mailer');


exports.contact = (req,res)=>{

    const {nom,email,sujet,message} = req.body;
    console.log("Données reçues :", req.body);

    const sql = "INSERT INTO contact (nom,email,sujet,message) VALUES (?,?,?,?)";
    

    connexion.query(sql,[nom,email,sujet,message],(Error,result)=>{

        if(Error){

            return res.status(500).json({Error});
        }
        /*
        else{

            res.json({ 
            success: true, 
            message: "Message envoyé avec succès !", 
            id: result.insertId 
         });
           
            console.log(req.body);
        } */

        const mailOptions ={

            from:"iveskini6@gmail.com",
            to: email,
            subject: "Nouveau message de " + nom + "sujet: " + sujet,
            text:"Merci! pour votre message je vous reviens dans peu!"
        };

        const AdminMail={

            from:"iveskini6@gmail.com",
            to: "iveskini6@gmail.com",
            sujet:"Vous avez une notification de " + nom,
            text:"nom: "+nom + "\nemail: "+email +"\nsujet: "+sujet +"\nmessage: "+ message
        };

        transporter.sendMail(mailOptions,(Error,info)=>{

            if(Error){

                console.error(Error);
                return res.status(500).json({message: "Message enregisté mais mail non envoyé!"});
            }

            transporter.sendMail(AdminMail,(err,inf)=>{
                if(err){
                    res.status(500).json({message: "error de transmission du mail admin!"});
                }
                else{

                    res.json({success: true,message: "Message envoyé et le mail reçu avec succès!"});
                }
            });
            
        });



    });



}