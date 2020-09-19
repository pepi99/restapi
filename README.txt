This is a solution to the assignment REST API Task by Petar Ulev.

MongoDB is used for data storage. If installed on Ubuntu (or any Linux distro),
Mongo should be started with the command sudo systemctl start mongod.

How to Start:
=============
node app.js

How to authenticate: / POST
    - url: localhost:$port/authenticate
    - body: {"username": "username", "password": "password"} // this is the hardcoded user
    - a JWT token is generated and returned to the user and automatically set as a cookie
    - every request to the API now sets the authorization header to the jwt token stored in the cookie
    - authentication is not needed only for getting all products.
    - API can now be used, description is below.

API Description:
================

- Add a product: / POST
    - url: localhost:$port/products
    - body: {name: ..., category: ..., price: ...}
- Get products: / GET
    - url: localhost:$port/products
- Delete product: / DELETE
    - localhost:$port/products/$productName
- Update a product: / PATCH
    - url: localhost:$port/products/$productName
    - body: {name: ..., category: ..., price: ...}

NOTES!
- Every time the program is started, all old data is deleted and the db is populated
with some dummy data (can be seen in prepopulator.js). You stop deleting or prepopulating in the app.js file.

- I have obtained the country code from an API called ipinfo (https://ipinfo.io). I have not
done this by decoding JWT token as specified in the assignment (I don't see how
a JWT token could store any information about user location, while it has nothing to do
with it).