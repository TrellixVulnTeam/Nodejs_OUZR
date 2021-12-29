const express = require('express');
const router = express.Router();
const newsController = require('../Controllers/NewsController');

router.get('/:slug', newsController.showDetail);
router.get('/', newsController.index);

module.exports = router;