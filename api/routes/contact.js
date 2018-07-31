var express = require('express');
var router = express.Router();
var email = require("emailjs");
/* GET users listing. */
router.post('/sendMail', function (req, res, next) {
    
    var server = email.server.connect({
        user: "mangochndr",
        password: "testimonio333",
        host: "smtp.gmail.com",
        ssl: true
    });

    var message = {
        text: req.body.message,
        from: req.body.forename + ' ' + req.body.surname + ' ' + req.body.email + '<' + req.body.email + '>',
        to: "Nicholas Grill <niko.grill@gmail.com>",
  //      cc: "else <mangochndr@gmail.com>",
        subject: "New Contact"
        // attachment:
        //     [
        //         { data: "<html>i <i>hope</i> this works! here is an image: <img src='cid:my-image' width='100' height ='50'> </html>" },
        //         { path: "path/to/file.zip", type: "application/zip", name: "renamed.zip" },
        //         { path: "path/to/image.jpg", type: "image/jpg", headers: { "Content-ID": "<my-image>" } }
        //     ]
    };

    // send the message and get a callback with an error or details of the message that was sent
    server.send(message, function (err, message) 
    {
         console.log(err || message);
         res.end(); 
    });

});

module.exports = router;
