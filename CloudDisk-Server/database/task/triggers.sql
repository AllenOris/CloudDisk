-- 用户名检查
drop trigger if exists `userCheck`;
delimiter $$
create trigger userCheck
    after insert
    on User
    for each row
begin
    if length(NEW.name) <= 3 then
        begin
            delete from User where NEW.userID = User.userID;
        end;
    end if;
end $$
delimiter ;