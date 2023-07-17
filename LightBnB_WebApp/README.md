# LightBnB

> A simple multi-page Airbnb clone that uses a server-side JavaScript to display information from queries to web pages via SQL queries.

------------------

## 🌍 Overview

**Lighthouse BnB** is a novel and professional application designed to facilitate homeowners renting out their properties to vacationers worldwide. Our platform uses complex SQL queries, a Node.js backend, and a well-structured ERD (entity relationship diagram) for a seamless user experience.

## 🚀 Features

- 🏡 **Property Browsing**: Search and explore unique properties for your next getaway.
- 📆 **Booking System**: A streamlined booking system for securing your vacation home.
- ✍ **Reviews**: Share your experience and help others find their perfect destination.

## 💻 Tech Stack

The Lighthouse BnB platform is developed using robust and secure technologies:
- Server-side JavaScript for seamless user interactions.
- PostgreSQL for secure and scalable data management.

## 🎓 Learning Outcomes

Through this project, learners will gain a deep understanding of SQL/relational databases, database design, and the application of these technologies in real-world web applications.

## 👩‍💻 Work Outcomes

Completing this project equips learners with practical skills and knowledge to contribute to full-stack web applications using modern software development patterns, tools, and workflows.

Join us in revolutionizing the home-sharing industry with **Lighthouse BnB**.

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
