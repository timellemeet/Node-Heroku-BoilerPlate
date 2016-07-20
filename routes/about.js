var express = require('express'),
    router = express.Router();

router.get('/about', function(req, res) {
    res.send('this is about about about us <a href="/">home</a>');
});

module.exports = router;
