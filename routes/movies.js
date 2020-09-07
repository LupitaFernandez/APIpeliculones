const express = require ('express');
const router = express.Router ();
const moviesController = require ('../controllers/moviesController.js')

router.get ('/all', moviesController.getAll);
router.post ('/create', moviesController.create);
router.get ('/detail/:id', moviesController.getById);

module.exports = router;