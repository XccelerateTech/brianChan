CREATE TABLE citrus (
    id SERIAL primary key,
    name VARCHAR(255) not null,
    color VARCHAR(255),
    taste VARCHAR(255)
);

INSERT INTO citrus (name, color, taste) VALUES ('lemon', 'yellow', 'sour');
INSERT INTO citrus (name, color, taste) VALUES ('orange', 'orange', 'juicy');
INSERT INTO citrus (name, color, taste) VALUES ('grapefruit', 'orange', 'bitter');
INSERT INTO citrus (name, color, taste) VALUES ('lime', 'green', 'sour');

CREATE TABLE stock (
    id SERIAL primary key,
    quantity integer,
    price integer,
    citrus_id integer
);

INSERT INTO stock (quantity, price, citrus_id) VALUES (33,25,1);
INSERT INTO stock (quantity, price, citrus_id) VALUES (50,15,2);
INSERT INTO stock (quantity, price, citrus_id) VALUES (10,35,3);
INSERT INTO stock (quantity, price, citrus_id) VALUES (0,20,4);

SELECT citrus.color AS citrus_color, stock.quantity AS stock_quantity
FROM citrus
JOIN stock
on citrus.id = stock.citrus_id;


====================== A =========================

SELECT quantity,name
FROM citrus
FULL OUTER JOIN stock  
ON citrus.id = stock.citrus_id
WHERE color = 'orange';

====================== B ==========================

SELECT *
FROM citrus
FULL OUTER JOIN stock
ON citrus.id = stock.citrus_id;