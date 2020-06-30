
// Lets get some fetch going
const fetch = require('node-fetch');
// Get  our routers going
const express = require('express');
const router = express.Router();
// Bring in our configurations, our prized secrets
const CONFIGS = require('../CONFIGS/SECRET');
// Set up a Router


// I did a GET request because my API does not work with POST for reasons beyond me
// Since it has the same functionality,
// Professor Donham said this is fine after we met about  it

router.route('/current')
    // API does not support POST, must use GET
    .get( async (req, res, next) => {
        let result = await fetch( CONFIGS.ENDPOINT
            + req.query.Country // Get input from form in ejs  file
            + '/status/confirmed?'
            + 'from=' + CONFIGS.FROM + 'T00:00:00Z&'
            + 'to=' + CONFIGS.TO + 'T00:00:00Z');

        let dataObj = await result.json();
        let todayData = dataObj[dataObj.length - 1];
    // Used path to render the right EJS file to avoid mixing it up with index in the public folder
        res.render('../views/index', {cases: todayData.Cases});
    })
module.exports = router;



