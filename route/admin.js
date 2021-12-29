const express = require('express')
const router = express.Router();

router.get('/admin', function (req, res) {
    console.log("admin Router Working");
    res.end('admin Router Working');
});

module.exports = router;