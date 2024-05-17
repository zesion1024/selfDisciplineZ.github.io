---
title: centos安装mysql (centos7)
date: 2024-05-05 22:47:36
tags: [java centos]
categories:
- java
---

1. mysql 官网下载对应版本的压缩包，centos 可以选择 redhat 版本

![image-20240505225107001](http://img.zesion.top/picture/image-20240505225107001.png)

![image-20240505225251208](http://img.zesion.top/picture/image-20240505225251208.png)

2. 将下载好的压缩包上传到服务器的根目录下

3. centos 系统可能默认存在 mariadb ，该服务与MySQL冲突，需要卸载

   ```
   rpm -qa|grep mariadb		// 检查是否存在该服务
   rpm -e --nodeps mariadb-libs  // 卸载
   ```

4. 解压上传的MySQL压缩包

   ```
   tar -xvf mysql-8.0.28-1.el7.x86_64.rpm-bundle.tar
   ```

5. 依次执行一下命令安装MySQL

   ```
   rpm -ivh mysql-community-common-8.0.28-1.el7.x86_64.rpm
   rpm -ivh mysql-community-client-plugins-8.0.28-1.el7.x86_64.rpm
   rpm -ivh mysql-community-libs-8.0.28-1.el7.x86_64.rpm
   rpm -ivh mysql-community-client-8.0.28-1.el7.x86_64.rpm
   rpm -ivh mysql-community-icu-data-files-8.0.28-1.el7.x86_64.rpm
   rpm -ivh mysql-community-server-8.0.28-1.el7.x86_64.rpm
   ```

6. 初始化 mysql

   ```
   mysqld --initialize --console
   ```

7. 启动mysql

   ```
   chown mysql:mysql -R /var/lib/mysql
   systemctl start mysqld
   ```

8. 查看临时密码 (@localhost: 后面的一串字符为临时密码) 

   ```
   cat /var/log/mysqld.log|grep localhost
   ```

9. 登录mysql输入密码

   ```
   mysql -uroot -p
   ```

10. 修改密码

    ```
    alter user 'root'@'localhost' identified by '输入您的密码';
    ```