const express = require('express');
const router = express.Router();

const getDomain = require('../controllers/getDomain');

router.get('/domain', getDomain);

module.exports = router;