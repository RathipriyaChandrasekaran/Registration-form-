'use strict';


var RegisterModel = require('../../models/register');
var User = require('../../models/user');

module.exports = function (router) {
    var model = new RegisterModel();

    router.get('/', function (req, res) {
      console.log("asdf");
        res.render('register', model);
    });

    var validate = function(req, _callback)  {
     var result = '';
     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if (!re.test(req.emailid)) {
       result += 'EmailId is in invalid format.'
     }
     if (!/^(?=.*\d)(?=.*[!@#\$%\^&\*\-])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#\$%\^&\*\-]{8,}$/.test(req.password)) {
       result += 'Password is in invalid format.'
     }
     if (req.phonenumber.length != 10) {
       result += 'PhoneNumber should be a valid US Phone Number';
     }
     _callback(result);
    };

    router.post('/', function (req, res) {
      console.log(req.body);
      validate(req.body, function(result) {
        if (result != '') {
          res.writeHead(500, {'Content-Type': 'text/html','Content-Length':result.length});
          res.write(result);
          res.end();
          return;
        }

        var u1 = new User(req.body);
        u1.save(function(err) {
          var status = "success";
          var retCode = 200;
          if (err) { 
            status = "error";
            retCode = 500;
          }
          var data = '{"status":"'+status+'"}';
          res.writeHead(retCode, {'Content-Type': 'application/json','Content-Length':data.length});
          res.write(data);
          res.end();
        });
      });
    });
};
