INSERT INTO users(name, email, password) VALUES
('Camron Naderi', 'camronnaderi57@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Julian Comsia', 'jcomsia@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Amanda Crane', 'amandanicolecrane@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code) VALUES 
(1, 'Cozy House', 'description', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg', 100, 1, 1, 1, 'USA', 'Street 1', 'City 1', 'State 1', '10000'),
(2, 'Spacious Apartment', 'description', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg', 200, 2, 2, 2, 'Canada', 'Street 2', 'City 2', 'Province 2', '20000'),
(3, 'Modern Condo', 'description', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg', 300, 3, 3, 3, 'UK', 'Street 3', 'City 3', 'Province 3', '30000');

INSERT INTO reservations (start_date, end_date, property_id, guest_id) VALUES 
('2023-07-10', '2023-07-20', 1, 2),
('2023-08-01', '2023-08-10', 2, 3),
('2023-09-01', '2023-09-20', 3, 1);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message) VALUES 
(2, 1, 1, 5, 'Great stay!'),
(3, 2, 2, 4, 'Good place.'),
(1, 3, 3, 5, 'Loved it!');
