-- Deshabilitar restricciones de clave foránea
SET FOREIGN_KEY_CHECKS = 0;

-- Limpiar todas las tablas
TRUNCATE TABLE AdjustmentLocation;
TRUNCATE TABLE PriceAdjustment;
TRUNCATE TABLE LeaseContract;
TRUNCATE TABLE PaymentSchedule;
TRUNCATE TABLE Invoice;
TRUNCATE TABLE Payment;
TRUNCATE TABLE PaymentRecord;
TRUNCATE TABLE RentHistory;
TRUNCATE TABLE Location;
TRUNCATE TABLE PaymentMethod;
TRUNCATE TABLE User;

-- Volver a habilitar restricciones de clave foránea
SET FOREIGN_KEY_CHECKS = 1;

-- Insertar Usuarios (5)
INSERT INTO User (id, email, dni, isRenter, accessToken, firstName, lastName, picture, password, CUST_ID, createdAt, updatedAt) VALUES
(1, 'homer@springfield.com', '12345678', false, NULL, 'Homer', 'Simpson', 'homer.png', 'test123', NULL, NOW(), NOW()),
(2, 'marge@springfield.com', '23456789', true, NULL, 'Marge', 'Simpson', 'marge.png', 'test123', 1, NOW(), NOW()),
(3, 'bart@springfield.com', '34567890', true, NULL, 'Bart', 'Simpson', 'bart.png', 'test123', 1, NOW(), NOW()),
(4, 'lisa@springfield.com', '45678901', true, NULL, 'Lisa', 'Simpson', 'lisa.png', 'test123', 1, NOW(), NOW()),
(5, 'burns@springfield.com', '56789012', true, NULL, 'Montgomery', 'Burns', 'burns.png', 'test123', 1, NOW(), NOW());

-- Insertar Métodos de Pago (3)
INSERT INTO PaymentMethod (id, name) VALUES
(1, 'Efectivo'),
(2, 'Tarjeta de Crédito'),
(3, 'Transferencia Bancaria');

-- Insertar Locales (10) - Asumimos que los renterId corresponden a algún usuario
INSERT INTO Location (id, name, address, renterId, CUST_ID, createdAt, updatedAt) VALUES
(1, 'Tienda Kwik-E-Mart', 'Av. Principal, Springfield', 1, 1, NOW(), NOW()),
(2, 'Bar de Moe', 'Callejón de Moe, Springfield', 2, 1, NOW(), NOW()),
(3, 'Planta Nuclear', 'Sector 7G, Springfield', 5, 1, NOW(), NOW()),
(4, 'Escuela Primaria', 'Calle del Saber, Springfield', 3, 1, NOW(), NOW()),
(5, 'Casa de Los Simpson', '742 Evergreen Terrace', 1, 1, NOW(), NOW()),
(6, 'Mansión de Burns', 'Colinas de Springfield', 5, 1, NOW(), NOW()),
(7, 'Mini Golf', 'Parque de Springfield', 4, 1, NOW(), NOW()),
(8, 'Tienda de Comics', 'Calle del Comercio, Springfield', 2, 1, NOW(), NOW()),
(9, 'Cine Azteca', 'Centro de Springfield', 3, 1, NOW(), NOW()),
(10, 'Restaurante Luigi', 'Zona Gastronómica, Springfield', 4, 1, NOW(), NOW());

-- Insertar Historial de Renta (algunos registros)
INSERT INTO RentHistory (locationId, month, year, rentAmount, CUST_ID, createdAt) VALUES
(1, 1, 2024, 1000, 1, NOW()),
(2, 1, 2024, 500, 1, NOW()),
(3, 1, 2024, 10000, 1, NOW()),
(4, 1, 2024, 800, 1, NOW()),
(5, 1, 2024, 1500, 1, NOW());

