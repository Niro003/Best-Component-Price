var express = require('express');
var router = express.Router();
var email = require("emailjs");
/* GET users listing. */
router.post('/sendMail', function (req, res, next) {
    
    var server = email.server.connect({
        user: "mangochndr",
        password: "pinkolo909",
        host: "smtp.gmail.com",
        ssl: true
    });
    console.log(req.body.message);
    var message = {
        text: "i hope this works",
        from: "you <${req.body.email}>",
        to: "someone <niko.grill@gmail.com>, another <another@your-email.com>",
        cc: "else <else@your-email.com>",
        subject: "testing emailjs"
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
