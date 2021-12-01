const router = require('express').Router();

router.get('/login', (req, res) => {
	if (req.session.loggedIn) {
		res.render('index');
		return;
	}

	res.render('login');
});

router.get('/new-event', (req, res) => {
	if (!req.session.loggedIn) {
		res.render('lock');
		return;
	}

	res.render('new-event');
});

router.get('/', (req, res) => {
	res.render('index', {
		loggedIn: req.session.loggedIn,
		email: req.session.email
	});
});

module.exports = router;
