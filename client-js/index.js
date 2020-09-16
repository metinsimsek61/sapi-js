//    __  __________  ________  _________ __
//   /  |/  /_  __/ |/ / __/  |/  / __/ //_/
//  / /|_/ / / / /    /\ \/ /|_/ /\ \/ ,<
// /_/  /_/ /_/ /_/|_/___/_/  /_/___/_/|_|
//                                        Software Found
/*
* Software Name: sapi-auth
* Software License: MIT (MIT, ISC, Apache, CC, msl)
* Software Type: npm module
* Software Language: js
* Software Version: 0.0.3_beta
* Legal Notice: nothing. you are free to change this software.
* Allowed Rights: everything 
* Author: mtnsmsk
* WITH THIS SOFTWARE YOU ARE ABLE TO USE YOUR RIGHTS(defined up). YOU CAN'T SELL, DISTRUBUTE AND COPY IT WITHOUT THE PERMISSION OF THE AUTHOR.
* MTNSMSK KEEPS THE RIGHT OF CHANGING THEESE TERMS
* Lastest Change: Classes
*/
const fetch = require('node-fetch');
const { log } = require("console");
const { promises } = require('dns');
const { login } = require('.');

let conn = {};

// Functions
function err(code) {
    /*
    * Error List;
    * e_01 = Specify Endpoint & Apikey
    * e_02 = Please Login With sapi.login() to use sapi services.
    * e_03 = Endpoints Has To End With /
    */
    if (code === "e_01") {
        throw new Error("Please Specify Endpoint And Apikey to use sapi services.");
    } else if (code === "e_02") {
        throw new Error("Please Login With sapi.login() to use sapi services.");
    } else if (code === "e_03") {
        throw new Error("Endpoints Has To End With \"/\"");
    } else if (code === "e_04") {
        throw new Error("Unauthorized");
    }
    // Class Errors
    else if (code === "e_c_01") {
        throw new Error("You are not connected! please connect through using new object!");
    } else if (code === "e_c_02") {
        throw new Error("Endpoints Has To End With \"/\"");
    }
}
function checkurl(url) {
    endurl = url.charAt(url.length - 1);
    if (endurl === "/") {
        return true;
    } else {
        return false; // throw Error("e_03")
    }
}

function logintoapi(endpoint, apikey) {
    return new Promise((resolve, reject) => {
        // Check The Url First
        if (checkurl(endpoint)) {
            body = { api: apikey };
            fetch(endpoint + "auth/", {
                method: "post",
                body: JSON.stringify(body),
                headers: { "Content-Type": "application/json" },
            })
                .then(res => res.json())
                .then(json => {
                    if (json.reason === "unauthorized") {
                        reject(err("e_04")); // unauthorized
                    } else {
                        resolve("authorized");
                    }
                })
        } else {
            reject(err("e_c_02")); // Url must end with /
        }
    })
}
// Classes
class Sapi {
    constructor(url, apikey) {
        this.endpoint = url;
        this.apikey = apikey;
    }

    connect() {
        return new Promise((resolve, reject) => {
            if (!this.endpoint && !this.apikey) {
                return reject(err("e_c_01"))
            } else {
                logintoapi(this.endpoint, this.apikey).then(res => {
                    resolve(res)
                })
            }
        })
    }

    session() {
        return new Promise((resolve, reject) => {
            if (!this.endpoint) {
                reject(err("e_c_01"))
            }
            resolve("You are connected to: " + this.endpoint);
        });
    }

    api_info() {
        return new Promise((resolve, reject) => {
            if (!this.endpoint) {
                return reject(err("e_c_01"));
            }
            fetch(this.endpoint + "info")
                .then(res => res.json())
                .then(json => {
                    resolve(json.sapi_modules)
                })
        })
    }

    map() {
        return new Promise((resolve, reject) => {
            if (!this.endpoint) {
                return reject(err("e_c_01"));
            }
            fetch(this.endpoint + "map")
                .then(res => res.json())
                .then(json => {
                    resolve(json.tree.join(" \n"))
                })
        })
    }
}
exports.Sapi = Sapi;

class Webapi {
    constructor(url, apikey) {
        this.endpoint = url;
        this.apikey = apikey;
    }

    connect() {
        return new Promise((resolve, reject) => {
            if (!this.endpoint && !this.apikey) {
                return reject(err("e_c_01"))
            } else {
                logintoapi(this.endpoint, this.apikey).then(res => {
                    resolve(res)
                })
            }
        })
    }
    map() {
        return new Promise((resolve, reject) => {
            if (!this.endpoint) {
                return reject(err("e_c_01"));
            }
            fetch(this.endpoint + "map")
                .then(res => res.json())
                .then(json => {
                    resolve(json.tree.join(" \n"))
                })
        })
    }
}
exports.Webapi = Webapi;