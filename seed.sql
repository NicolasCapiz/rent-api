-- Insertar PaymentMethod
INSERT INTO PaymentMethod (name) VALUES
  ('efectivo'),
  ('transferencia'),
  ('tarjeta de crédito'),
  ('tarjeta de débito'),
  ('paypal');

-- Insertar Users
INSERT INTO User (email, isRenter, accessToken, firstName, lastName, picture) VALUES
  ('user1@example.com', true, 'token1', 'John', 'Doe', 'https://example.com/johndoe.jpg'),
  ('user2@example.com', false, 'token2', 'Jane', 'Doe', 'https://example.com/janedoe.jpg'),
  ('user3@example.com', true, 'token3', 'Jim', 'Beam', 'https://example.com/jimbeam.jpg'),
  ('user4@example.com', false, 'token4', 'Jack', 'Daniels', 'https://example.com/jackdaniels.jpg'),
  ('user5@example.com', true, 'token5', 'Johnny', 'Walker', 'https://example.com/johnnywalker.jpg');

-- Insertar Locations
INSERT INTO Location (name, address, managerId, renterId) VALUES
  ('Location 1', '123 Main St', 1, 2),
  ('Location 2', '456 Elm St', 2, 3),
  ('Location 3', '789 Oak St', 3, 4),
  ('Location 4', '101 Pine St', 4, 5),
  ('Location 5', '202 Maple St', 5, 1);

-- Insertar Payments
INSERT INTO Payment (locationId, date, amount, paymentMethodId) VALUES
  (1, NOW(), 100.0, 1),
  (2, NOW(), 200.0, 2),
  (3, NOW(), 300.0, 3),
  (4, NOW(), 400.0, 4),
  (5, NOW(), 500.0, 5);

-- Insertar Invoices
INSERT INTO Invoice (locationId, date) VALUES
  (1, NOW()),
  (2, NOW()),
  (3, NOW()),
  (4, NOW()),
  (5, NOW());

-- Insertar PaymentSchedules (opcional)
INSERT INTO PaymentSchedule (locationId, dueDate) VALUES
  (1, DATE_ADD(NOW(), INTERVAL 1 MONTH)),
  (2, DATE_ADD(NOW(), INTERVAL 2 MONTH)),
  (3, DATE_ADD(NOW(), INTERVAL 3 MONTH)),
  (4, DATE_ADD(NOW(), INTERVAL 4 MONTH)),
  (5, DATE_ADD(NOW(), INTERVAL 5 MONTH));

-- Insertar Keys (opcional)
INSERT INTO Key (locationId, issueDate, returnDate) VALUES
  (1, NOW(), DATE_ADD(NOW(), INTERVAL 1 YEAR)),
  (2, NOW(), DATE_ADD(NOW(), INTERVAL 2 YEARS)),
  (3, NOW(), DATE_ADD(NOW(), INTERVAL 3 YEARS)),
  (4, NOW(), DATE_ADD(NOW(), INTERVAL 4 YEARS)),
  (5, NOW(), DATE_ADD(NOW(), INTERVAL 5 YEARS));

-- Insertar Contracts (opcional)
INSERT INTO Contract (locationId, startDate, endDate, renewed, cancelled) VALUES
  (1, NOW(), DATE_ADD(NOW(), INTERVAL 1 YEAR), false, false),
  (2, NOW(), DATE_ADD(NOW(), INTERVAL 2 YEARS), true, false),
  (3, NOW(), DATE_ADD(NOW(), INTERVAL 3 YEARS), false, true),
  (4, NOW(), DATE_ADD(NOW(), INTERVAL 4 YEARS), true, false),
  (5, NOW(), DATE_ADD(NOW(), INTERVAL 5 YEARS), false, false);

-- Insertar PriceAdjustments (opcional)
INSERT INTO PriceAdjustment (date, price, type) VALUES
  (NOW(), 100.0, 'incremento'),
  (DATE_ADD(NOW(), INTERVAL 1 MONTH), 200.0, 'decremento'),
  (DATE_ADD(NOW(), INTERVAL 2 MONTH), 300.0, 'incremento'),
  (DATE_ADD(NOW(), INTERVAL 3 MONTH), 400.0, 'decremento'),
  (DATE_ADD(NOW(), INTERVAL 4 MONTH), 500.0, 'incremento');
