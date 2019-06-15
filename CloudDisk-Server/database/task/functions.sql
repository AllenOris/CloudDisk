-- 下载文件存储过程
drop PROCEDURE if EXISTS download;
DELIMITER $$
CREATE PROCEDURE download(usrID int, filID int, out path varchar(256))
BEGIN
    declare id int;
    declare permission int;
    set id = (select File.userID from File where File.fileID = filID);
    set permission = (select User.permission from User where User.userID = usrID);
    if id <=> usrID or permission > 0 then
        begin
            insert into Download (userID, fileID, time) VALUES (usrID, filID, now());
            update File,User
            set count=count + 1
            where File.fileID = filID
              and File.userID = User.userID
              and User.name != 'trash';
            set path = (select File.path from File where File.fileID = filID);
        end;
    else
        SIGNAL SQLSTATE '12321'
            SET MESSAGE_TEXT = 'You have no authority to download the file';
    end if;
END $$
DELIMITER ;
