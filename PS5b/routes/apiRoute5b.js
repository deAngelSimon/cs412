
// Lets get some fetch going
const fetch = require('node-fetch');
// Get  our routers going
const express = require('express');
const router = express.Router();
// Bring in our configurations, our prized secrets
const CONFIGS = require('../CONFIGS/SECRET');
// Set up a Router
// Lets do the REDIS stuff
const redis = require('redis');
const client = redis.createClient();
// flush the db
client.flushdb((err, success) => {
    if (err) { throw new Error(err)}
});
// Rewritting route to incorporate REDIS
router.get('find/:Cases',async (req, res, next) => {
    let result = await fetch( CONFIGS.ENDPOINT
        + req.query.Country // Get input from form in ejs  file
        + '/status/confirmed?'
        + 'from=' + CONFIGS.FROM + 'T00:00:00Z&'
        + 'to=' + CONFIGS.TO + 'T00:00:00Z');

    let dataObj = await result.json();
    let todayData = dataObj[dataObj.length - 1];

    client.exists(todayData.main.Cases, (err, match) => {

        if(err) { throw new Error(err) }
        //If the key exists --> grab we retrieve its value
        if (match) {
            client.get(todayData.main.Cases, (err, response) => {
                //Send back a JSON object
                res.send(JSON.stringify(response + ' We have it cached baby'))
            })
        } else {
            const reversedName = todayData.main.Cases.split('').reverse().join('');
            client.set(odayData.main.Cases, reversedName, (err, response) => {
                res.send(JSON.stringify(reversedName + ' It aint cached chief'))
            })
        }
    })
})


module.exports = router;
