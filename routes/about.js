//declare router
var router = require('express').Router();

//business logic
router.get('/about', function(req, res) {
    res.render('about/about');
});


//export route
module.exports = router;
