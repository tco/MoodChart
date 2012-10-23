create table team (
	id int unsigned not null auto_increment, 
	name varchar(255) not null,
	primary key(id)
) default charset utf8;

create table person (
	id int unsigned not null auto_increment,
	name varchar(255) not null,
	email varchar(255) not null,
	password varchar(64) not null, 
	primary key(id)
) default charset utf8;

create table team_person (
	tid unsigned not null,
	pid unsigned not null,
	foreign key(tid) referenced team(id) on delete restrict,
	foreign key(pid) referenced person(id) on delete restrict,
)

create table person_mood (
	id int unsigned not null auto_increment,
	time datetime not null,
	mood int unsigned not null,
	pid int unsigned not null,
	primary key(id),
	foreign key(pid) references person(id) on delete restrict
) default charset utf8;
