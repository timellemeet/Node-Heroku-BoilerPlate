//declare router
var router = require('express').Router();

//business logic
router.get('/', function(req, res) {
    res.render("front/front");
});

//export route
module.exports = router;
