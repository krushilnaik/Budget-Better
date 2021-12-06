# Budget Better

<p align="center">
	<a href="https://rutgers-budget-better.herokuapp.com/">
		<img src="https://i.imgur.com/nT9LavM.png" height="40" />
	</a>
</p>

## Table of Contents

- [Budget Better](#budget-better)
	- [Table of Contents](#table-of-contents)
	- [MVP](#mvp)
	- [Full Project](#full-project)
	- [Tech Stack](#tech-stack)
	- [How to run](#how-to-run)
	- [Screenshots](#screenshots)

## MVP

```
When a user visits the website they are greeted to a sign in page. Once the user is signed in, they are taken to a dashboard of each event that is stored in the database for that user.
When the user creates a new event, they add a title/name of the event. Then, they can start to add line items of various things that are needed for such event. For example, if a user creates an event for a wedding,
they can create line items for:
flowers, limo, and catering. They will then enter the cost of each item in the front end, and we will take that entered information and send it in a post request to the database.
```

## Full Project

```
When a user visits the website they are greeted to a sign in page. Once the user is signed in, they are taken to a dashboard of each event that is stored in the database for that user. They can view and edit saved events,
or they can create a new event.
When the user creates a new event, they add a title/name of the event. Then, they can start to add line items of various things that are needed for such event. For example, if a user creates an event for a wedding,
they can create line items for:
flowers, limo, and catering. They will then enter the cost of each item in the front end, and we will take that entered information and send it in a post request to the database.
```

## Tech Stack

- Gulp (build system)
- SCSS (styling)
- Handlebars (templating engine)
- MySQL (database)
- Sequelize ORM

## How to run

`yarn install` (or `npm install`) followed by `yarn start` (or `npm start`)

## Screenshots

Landing Page

![Application's Landing Page](./screenshots/landing-screenshot.PNG)

Login Page

![Login Page](./screenshots/login-screenshot.PNG)

Signup Page

![Signup Page](./screenshots/signup-screenshot.PNG)

Over Budget Event

![Over Budget Event](./screenshots/overbudget-screenshot.PNG)

Under Budget Event

![Under Budget Event](./screenshots/underbudget-screenshot.PNG)

Including/Not including certain items GIF with deletion functionality

![Functionality GIF](./screenshots/showhide-delete.gif)
