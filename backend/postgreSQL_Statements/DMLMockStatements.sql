-- Mock data for Restaurant
INSERT INTO Restaurant (name, opening_hour, closing_hour, location, rating)
VALUES
('Green Delight', '07:00', '19:00', '123 Veggie Road, Plantville', 4.2),
('Noodles and Company', '10:00', '23:00', '456 Pasta Street, Carb City', 4.6),
('Canned Cuisine', '09:00', '21:00', '789 Tin Avenue, Can Town', 4.1);

-- Mock data for FoodItem
INSERT INTO FoodItem (name, type, quantity)
VALUES
('Zucchini Pasta', 'Pasta', 30),
('Garden Salad', 'Vegetables', 20),
('Baked Beans', 'Canned Goods', 50),
('Tomato Soup', 'Canned Goods', 15),
('Spinach Quiche', 'Vegetables', 10);

-- Mock data for Orders
INSERT INTO Orders (date)
VALUES
('2024-01-20'),
('2024-01-21'),
('2024-01-22');

-- Mock data for FoodBank
INSERT INTO FoodBank (name, location)
VALUES
('Share The Meal Bank', '321 Generous Way, Kindness City'),
('Food for Tomorrow', '654 Future Street, Hope Town');

-- Mock data for Rest_Food
INSERT INTO Rest_Food (restaurant_id, food_id)
VALUES
(1, 2),
(2, 1),
(3, 3),
(3, 4);

-- Mock data for Bank_Food
INSERT INTO Bank_Food (fb_id, food_id)
VALUES
(1, 5),
(2, 3),
(2, 4);

-- Mock data for Order_Food
INSERT INTO Order_Food (order_id, food_id)
VALUES
(1, 2),
(2, 1),
(3, 3);
