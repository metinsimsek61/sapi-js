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
* Software Version: 0.0.1_beta
* Legal Notice: nothing. you are free to change this software.
* Allowed Rights: everything 
* Author: mtnsmsk
* WITH THIS SOFTWARE YOU ARE ABLE TO USE YOUR RIGHTS(defined up). YOU CAN'T SELL, DISTRUBUTE AND COPY IT WITHOUT THE PERMISSION OF THE AUTHOR.
* MTNSMSK KEEPS THE RIGHT OF CHANGING THEESE TERMS
* Lastest Change: Added makale.ga api support. (You can see version logs at the down of this file)
*/
const fetch = require('node-fetch');
const captureWebsite = require('capture-website');
const { log } = require("console");
module.exports = function (endpoint, apikey) {
    var module = {};

    module.login = function () {
        if (!endpoint && !apikey) {
            return log("Error: Login Variables Cant Be Empty. Please Use It Again!");
        }
        // post
        const body = { api: apikey };
        fetch(endpoint + "auth/", {
            method: 'post',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(json => {
                if (json.reason === "unauthorized") {
                    return log("ERR: Invaild Apikey or Endpoint")
                } else {
                    log("Authorized")
                }
            });
    };
    module.map = function () {
        fetch(endpoint + "map")
            .then(res => res.json())
            .then(json => {
                log(json.tree.join(" \n"))
            });
    };
    module.apiinfo = function () {
        fetch(endpoint + "info")
            .then(res => res.json())
            .then(json => {
                log(json)
            });
    };
    module.generatetoken = function () {
        const body = { api: apikey };
        fetch(endpoint + "generate/token", {
            method: 'post',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(json => {
            log(json)
        });
    };
    return module;
};
/*
* Version Logs;
* You can find these logs at changelog.md
* -----------------------
* 0.0.1_beta - 2020/09/12
* -----------------------
* Added authorization api support
* ———————————————————————
* -----------------------
* 0.0.1_beta - 2020/09/13
* -----------------------
* Added makale.ga api support
*/