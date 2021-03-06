'use strict';
   var User = require('../models/user');
   var UserLibrary = function() {
   return {
   addUsers: function() { //add two users
   var u1 = new User({
   firstname: 'Kraken',
   lastname: 'Rathi',
   emailid: 'Rathi1!@gmail.com',
   password: 'kraken',
   address: 'Benton street',
   phonenumber: '4084766213'
   });
   var u2 = new User({
   firstname: 'Akash',
   lastname: 'muthu',
   emailid: 'Akash4!@gmail.com',
   password: 'akash',
   address: 'benton,santa clara',
   phonenumber: 4086574226
   });
//Ignore errors. In this case, the errors will be for duplicate keys as we run this app more than once.
u1.save();
u2.save();
},
serialize: function(user, done) {
done(null, user.id);
},
deserialize: function(id, done) {
User.findOne({
_id: id
}, function(err, user) {
done(null, user);
});
}
};
};
module.exports = UserLibrary;
