var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
	res.locals.paths = [
		'/100_scope',
		'/101_rootScope',
		'/102_scopeEmit',
		'/500_directive1'
	];
	res.render('page/index');
});

router.get('/:page', function (req, res) {
	var page = res.locals.page = req.param('page');
	res.render('page/' + page);
});

module.exports = router;
