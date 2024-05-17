---
title: 给hexo博客网页配置ssl
date: 2022-02-22 20:50:56
tags: [hexo]
categories: 
- hexo
sticky: 97
---
### 查看 nginx 是否安装 ssl 模块
1. 首先开启服务器443端口
   ![](http://img.zesion.top/picture/202203112215560.png)
2. 查看 nginx 有没有安装 ssl 模块，基于nginx版本不同所以nginx文件目录也会有所不同
   1. 找到nginx的sbin目录
   	`/usr/local/nginx/sbin/`
   2. 如果没有则在此目录下查看：
   	`/usr/sbin/`
3. 查看有没有安装ssl模块（基于实际sbin目录输入命令）
    `/usr/sbin/nginx -V`
    出现下图则是已经安装过ssl模块
    ![](http://img.zesion.top/picture/202203112215090.png)
### 安装 ssl 模块
1. 去官网找到目前所使用的 nginx 版本下载下来，进入/usr/local路径 使用指令
	`wget 下载链接`
2. 解压
    `tar -xvf 压缩包全名`
3. 进入解压后的文件夹路径执行指令
    `./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module --with-file-aio --with-http_realip_module`
   之后执行
   `make` 
4. 报错的话执行下面的，不报错就算了：
	`yum -y install openssl openssl-devel`
5. 继续执行下面的指令。将nginx启动文件覆盖。第一条指令是备份
   1. 备份：
		`cp /usr/local/nginx/sbin/nginx /usr/local/nginx/sbin/nginx.bak`
   1. 替换、覆盖：
		`cp objs/nginx /usr/local/nginx/sbin/nginx`
### 修改 nginx.conf 文件使 ssl 生效
1. 新建目录etc/ssl,并将下载到本地的 ssl 文件上传到此目录
	`mkdir etc/ssl`
2. 编辑nginx的配置文件
   `vim etc/nginx/nginx.conf`


~~~
http{
    #http节点中可以添加多个server节点
    server{
        #监听443端口
        listen 443;
        server_name 你的域名;
        ssl on;
        ssl_certificate /etc/ssl/1.crt.pem; #地址修改为pem文件地址
        ssl_certificate_key /etc/ssl/1.key; #地址修改为key文件地址
        ssl_session_timeout 5m;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
        ssl_prefer_server_ciphers on;
        #这是我的主页访问地址，因为使用的是静态的html网页，所以直接使用location就可以完成了。
        location / {
                #文件夹
                root /usr/local/service/ROOT;
                #主页文件
                index index.html;
        }
    }
    server{
        listen 80;
        server_name 你的域名;
        rewrite ^/(.*)$ https://你的域名:443/$1 permanent;
    }
}  
~~~

1. 每次更改配置文件都需要重启nginx服务
		nginx -s reload

