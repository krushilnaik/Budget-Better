const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
// const session = require('express-session');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const sequelize = require('./config/connection');

require('dotenv').config();

/**
 * @type {session.SessionOptions}
 */
// const sess = {
// 	secret: 'I like oreos',
// 	cookie: {},
// 	resave: false,
// 	saveUnitialized: true,
// 	store: new SequelizeStore({
// 		db: sequelize
// 	})
// };

const PORT = process.env.PORT || 3001;

const app = express();

// const apiRoutes = require('./controllers/api');

app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/api', apiRoutes);

app.get('/login', (req, res) => {
	res.render('login', {
		title: 'Budget Better | Login',
		styles: [{ sheet: 'style' }, { sheet: 'login' }],
		scripts: [{ script: 'login' }]
	});
});

app.get('/test', (req, res) => {
	res.send('Yoooo');
});

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Budget Better',
		styles: [{ sheet: 'style' }, { sheet: 'index' }]
	});
});

// sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => console.log(`Now listening on ${PORT}!`));
// });
