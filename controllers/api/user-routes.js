const router = require('express').Router();
const { User, Event, Item } = require('../../models');

// get all users
router.get('/', (req, res) => {
	User.findAll({
		attributes: { exclude: ['password'] }
	})
		.then(dbUserData => res.json(dbUserData))
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});

// get one user by id
router.get('/:id', (req, res) => {
	User.findOne({
		attributes: { exclude: ['password'] },
		where: {
			id: req.params.id
		},
		include: {
			model: Event,
			include: {
				model: Item
			}
		}
	})
		.then(dbUserData => {
			if (!dbUserData) {
				res.status(404).json({ message: 'No user found with this id.' });
				return;
			}
			res.json(dbUserData);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});

// create a new user
router.post('/', (req, res) => {
	User.create({
		email: req.body.email,
		password: req.body.password
	}).then(dbUserData => {
		req.session.save(() => {
			req.session.user_id = dbUserData.id;
			req.session.email = dbUserData.email;
			req.session.loggedIn = true;

			res.json(dbUserData);
		});
	});
});

// logs user in if password is correct
router.post('/login', (req, res) => {
	User.findOne({
		where: {
			email: req.body.email
		}
	}).then(dbUserData => {
		if (!dbUserData) {
			res.status(400).json({ message: 'No user with that email.' });
			return;
		}

		const correctPw = dbUserData.checkPassword(req.body.password);
		if (!correctPw) {
			res.status(400).json({ message: 'Incorrect password!' });
			return;
		}

		req.session.save(() => {
			req.session.user_id = dbUserData.id;
			req.session.email = dbUserData.email;
			req.session.loggedIn = true;

			res.json({
				user: dbUserData,
				message: 'Login successful!'
			});
		});
	});
});

// logs user out
router.post('/logout', (req, res) => {
	if (req.session.loggedIn) {
		req.session.destroy(() => {
			res.status(204).end();
		});
	} else {
		res.status(404).end();
	}
});

// user put route would go here
router.put("/:id", (req, res) => {
	User.update(
		{
			email: req.body.email,
			password: req.body.password
		},
		{
			individualHooks: true,
			where: {
				id: req.params.id
			}
		}
	)
		.then(dbUserData => {
			if (!dbUserData) {
				res.status(404).json({ message: "No user found with this id." });
				return;
			}
			res.json(dbUserData);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});

// deletes a single user by id
router.delete('/:id', (req, res) => {
	User.destroy({
		where: {
			id: req.params.id
		}
	})
		.then(dbUserData => {
			if (!dbUserData) {
				res.status(404).json({ message: 'No user found with this id.' });
				return;
			}
			res.json(dbUserData);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
