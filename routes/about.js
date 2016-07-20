var express = require('express'),
    router = express.Router();

router.get('/about', function(req, res) {
    res.render('about/about');
});

module.exports = router;
