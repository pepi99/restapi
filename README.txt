This is a solution to the assignment REST API Task by Petar Ulev.

MongoDB is used for data storage. If installed on Ubuntu (or any Linux distro),
Mongo should be started with the command sudo systemctl start mongod.

How to Start:
=============
node app.js

API Description:
================

- Add a product: / POST
    - url: localhost:$port/addNewProduct
    - body: {name: ..., category: ..., price: ...}
- Get products: / GET
    - url: localhost:$port/getProducts
- Delete product: / DELETE
    - localhost:$port/deleteProduct/$productName
- Update a product: / PATCH
    - url: localhost:$port/updateProduct/$productName
    - body: {name: ..., category: ..., price: ...}

NOTES!
- Every time the program is started, all old data is deleted and the db is populated
with some dummy data (can be seen in prepopulator.js). You stop deleting or prepopulating in the app.js file.

- I have obtained the country code from an API called ipinfo (https://ipinfo.io). I have not
done this by decoding JWT token as specified in the assignment (I don't see how
a JWT token could store any information user location, while it has nothing to do
with it).