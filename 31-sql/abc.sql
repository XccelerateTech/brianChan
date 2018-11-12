================== A ====================
CREATE TABLE stock (
    id SERIAL primary key,
    name VARCHAR(255) not null,
    descripion VARCHAR(255),
    quantity integer,
    price decimal
);

================== B ====================

DROP TABLE stock;

================== C ====================

CREATE TABLE employee (
    employee_id SERIAL primary key,
    first_name VARCHAR(255) not null,
    last_name VARCHAR(255) not null,
    salary integer,
    contract_length integer
);

INSERT INTO employee(first_name,last_name,salary,contract_length) VALUES ('Steven','King',10000,3);
INSERT INTO employee(first_name,last_name,salary,contract_length) VALUES ('Neena','Kochhar',8000,2);
INSERT INTO employee(first_name,last_name,salary,contract_length) VALUES ('David','Austin',12000,2);
INSERT INTO employee(first_name,last_name,salary,contract_length) VALUES ('Nancy','Greenberg',3000,1);

1)SELECT first_name,last_name FROM employee WHERE salary > 5000 AND salary < 11000;
2)SELECT * FROM employee WHERE contract_length < 2;
3)INSERT INTO employee(first_name,last_name,salary,contract_length) VALUES ('John','Doe',20000,99);
INSERT INTO employee(first_name,last_name,salary,contract_length) VALUES ('Calvin','Kelvin',50000,3);
4)UPDATE employee SET contract_length = 2, salary = 8000 WHERE first_name = 'Nancy';
5)SELECT * FROM employee ORDER BY salary DESC;