// routes/officeRoutes.js

const express = require('express');
const router = express.Router();
const officeController = require('../controllers/officeController');

router.post('/api/offices', officeController.addOffice);

module.exports = router;
