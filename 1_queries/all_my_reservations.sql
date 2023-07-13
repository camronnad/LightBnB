SELECT reservations.id as id, title, cost_per_night, start_date, avg(rating) as average_rating
FROM reservations
JOIN properties ON property_id = properties.id
JOIN property_reviews ON property_reviews.property_id = properties.id
WHERE owner_id = 1
GROUP BY reservations.id, title, cost_per_night, start_date
ORDER BY start_date
LIMIT 10;

SELECT properties.title, properties.cost_per_night, reservations.start_date, avg(rating) as average_rating
FROM reservations
JOIN properties ON reservations.property_id = properties.id
JOIN property_reviews ON properties.id = property_reviews.property_id
WHERE reservations.guest_id = 1
GROUP BY properties.id
ORDER BY reservations.start_date
LIMIT 10;