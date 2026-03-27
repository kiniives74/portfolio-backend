const express = require('express');
const router = express.Router();
const useCtrl = require('../controllers/base');

router.post('/contact',useCtrl.contact);



module.exports = router;