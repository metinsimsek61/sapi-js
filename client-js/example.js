//    __  __________  ________  _________ __
//   /  |/  /_  __/ |/ / __/  |/  / __/ //_/
//  / /|_/ / / / /    /\ \/ /|_/ /\ \/ ,<
// /_/  /_/ /_/ /_/|_/___/_/  /_/___/_/|_|
//                                        Software Found
/*
* Software Name: sapi-client
* Software License: MIT (MIT, ISC, Apache, CC, msl)
* Software Type: free
* Software Language: node-js
* Software Version: 0.0.3_beta
* Legal Notice: YOU ARE NOT ALLOWED TO SELL THIS SOFTWARE.
* Allowed Rights: YOU ARE ALLOWED TO CHANGE, VIEW, DISTRUBUTE THIS SOFTWARE
* Author: mtnsmsk
* WITH THIS SOFTWARE YOU ARE ABLE TO USE YOUR RIGHTS(defined up). YOU CAN'T SELL, DISTRUBUTE AND COPY IT WITHOUT THE PERMISSION OF THE AUTHOR.
* MTNSMSK KEEPS THE RIGHT OF CHANGING THEESE TERMS
*/
let Sapi = require("./index")
let sapi = new Sapi.Sapi("http://localhost:3000/", "752886.TDrXW.315070");

sapi.connect().then(res => console.log(res))
sapi.session().then(res => console.log(res))
sapi.api_info().then(res => console.log(res))
sapi.map().then(res => console.log(res))