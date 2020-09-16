  

# Sapi Support

  

  

## sapi lets you communicate simsek foundation. It has own npm package which can help you to communicate our servers. It is completely OPENSOURCE AND FREE!

  

  

### Client-js

  

You can use client.js for your api requirements.

  

``` bash

  

npm i sapi-client-official

  

```

  

or you can download it at https://makale.ga/sapi-client

  

***

  

  

### Client-js Classes; 

  

You need to call client.js with new object.

  

``` js
const sapi = require("sapi-client");

let Sapi = new sapi.Sapi("endpoint", "apikey");
```

  

* Lets try to see our session.

  

``` js
const sapi = require("sapi-client");

let Sapi = new sapi.Sapi("endpoint", "apikey");
Sapi.session().then(session  =>  console.log(session))

  

```

* Class

|Object |Requirements |Information|
|--|--|--|
|session()|.then() for logging the response| It shows sessions|
|connect()|.then() for logging the response|It connects through to endpoint and loggs in for new session.|
|apiinfo()|.then() for logging the response|Gives the information of the specified endpoint.|
|map()|.then() for logging the response|Gives The Map Of the API's map|

# Webapi

  

  

  

## sapi Gives support of community API'S. That means you can create API's for your own needs! You need to create your api with requirements specified bellow.

  

  

  

### Requirements

  

  

  

* auth/ route. (Look at bellow for an example)

  

  

* Token Store (use your own authentication function)

  

  

* Response type (Look at bellow to use)

  

  

  

### Examples; 

  

  

  

``` js
// Dependencies

const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const helmet = require('helmet');

const morgan = require('morgan');

const app = express();

const port = process.env.PORT || 3000

let config = {

    version: "0.0.1_alpha",

    apikeys: ["test"]

}

app.post("/auth/", (req, res) => {

    let apikey = req.body.api;

    let apidb = config.apikeys;

    if (apidb.includes(apikey)) {

        auth_status.delete();

        auth_status.add(apikey)

        res.status(200).json({

            status: "auth_success",

            session: auth_status

        });

    } else {

        if (req.session) {

            auth_status.delete();

            res.status(401).json({

                status: "auth_failaure",

                reason: "unauthorized"

            });

        } else {

            auth_status.delete();

            auth_status.add("unauthorized")

            res.status(401).json({

                status: "auth_failaure",

                reason: "unauthorized"

            });

        }

    }

})

// starting the server

app.listen(port, () => {

    console.log( `listening on port ${port}` );

});
```

* Class

|Object |Requirements|Information|
|--|--|--|
|connect()|.then() for logging the response|It connects through to endpoint and loggs in for new session.|
|map()|.then() for logging the response|Gives The Map Of the API's map|