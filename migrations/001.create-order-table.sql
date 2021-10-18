create table orderTable (
	order_id integer primary key,
	order_status text not null,
    payment text not null
);

insert into orderTable(order_id,order_status, payment )
 values (2,'payment', '100');