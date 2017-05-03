var request = require("request");
var parseXmlToJson = require('xml2js').parseString;

request('http://thispodcast.libsyn.com/rss',
    function (error, response, body) {
        if (!error && response.statusCode == 200) {

            var xmlbody = body.toString();
            console.log("body: ", xmlbody);

            parseXmlToJson(xmlbody, function (err, json) {
                console.log(json);
            });
        } else {
            console.log("error: ", error);
        }
    })





// var requestify = require('requestify');
// requestify.get('https://google.com').then(function (response, error) {
//     // Get the response body
//     var body = response.getBody();
//     console.log("body: ", body, response, error);
// }, function (error) {
//     console.log("error: ", error);
// });
// console.log("efwewe");



