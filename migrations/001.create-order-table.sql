CREATE TABLE ordertables(
    username CHAR,
   order_id INTEGER PRIMARY KEY AUTOINCREMENT,
   order_status        TEXT       NOT NULL,
   amount number,
   payment         CHAR(50)
);

INSERT INTO ordertables (username,order_status,amount,payment)
VALUES ('pay''collect',49.00,'paid' );
