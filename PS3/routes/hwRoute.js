const express = require('express');
const router = express.Router();

// 2 routes: 1 for a GET and 1 for a POST
router.route('/examples')
    .get((req, res, next) => {
        res.render(
            'partB', {
                string: 'If you see this then you have finished Part B!'
            });
    })

    .post((req,res, next) => {
        // noinspection JSAnnotator
        res.render( 'partB',
            {
            title: "This is part C",
            firstKey: req.body.name,
            secondKey: req.body.name.length
            });
    })
module.exports = router;