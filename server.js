const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sequelize = require('./config/connection');
const router = require('./controllers');
const helpers = require('./utils/helpers');

/**
 * @type {session.SessionOptions}
 */
const sess = {
	secret: 'I like oreos',
	cookie: { maxAge: 36000000 },
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize
	})
};

const PORT = process.env.PORT || 3001;

const app = express();

const hbs = exphbs.create({ defaultLayout: 'main', helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

app.get('/destroy', (req, res) => {
	req.session.destroy();

	res.json({ session: req.session });
});

app.all('*', (req, res) => {
	res.render('404');
});

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log(`Now listening on ${PORT}!`));
});