-- Insertar Registros de Pago (algunos registros)
INSERT INTO PaymentRecord (locationId, month, year,  totalRent, totalPaid, remainingAmount, CUST_ID)
VALUES
  -- Mes 1
  (1, 1, 2025,  1000, 0, 1000, 1),
  (2, 1, 2025,  1000, 0, 1000, 1),
  (3, 1, 2025,  1000, 0, 1000, 1),
  (4, 1, 2025,  1000, 0, 1000, 1),
  (5, 1, 2025,  1000, 0, 1000, 1),
  (6, 1, 2025,  1000, 0, 1000, 1),
  (7, 1, 2025,  1000, 0, 1000, 1),
  (8, 1, 2025,  1000, 0, 1000, 1),
  (9, 1, 2025,  1000, 0, 1000, 1),
  (10, 1, 2025,  1000, 0, 1000, 1),
  (11, 1, 2025,  1000, 0, 1000, 1),
  -- Mes 2
  (1, 2, 2025,  1000, 0, 1000, 1),
  (2, 2, 2025,  1000, 0, 1000, 1),
  (3, 2, 2025,  1000, 0, 1000, 1),
  (4, 2, 2025,  1000, 0, 1000, 1),
  (5, 2, 2025,  1000, 0, 1000, 1),
  (6, 2, 2025,  1000, 0, 1000, 1),
  (7, 2, 2025,  1000, 0, 1000, 1),
  (8, 2, 2025,  1000, 0, 1000, 1),
  (9, 2, 2025,  1000, 0, 1000, 1),
  (10, 2, 2025,  1000, 0, 1000, 1),
  (11, 2, 2025,  1000, 0, 1000, 1),
  -- Mes 3
  (1, 3, 2025,  1000, 0, 1000, 1),
  (2, 3, 2025,  1000, 0, 1000, 1),
  (3, 3, 2025,  1000, 0, 1000, 1),
  (4, 3, 2025,  1000, 0, 1000, 1),
  (5, 3, 2025,  1000, 0, 1000, 1),
  (6, 3, 2025,  1000, 0, 1000, 1),
  (7, 3, 2025,  1000, 0, 1000, 1),
  (8, 3, 2025,  1000, 0, 1000, 1),
  (9, 3, 2025,  1000, 0, 1000, 1),
  (10, 3, 2025,  1000, 0, 1000, 1),
  (11, 3, 2025,  1000, 0, 1000, 1);



INSERT INTO Payment (locationId, month, year, date, amount, paymentMethodId, paymentRecordId, CUST_ID) VALUES
(1, 1, 2024, NOW(), 200, 1, 1, 1),
(2, 1, 2024, NOW(), 100, 2, 2, 1),
(3, 1, 2024, NOW(), 5000, 3, 3, 1);

-- Insertar Contratos (3 contratos de ejemplo)
-- Para estos contratos, asignamos el inquilino (renterId) al usuario con id=2.
INSERT INTO LeaseContract (id, locationId, startDate, endDate, rentAmount, active, cancelled, createdAt, renterId, CUST_ID) VALUES
(1, 1, '2023-01-01', '2024-12-31', 1000, false, false, NOW(), 2, 1),
(2, 2, '2022-06-01', '2025-06-01', 500, true, false, NOW(), 2, 1),
(3, 3, '2020-01-01', '2030-01-01', 10000, true, false, NOW(), 2, 1);

-- Insertar Ajustes de Precio (3)
INSERT INTO PriceAdjustment (id, amount, type, period, applyToAll, status, CUST_ID, createdAt, updatedAt) VALUES
(1, 100, 1, 1, true, 1, 1, NOW(), NOW()),
(2, 50, 2, 2, false, 1, 1, NOW(), NOW()),
(3, 75, 1, 4, false, 1, 1, NOW(), NOW());

-- Insertar Claves (2)
INSERT INTO `Key` (id, locationId, issueDate, returnDate, CUST_ID) VALUES
(1, 1, '2024-01-01', NULL, 1),
(2, 2, '2024-02-01', NULL, 1);
