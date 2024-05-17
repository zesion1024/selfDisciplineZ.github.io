---
title: nuxt 部署到云服务器
date: 2023-07-06 11:18:12
tags: [Nuxt3]
categories: 
- Nuxt3
---

1. 开启云服务器端口或者二级域名
2. 将打包后的 .output 文件上传至服务器
3. 在服务器全局安装 pm2 插件使 nuxt 项目在关闭后可以自动重启

```
npm i -g pm2
```

4. 在nuxt 根目录下创建一个 pm2 的配置文件 ecosystem.config.js  

```
// ecosystem.config.js  
module.exports = {
  apps: [
    {
      name: "obase",
      exec_mode: "cluster",
      instances: "1", // Or a number of instances
      script: "./.output/server/index.mjs",
      args: "start",
      env: {
          PORT: 3001,
          HOST: "0.0.0.0"
      }
    },
  ],
};

```

![image-20230706112746753](http://img.zesion.top/picture/image-20230706112746753.png)

启动 pm2 

``` 
pm2 start
```

5. nginx 代理

> 如果是通过宝塔安装的 nginx 可以通过以下路径进行配置 

![image-20230706133434906](http://img.zesion.top/picture/image-20230706133434906.png)

```	server
// .conf 配置文件内容
server
{
    listen 80;
    server_name obase.zesion.top;
    location / {
        proxy_pass http://127.0.0.1:3001;	// 端口号与 ecosystem.config.js PORT 配置项相同
    }
}
```

> 重启nginx 即可使用域名访问
>
> 至此 nuxt3 部署全部完成

1. 启动 pm2 

   ```
   pm2 start
   ```

2. 停止 pm2

   ```
   pm2 stop 项目名或id
   ```

3. 删除  pm2 项目

   ```
   pm2 delete 项目名或id
   ```

4. 查看  pm2 项目

   ```
   pm2 list
   ```

5. linux 查看端口命令

   ```
   netstat -ntlp
   ```