-- 视图：待审核的文件
create or replace view checkView(userID, userName, fileID, uploadTime, fileName, size, count, valid, path)
AS
SELECT User.userID,
       User.name userName,
       File.fileID,
       File.uploadTime,
       File.name fileName,
       File.size,
       File.count,
       File.valid,
       File.path
from User,
     File
where User.userID = File.userID
  and User.permission = 0
  and File.valid = 0;
