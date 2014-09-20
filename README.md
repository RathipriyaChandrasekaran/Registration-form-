# Registration Form

A Simple application that allows the user to create an user account by giving the necessary information.

This example highlights the following things:
*User can fill in the necessary fields based on the client-side validation credentials.
*Using mongoose model to represent user data.
*Using bcrypt to securely hash user passwords before storing them in database.
*Storing the credentials in mongodb.
*Registering kraken middleware via the json configuration files.

# Prerequisites
*This example requires Node.js to be installed.
*It also requires MongoDB to be installed and running on its default port.
*It also needs kraken-js to be installed.

#Explore the app.
Visit ["http://localhost:8000/register].

The user can fill in the appropriate fields which are validated in the client-side and when the user clicks the 'submit'  button the server-side validations are done.
The database checks whether the EmailId is unique or not, If 'yes' a success dialog is displayed.

JQuery validation frameworks and bootstrap-css are being used in this example.
path to the project files.

models/register.js
models/user.js
controllers/register/index.js
public/templates/layouts/master.dust
public templates/register.dust
lib/database.js
lib/user.js
config/config.json