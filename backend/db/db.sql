create table team (
	id int unsigned not null auto_increment, 
	name varchar(255),
	primary key(id)
) default charset UTF-8;

create table person (
	id int unsigned not null auto_increment,
	name varchar(255),
	email varchar(255),
	password varchar(256), 
	primary key(id)
)

create table person_mood (
	id int unsigned not null auto_increment,
	time datetime,
	mood int,
	pid int,
	primary key(id),
	foreign key(pid) references person(id) on delete restrict
)
