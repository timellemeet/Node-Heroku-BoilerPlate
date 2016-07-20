var express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
    res.render("front/front");
});

module.exports = router;
