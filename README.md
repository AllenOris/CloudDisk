# README

> Date：2019-6-15
>
> github：<https://github.com/AllenOris/CloudDisk>

## 项目描述

文件管理系统（云盘）

## 环境

数据库：MySQL 5.7

前端框架：Vue.js

后端框架：Node.js+Express

Node版本：10.16.0

NPM版本：6.9.0

## 文件目录

* CouldDisk-Client: 前端工程
* CloudDisk-Server: 后端工程

## 项目构建

* 数据库：

数据库配置文件:`./CloudDisk-Server/config/conf_mysql.js`

```javascript
module.exports = {
    host: 'localhost',
    port: 3306,
    user: 'root', //set your mysql username
    password: '', //set your mysql password
    database: '', //set your database 
    multipleStatements: true
};
```

表的建立与触发器、存储过程、视图：

1. 表的建立：`./CloudDisk-Server/database/task/init.sql`

2. 触发器：`./CloudDisk-Server/database/task/triggers.sql`
3. 存储过程：`./CloudDisk-Server/database/task/functions.sql`
4. 视图：`./CloudDisk-Server/database/task/views.sql`

* 后端

配置文件上传的存储路径：`./CloudDisk-Server/config/conf_path.js`

```javascript
module.exports = {
    FILE_PATH: '/'
//  set your file path where you want to save uploading files, like '/root/web/upload/'
};
```

开启服务：

```bash	
cd CloudDisk-Server
npm install
node bin/www
```

* 前端

开启服务：

```
cd CloudDisk-Client
---开发模式
npm run serve
---生产模式
npm run build 
```

生产模式打包后的文件在`./CloudDisk-Client/dist`

## 示例图片

![1560610654814](https://github.com/AllenOris/CloudDisk/blob/master/CloudDisk-Client/src/assets/1.png?raw=true)

![1560610654814](https://github.com/AllenOris/CloudDisk/blob/master/CloudDisk-Client/src/assets/2.png?raw=true)

![1560610654814](https://github.com/AllenOris/CloudDisk/blob/master/CloudDisk-Client/src/assets/3.png?raw=true)

![1560610654814](https://github.com/AllenOris/CloudDisk/blob/master/CloudDisk-Client/src/assets/4.png?raw=true)