/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     6/10/2019 7:41:52 PM                         */
/*==============================================================*/


drop table if exists Download;

drop table if exists File;

drop table if exists User;

/*==============================================================*/
/* Table: File                                                  */
/*==============================================================*/
create table File
(
    fileID     int not null auto_increment,
    userID     int not null,
    uploadTime datetime,
    name       varchar(256) not null,
    size       bigint not null,
    path       varchar(256) not null,
    count      int not null,
    valid      int not null,
    primary key (fileID)
);

/*==============================================================*/
/* Table: User                                                  */
/*==============================================================*/
create table User
(
    userID     int         not null auto_increment,
    name       varchar(50) not null,
    password   varchar(50) not null,
    permission int         not null,
    primary key (userID)
);

/*==============================================================*/
/* Table: Download                                              */
/*==============================================================*/
create table Download
(
    userID int not null,
    fileID int not null,
    time   datetime,
    primary key (userID, fileID, time)
);

alter table Download
    add constraint FK_Download foreign key (userID)
        references User (userID) on delete restrict on update restrict;

alter table Download
    add constraint FK_Download2 foreign key (fileID)
        references File (fileID) on delete restrict on update restrict;

alter table File
    add constraint FK_Upload foreign key (userID)
        references User (userID) on delete restrict on update restrict;

alter table File default character set utf8;
alter table File change name name varchar(256) character set utf8;