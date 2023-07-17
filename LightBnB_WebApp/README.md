# LightBnB

# Lighthouse BnB 

> A simple multi-page Airbnb clone that uses a server-side JavaScript to display information from queries to web pages via SQL queries.

------------------

## 🌍 Overview

**Lighthouse BnB** is a novel and professional application designed to facilitate homeowners renting out their properties to vacationers worldwide. Our platform uses complex SQL queries, a Node.js backend, and a well-structured ERD (entity relationship diagram) for a seamless user experience.

<img src="img/lightbnb.png" alt="home-page">

## 🚀 Features

- 🏡 **Property Browsing**: Search and explore unique properties for your next getaway.
- 📆 **Booking System**: A streamlined booking system for securing your vacation home.
- ✍ **Reviews**: Share your experience and help others find their perfect destination.

## 💻 Tech Stack

The Lighthouse BnB platform is developed using robust and secure technologies:
- Server-side JavaScript for seamless user interactions.
- PostgreSQL for secure and scalable data management.

## 🔧 Setup 

### Dependencies

Install dependencies with `npm install`.

- bcrypt
- cookie-session
- express
- nodemon
- pg

### Setting up the Database

Follow these steps to set up the database:

1. Log into PSQL
2. Type these commands:

```sql
1. CREATE DATABASE lightbnb;

2. \c lightbnb;
```
These commands create a new database named “lightbnb” and connect to it.

-Copy and paste all the contents of the 01_schema.sql file (found in the migrations folder) into the terminal

This file contains the necessary commands to set up the database schema.

-The database is now up and running, and you can use the project as expected.




## Project Structure

```
.
├── db
│   ├── json
│   └── database.js
├── public
│   ├── javascript
│   │   ├── components 
│   │   │   ├── header.js
│   │   │   ├── login_form.js
│   │   │   ├── new_property_form.js
│   │   │   ├── property_listing.js
│   │   │   ├── property_listings.js
│   │   │   ├── search_form.js
│   │   │   └── signup_form.js
│   │   ├── libraries
│   │   ├── index.js
│   │   ├── network.js
│   │   └── views_manager.js
│   ├── styles
│   │   ├── main.css
│   │   └── main.css.map
│   └── index.html
├── routes
│   ├── apiRoutes.js
│   └── userRoutes.js
├── styles  
│   ├── _forms.scss
│   ├── _header.scss
│   ├── _property-listings.scss
│   └── main.scss
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

* `db` contains all the database interaction code.
  * `json` is a directory that contains a bunch of dummy data in `.json` files.
  * `database.js` is responsible for all queries to the database. It doesn't currently connect to any database, all it does is return data from `.json` files.
* `public` contains all of the HTML, CSS, and client side JavaScript. 
  * `index.html` is the entry point to the application. It's the only html page because this is a single page application.
  * `javascript` contains all of the client side javascript files.
    * `index.js` starts up the application by rendering the listings.
    * `network.js` manages all ajax requests to the server.
    * `views_manager.js` manages which components appear on screen.
    * `components` contains all of the individual html components. They are all created using jQuery.
* `routes` contains the router files which are responsible for any HTTP requests to `/users/something` or `/api/something`. 
* `styles` contains all of the sass files. 
* `server.js` is the entry point to the application. This connects the routes to the database.
