var router = require('express').Router();

router.get('/', function(req, res) {
    res.json('3001');
});
router.get('/test', function(req, res) {
    res.json({
        "connection":"established",
        "app": "MERN"
    });
});

module.exports = router; 