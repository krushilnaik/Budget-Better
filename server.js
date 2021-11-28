const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');
const router = require('./controllers');

/**
 * @type {session.SessionOptions}
 */
const sess = {
	secret: 'I like oreos',
	cookie: {},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize
	})
};

const PORT = process.env.PORT || 3001;

const app = express();

app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

app.get('/login', (req, res) => {
	res.render('login', {
		title: 'Budget Better | Login',
		styles: [{ sheet: 'style' }, { sheet: 'login' }],
		scripts: [{ script: 'login' }]
	});
});

app.get('/new-event', (req, res) => {
	res.render('new-event');
});

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Budget Better',
		styles: [{ sheet: 'style' }, { sheet: 'index' }]
	});
});

app.all('*', (req, res) => {
	res.render('404');
});

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log(`Now listening on ${PORT}!`));
});
