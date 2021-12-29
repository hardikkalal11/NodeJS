const express = require('express')
const router = express.Router();

router.get('/users', function (req, res) {
         console.log("Admin Router Working");
         res.statusCode = 200;
         res.end();
     });

     module.exports = router;