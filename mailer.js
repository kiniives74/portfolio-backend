const mailer = require('nodemailer');

const transporter = mailer.createTransport({
    
    service:"gmail",
    auth:{
        user:"iveskini6@gmail.com",
        pass:"emnm aexz ujdj xivl "
    }
});

module.exports = transporter;