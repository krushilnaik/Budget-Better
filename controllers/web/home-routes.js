const router = require('express').Router();

router.get('/login', (req, res) => {
	res.render('login');
});

router.get('/new-event', (req, res) => {
	res.render('new-event');
});

router.get('/', (req, res) => {
	res.render('index', {
		loggedIn: req.session.loggedIn,
		email: req.session.email
	});
});

module.exports = router;
