CREATE KEYSPACE BASES
WITH REPLICATION={
	'class':'SimpleStrategy',
	'replication_factor': 3
};

use BASES;

#Reporte de operaciones realizadas por un cuentahabiente
CREATE TABLE operaciones_por_cuentahabiente(
	nombre text,
	apellido text,
	cui bigint,
	banco text,
	tipo_cuenta text,
	nombre_destino text,
	apellido_destino text,
	cui_destino bigint,
	banco_destino text,
	tipo_cuenta_destino text,
	monto double,
	fechahora timestamp,
	tipo_operacion text,
	PRIMARY KEY((cui),nombre, apellido,  banco, tipo_cuenta, fechahora, monto, tipo_operacion)
);

COPY operaciones_por_cuentahabiente ( nombre, apellido, cui, banco, tipo_cuenta, nombre_destino, apellido_destino, cui_destino, banco_destino, tipo_cuenta_destino, monto, fechahora, tipo_operacion) 
FROM '/home/ubuntu/BD2carga/operacionesporcuentahabiente1.csv' WITH HEADER=TRUE AND DELIMITER=',';

COPY operaciones_por_cuentahabiente ( nombre, apellido, cui, banco, tipo_cuenta, nombre_destino, apellido_destino, cui_destino, banco_destino, tipo_cuenta_destino, monto, fechahora, tipo_operacion) 
FROM '/home/ubuntu/BD2carga/operacionesporcuentahabiente2.csv' WITH HEADER=TRUE AND DELIMITER=',';

#Reporte de totales de créditos y débitos para una institución financiera
CREATE TABLE creditosdebitos_por_institucion(
	institucion text,
	abreviacion text,
	tipo text,
	monto int,
	fechahora timestamp,
	PRIMARY KEY((institucion), tipo, fechahora, monto)
);

COPY creditosdebitos_por_institucion ( institucion, abreviacion , tipo, monto, fechahora) 
FROM '/home/ubuntu/BD2carga/creditosdebitosbancarios.csv' WITH HEADER=TRUE AND DELIMITER=',';

COPY creditosdebitos_por_institucion ( institucion, abreviacion , tipo, monto, fechahora) 
FROM '/home/ubuntu/BD2carga/creditosdebitosbancarios2.csv' WITH HEADER=TRUE AND DELIMITER=',';

select institucion, sum(monto) from creditosdebitos_por_institucion where institucion = 'Banco Agromercantil' and tipo = 'debito';

#Reporte de cuentahabientes
CREATE TABLE cuentahabientes(
	cui bigint,
	nombre text,
	apellido text,
	email text,
	fecha_registro date,
	genero text,
	institucion text,
	abreviacion text,
	tipo text,
	saldo int,
	PRIMARY KEY((cui), institucion, fecha_registro, tipo)
);

COPY cuentahabientes ( nombre, apellido , cui, email, fecha_registro, genero, institucion, abreviacion, tipo, saldo) 
FROM '/home/ubuntu/BD2carga/cuentahabientes1.csv' WITH HEADER=TRUE AND DELIMITER=',';

COPY cuentahabientes ( nombre, apellido , cui, email, fecha_registro, genero, institucion, abreviacion, tipo, saldo) 
FROM '/home/ubuntu/BD2carga/cuentahabientes2.csv' WITH HEADER=TRUE AND DELIMITER=',';

#Reporte de instituciones bancarias
CREATE TABLE instituciones_bancarias(
	institucion_bancaria text,
	abreviacion text,
	PRIMARY KEY(institucion_bancaria)
);

COPY instituciones_bancarias ( institucion_bancaria, abreviacion) 
FROM '/home/ubuntu/BD2carga/institucionbancaria1.csv' WITH HEADER=TRUE AND DELIMITER=',';

COPY instituciones_bancarias ( institucion_bancaria, abreviacion) 
FROM '/home/ubuntu/BD2carga/institucionbancaria2.csv' WITH HEADER=TRUE AND DELIMITER=',';

#Reporte de movimientos por cuentahabiente por mes
CREATE TABLE operaciones_por_cuentahabiente_por_mes(
nombre text,
apellido text,
cui bigint,
banco text,
tipo_cuenta text,
nombre_destino text,
apellido_destino text,
cui_destino bigint,
banco_destino text,
tipo_cuenta_destino text,
monto double,
fechahora timestamp,
tipo_operacion text,
anio int,
mes int,
dia int,
hora time,
PRIMARY KEY((cui),nombre, apellido, anio, mes, banco, tipo_cuenta, fechahora, monto, tipo_operacion)
);

COPY operaciones_por_cuentahabiente_por_mes( 
nombre, apellido, cui, banco, tipo_cuenta, 
nombre_destino, apellido_destino, cui_destino, banco_destino, tipo_cuenta_destino, 
monto, fechahora, tipo_operacion, anio, mes, dia, hora) 
FROM '/home/ubuntu/BD2carga/operacionesporcuentahabientespormes1.csv' WITH HEADER=TRUE AND DELIMITER=',';

COPY operaciones_por_cuentahabiente_por_mes( 
nombre, apellido, cui, banco, tipo_cuenta, 
nombre_destino, apellido_destino, cui_destino, banco_destino, tipo_cuenta_destino, 
monto, fechahora, tipo_operacion, anio, mes, dia, hora) 
FROM '/home/ubuntu/BD2carga/operacionesporcuentahabientespormes2.csv' WITH HEADER=TRUE AND DELIMITER=',';

CONSULTA 1
select * 
from operaciones_por_cuentahabiente 
where cui = 1909436437 and nombre = 'Hali' and apellido = 'Peebles';

select count(cui)
from operaciones_por_cuentahabiente 
where cui = 1909436437 and nombre = 'Hali' and apellido = 'Peebles';

CONSULTA 2
select institucion, sum(monto) as total_debito from creditosdebitos_por_institucion where institucion = 'Banco Industrial' and tipo = 'debito';

select count(institucion) from creditosdebitos_por_institucion where institucion = 'Banco Industrial' and tipo = 'debito';

select institucion, sum(monto) as total_credito from creditosdebitos_por_institucion where institucion = 'Banco Industrial' and tipo = 'credito';

select count(institucion) from creditosdebitos_por_institucion where institucion = 'Banco Industrial' and tipo = 'credito';

CONSULTA 3

select * from cuentahabientes;
select count(cui) from cuentahabientes;

CONSULTA 4

select * from instituciones_bancarias;
select count(institucion_bancaria) from instituciones_bancarias;

CONSULTA 5
select * 
from operaciones_por_cuentahabiente_por_mes
where cui = 3345353652 and nombre = 'Vassili' and apellido = 'Drowsfield' and mes = 6 and anio = 2020;

select count(cui)
from operaciones_por_cuentahabiente_por_mes
where cui = 3345353652 and nombre = 'Vassili' and apellido = 'Drowsfield' and mes = 6 and anio = 2020;