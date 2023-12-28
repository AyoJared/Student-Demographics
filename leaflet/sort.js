const fs = require("fs");
const { Parser }  = require("json2csv");
const csv = require('csvtojson');
const { CONSTRAINT } = require("sqlite3");

var count = 0;
let zipNumCount = [];
let zipList = [];
let zipIndex = {};

fs.readFile("StudentZipCodes.json", (error, data) => {
    // if the reading process failed,
    // throwing the error
    if (error) {
      // logging the error
      console.error(error);
  
      throw err;
    }
  
    // parsing the JSON object
    // to convert it to a JavaScript object
    const user = JSON.parse(data);
    
    jsonObject = user.map(JSON.stringify);
    uniqueSet = new Set(jsonObject);
    zipList = Array.from(uniqueSet).map(JSON.parse);
 
    console.log(zipList);
        
    user.forEach((zip) => {
       
    });


 });


/*
(async () => {
    //Load Zips
    const zipFile = await csv().fromFile("./Student Zip Codes.csv");
    
    //Prints the Zips
    //console.log(zipFile);

    zipFile.forEach((zip) => {
        if(!(zipList.includes(zip))){
            zipList.push(zip);
        }
    });

})();

console.log(zipList);
*/

