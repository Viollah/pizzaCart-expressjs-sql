CREATE TABLE ordertables(
    username CHAR,
   order_id INTEGER PRIMARY KEY AUTOINCREMENT,
   order_status        TEXT       NOT NULL,
   amount number,
   payment         CHAR(50)
);

-- INSERT INTO ordertables (username,order_status,amount,payment)
-- VALUES ('vee','collect',49.00,'paid' );
-- INSERT INTO ordertables (username,order_status,amount,payment)
-- VALUES ('pay','collect',89.00,'paid' );
-- INSERT INTO ordertables (username,order_status,amount,payment)
-- VALUES ('pay','collect',129.00,'paid' );


