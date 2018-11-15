
=======prepare the tables==================

INSERT INTO citrus (name, color, taste) VALUES ('orange', 'orange', 'sweet'), ('lemon', 'yellow', 'sour'), ('lime', 'green', 'sour'), ('grapefruit', 'orange', 'bitter');

INSERT INTO stock (quantity, price, citrus_id) VALUES (200, 10,(SELECT id from citrus where name = 'orange')), (200, 10,(SELECT id from citrus where name = 'lemon')), (200, 10,(SELECT id from citrus where name = 'lime')), (200, 10,(SELECT id from citrus where name = 'grapefruit')),


-- buy 20 lemons 
BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
UPDATE stock 
SET quantity = quantity + 20 
FROM citrus
WHERE stock.citrus_id = citrus.id AND name ='lemon';
COMMIT;

-- buy 40 orange
BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
UPDATE stock 
SET quantity = quantity + 40 
FROM citrus
WHERE stock.citrus_id = citrus.id AND name ='orange';
COMMIT;

-- sell 20 orange
BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
UPDATE stock 
SET quantity = quantity - 20 
FROM citrus
WHERE stock.citrus_id = citrus.id AND name ='orange';
COMMIT;

-- buy 40 lime
BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
UPDATE stock 
SET quantity = quantity + 40 
FROM citrus
WHERE stock.citrus_id = citrus.id AND name ='lime';
COMMIT;

-- sell 30 lemon
BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
UPDATE stock 
SET quantity = quantity -30 
FROM citrus
WHERE stock.citrus_id = citrus.id AND name ='lemon';
COMMIT;

-- sell 20 lime
BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
UPDATE stock 
SET quantity = quantity - 20 
FROM citrus
WHERE stock.citrus_id = citrus.id AND name ='lime';
COMMIT;

-- buy 40 grapefruit
BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
UPDATE stock 
SET quantity = quantity + 40 
FROM citrus
WHERE stock.citrus_id = citrus.id AND name ='grapefruit';
COMMIT;

--sell 20 grapefruit
BEGIN;
SET TRANSACTION ISOLATION LEVEL Serializable;
UPDATE stock 
SET quantity = quantity - 20
FROM citrus
WHERE stock.citrus_id = citrus.id AND name ='grapefruit';
COMMIT;