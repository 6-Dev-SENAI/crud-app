-- drop database crud_db;

create database crud_db;

use crud_db;

create table usuario_tb
(
    id_usuario int not null
    auto_increment primary key,
    nm_usuario varchar(100) not null,
    nr_idade int not null,
    ds_sexo char(1) not null
);
