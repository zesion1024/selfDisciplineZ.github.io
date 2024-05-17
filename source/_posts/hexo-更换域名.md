---
title: hexo_更换域名
date: 2022-04-15 22:07:45
tags: [hexo]
categories: 
- hexo
---

### 第一步：github 设置

![](http://img.zesion.top/picture/202204152224650.jpeg)



### 第二步：进入域名服务商控制台解析域名

 ![](http://img.zesion.top/picture/202204152225592.jpg)

### 第三步：点击添加两个录集，一个A类型，一个CNAME类型。

![](http://img.zesion.top/picture/202204152226669.jpg)

### 第四步：添加一个CNAME类型录集主机记录填www，值填 github 仓库名其余默认。

![](http://img.zesion.top/picture/202204152227005.jpg)

### 第五步：添加一个A类型的录集主机记录不用填，值填github ipv4地址（ping 仓库名.github.io可查看ip地址）其余默认。

![](http://img.zesion.top/picture/202204152228591.jpg)

### 第六步：修改_config文件里的url代码

![](http://img.zesion.top/picture/202204152228956.jpg)

### 如果无法出现问题则新建以下文件帮助解析：找到source文件夹在里面创建一个CNAME.txt文件并删除txt后缀

![](http://img.zesion.top/picture/202204152228032.jpg)

![](http://img.zesion.top/picture/202204152229013.jpg)