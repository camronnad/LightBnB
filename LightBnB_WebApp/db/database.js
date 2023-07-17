// Importing data from JSON files related to properties and users.
const properties = require("./json/properties.json");
const users = require("./json/users.json");

// The 'pg' library is being imported for PostgreSQL database operations.
const { Pool } = require("pg");

// A pool of connections is established for the database with specific credentials.
const pool = new Pool({
  user: "camronnaderi",
  password: "123",
  host: "localhost",
  database: "lightbnb",
});

// This function gets a user from the database using their email.
const getUserWithEmail = function (email) {
  return pool
    .query(`SELECT * FROM users WHERE email = $1`, [email])
    .then((user) => {
      if (user) {
        return user.rows[0]; // If a user is found, it's returned.
      } else {
        return null; // No user? That's a null.
      }
    })
    .catch((err) => {
      // Any errors? They get logged here.
      console.log(err.message);
      return err;
    });
};
// This function gets a user from the database using their id.
const getUserWithId = function (id) {
  return pool
    .query(`SELECT * FROM users WHERE id = $1`, [id])
    .then((user) => {
      if (user) {
        return user.rows[0]; // If a user is found, it's returned.
      } else {
        return null; // No user? That's a null.
      }
    })
    .catch((err) => {
      console.log(err.message);
      return err;
    });
};

// This function adds a new user to the database.
const addUser = function (user) {
  const queryString = `
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

  return pool
    .query(queryString, [user.name, user.email, user.password]) // Takes a user object with name, email, and password.
    .then((result) => {
      return result.rows[0]; // Returns the new user's details.
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// This function gets all reservations for a single user.
const getAllReservations = function (guest_id, limit = 10) {
  return pool
    .query(
      `
      SELECT reservations.*, properties.*, avg(property_reviews.rating) as average_rating
      FROM reservations
      JOIN properties ON reservations.property_id = properties.id
      JOIN property_reviews ON properties.id = property_reviews.property_id 
      WHERE reservations.guest_id = $1
      AND reservations.end_date < now()::date
      GROUP BY properties.id, reservations.id
      ORDER BY reservations.start_date DESC
      LIMIT $2;
    `,
      [guest_id, limit]
    )
    .then((res) => res.rows) // Returns the reservations.
    .catch((err) => {
      console.error(err); // Logs any errors.
    });
};

// This function gets all properties based on given options.
const getAllProperties = (options, limit = 10) => {
  // ... Here comes your logic ...
};

// This function adds a new property to the database.
const addProperty = function (property) {
  const queryString = `
    INSERT INTO properties (
      owner_id, 
      title, 
      description, 
      thumbnail_photo_url, 
      cover_photo_url, 
      cost_per_night, 
      street, 
      city, 
      province, 
      post_code, 
      country, 
      parking_spaces, 
      number_of_bathrooms, 
      number_of_bedrooms)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    RETURNING *;
  `;
  const queryParams = [
    property.owner_id,
    property.title,
    property.description,
    property.thumbnail_photo_url,
    property.cover_photo_url,
    property.cost_per_night,
    property.street,
    property.city,
    property.province,
    property.post_code,
    property.country,
    property.parking_spaces,
    property.number_of_bathrooms,
    property.number_of_bedrooms,
  ];

  return pool
    .query(queryString, queryParams)
    .then((result) => result.rows[0]) // Returns the new property's details.
    .catch((err) => {
      console.error(err); // Logs any errors.
    });
};

module.exports = {
  getUserWithEmail,
  getUserWithId,
  addUser,
  getAllReservations,
  getAllProperties,
  addProperty,
};
