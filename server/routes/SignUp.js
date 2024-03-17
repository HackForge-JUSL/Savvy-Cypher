const express = require("express");
const router = express.Router();
const path = require('path');
const fs = require('fs');
router.use('../../client/public', express.static('static'));
router.get('/', (req, res) =>{
    res.status(200).render("../../client/src/Signup.js");
});

module.exports = router;
