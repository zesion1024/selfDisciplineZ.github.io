---
title: 将vue项目部署到nginx
date: 2022-09-17 16:14:36
tags: [vue]
categories:
- vue
---

### 开启云服务器所需端口

![](http://img.zesion.top/picture/202209171618751.png)

1. `telnet IP 端口号` ,测试端口号有没有打开，如果没有则考虑是否是服务器防火墙问题

   1. 查看防火墙信息

      ```
      systemctl start firewalld			# 开启防火墙
      firewall-cmd --list-all				# 查询列表信息  ports : 后面显示的为打开的端口
      ```

      ![](http://img.zesion.top/picture/202209171625277.png)

   3. 若是ports为空，则自行添加所需要开放的端口（ 例如添加8080端口 ）

      1. ```
         # 添加需要开放的端口号
         firewall-cmd --zone=public --add-port=8080/tcp --permanent
         ```

         参数说明：

         > –zone # 作用域
   > –add-port=80/tcp # 添加端口，格式为：端口/通讯协议
         > –permanent # 永久生效，没有此参数重启后失效
         >
         > 其它操作：
         > 添加多个端口:
         > firewall-cmd --zone=public --add-port=80-90/tcp --permanent
         > 删除
         > firewall-cmd --zone=public --remove-port=80/tcp --permanent
   
      2. 重启防火墙
      
         `firewall-cmd --list-all		# 查询防火墙所有信息`
   
      *** 如果上面所有操作都做了还是无法访问端口号，请删除服务器安全组重新创建即可
   
      

### 进入到nginx.conf进行配置

1. 将vue打包生成的dist文件上传到服务器 

   ![](http://img.zesion.top/picture/202209171632071.png)

2. 重启 nginx 基本完成

   1. `nginx -s reload`

3. > 如果出现 500 状态码则将 dist 更换目录如 var (亲测放root下面会500)

