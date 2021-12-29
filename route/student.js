const express = require('express')
const router = express.Router()

router.get('/student', function (req, res) {
         console.log("Student Router Working");
         res.end();
     });

module.exports = router;