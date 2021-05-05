CREATE KEYSPACE PROYECTO 
WITH REPLICATION={
	'class':'SimpleStrategy',
	'replication_factor': 3
};

use PROYECTO;

#Reporte de operaciones realizadas por un cuentahabiente
CREATE TABLE PROYECTO.operaciones_por_cuentahabiente(
	id_operacion int,
	origen text,
	destino text,
	tipooperacion text,
	idcuentahabiente bigint,
	nombrecuentahabiente text,
	apellidocuentahabiente text,
	nitcuentahabiente text,
	dpicuentahabiente text,
	monto double,
	fechahora timestamp,
	PRIMARY KEY(idcuentahabiente, id_operacion)
) WITH CLUSTERING ORDER BY (id_operacion DESC);

#Reporte de totales de créditos y débitos para una institución financiera
CREATE TABLE PROYECTO.creditosdebitos_por_institucion(
	idfinanciera bigint,
	nombrefinanciera text,
	tipooperacion text,
	monto double,
	fechahora timestamp,
	id_operacion bigint,
	PRIMARY KEY((idfinanciera, tipooperacion), nombrefinanciera, id_operacion)
) WITH CLUSTERING ORDER BY (id_operacion DESC);

#Reporte de cuentahabientes
CREATE TABLE PROYECTO.cuentahabientes(
	id bigint,
	nombre text,
	apellido text,
	dpi text,
	nit text,
	fechanacimiento date,
	PRIMARY KEY(id, nombre, apellido)
);

#Reporte de instituciones bancarias
CREATE TABLE PROYECTO.instituciones_bancarias(
	id bigint,
	nombre text,
	tipo text,
	direccion text,
	nit text,
	PRIMARY KEY(id, nombre)
);

#Reporte de movimientos por cuentahabiente por mes
CREATE TABLE PROYECTO.operaciones_por_cuentahabiente_por_mes(
	idcuentahabiente bigint,
	nombrecuentahabiente text,
	apellidocuentahabiente text,
	nitcuentahabiente text,
	dpicuentahabiente text,
	dia int,
	mes int,
	año int,
	hora int,
	minuto int,
	segundo int,
	id_operacion int,
	origen text,
	destino text,
	tipooperacion text,
	monto double,
	PRIMARY KEY((idcuentahabiente, mes), id_operacion, nombrecuentahabiente, apellidocuentahabiente)
) WITH CLUSTERING ORDER BY (id_operacion DESC);

#IMPORTAR DATOS
COPY PROYECTO.operaciones_por_cuentahabiente ( id_operacion, origen, destino, tipooperacion, idcuentahabiente, nombrecuentahabiente, apellidocuentahabiente, nitcuentahabiente, dpicuentahabiente, monto, fechahora ) 
FROM 'files/entrada1.csv' WITH HEADER=TRUE;

COPY PROYECTO.creditosdebitos_por_institucion ( idfinanciera, nombrefinanciera, tipooperacion, monto, fechahora, id_operacion) 
FROM '/files/entrada2.csv' WITH HEADER=TRUE;

COPY PROYECTO.cuentahabientes ( id, nombre, apellido, dpi, nit, fechanacimiento ) 
FROM '/files/entrada3.csv' WITH HEADER=TRUE;

COPY PROYECTO.instituciones_bancarias ( id, nombre, tipo, direccion, nit) 
FROM '/files/entrada4.csv' WITH HEADER=TRUE;

COPY PROYECTO.operaciones_por_cuentahabiente_por_mes ( idcuentahabiente, nombrecuentahabiente, apellidocuentahabiente, nitcuentahabiente, dpicuentahabiente, dia, mes, año, hora, minuto, segundo, id_operacion, origen, destino, tipooperacion, monto) 
FROM '/files/entrada5.csv' WITH HEADER=TRUE;