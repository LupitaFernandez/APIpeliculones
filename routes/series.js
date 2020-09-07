const express = require ('express');
const router = express.Router ();
const seriesController = require ('../controllers/seriesController.js')

router.get ('/all', seriesController.getAll);
router.post ('/create', seriesController.create);
router.get ('/detail/:id', seriesController.getById);


module.exports = router;