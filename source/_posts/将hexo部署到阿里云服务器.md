---
title: 将hexo部署到阿里云服务器
date: 2022-02-22 19:13:14
tags: [hexo]
categories: 
- hexo
sticky: 98
---
### 安装git与本地建立连接
> 首先开启服务器80端口
1. 安装git
    `yum install git`
2. 创建git用户：
    `adduser git`
3. 添加git账户权限：
    `chmod 740 /etc/sudoers`
4. 然后使用 vim 编辑器打开文件，如果你不会使用 vim ，移步 [Vim基础使用](https://blog.csdn.net/weixin_43941364/article/details/104561592)
   `vim /etc/sudoers`
5. 找到以下位置添加：
    `git    ALL=(ALL)     ALL`
    ![1](http://img.zesion.top/picture/202203112218518.png)
6. 修改权限
    `chmod 400 /etc/sudoers`
7. 设置 git 账户密码
   `sudo passwd git`
8. 切换至 git 用户，创建 ~/.ssh 文件夹和 ~/.ssh/authchmod -R 777 ./www orized_keys 文件，并赋予相应的权限
    `su git`
    `mkdir  ~/.ssh`
    `vim  ~/.ssh/authorized_keys`
9. 将我们在win系统中生成的id_rsa.pub文件中的公钥复制到authorized_keys中。
    ![2](http://img.zesion.top/picture/202203112218605.png)
10.  接着，输入一下命令，赋予权限
    `chmod 600 /home/git/.ssh/authorized_keys`
    `chmod 700 /home/git/.ssh`
11. 打开 cmd ，输入：“ssh -v git@SERVER” 其中SERVER填写自己的云主机ip看到这句话表明成功：
    ![3](http://img.zesion.top/picture/202203112218151.png)
    到此为止就完成了服务器与主机的连接了。
### 配置git钩子，用于自动部署
1. 返回服务端命令行切换到 root 账户
   `sudo su`
2. 在 home 目录下创建 hexoGit 作为 Git 仓库目录并且赋予权限
    `mkdir /home/hexoGit`
    `chown -R git:git /home/hexoGit`
    `chmod -R 755 /home/hexoGit`
3. 接下来创建 hexo 目录作为网站根目录，并赋予权限
    `mkdir /home/hexo`
    `chown -R git:git /home/hexo`
    `chmod -R 755 /home/hexo`
4. 初始化 git 仓库：
	`cd /home/hexoGit`
    `git init --bare hexo.git`
5. 在 /var/repo/hexo.git 下，有一个自动生成的 hooks 文件夹。我们需要在里边新建一个新的钩子文件 post-receive。
	`vim /home/hexoGit/hexo.git/hooks/post-receive`
6. 在该文件里面输入以下脚本然后保存退出：
	```
    #!/bin/sh
    git --work-tree=/var/hexo --git-dir=/var/repo/hexo.git checkout -f
   ```
    >这其实是一个脚本文件，每当我们推送的时候就会触发这个脚本文件的执行。这样一旦本地仓库变更提交就会触发 Git 钩子，驱动自动部署。
7. 下面修改权限：
	`chown -R git:git /home/hexoGit/hexo.git/hooks/post-receive`
    `chmod +x /home/hexoGit/hexo.git/hooks/post-receive`
### 安装并配置nginx
1. 安装nginx
    `yum install -y nginx`
    
    > nginx默认配置路径/etc/nginx/
2. 启动服务器：
	`systemctl start nginx`
    `systemctl enable nginx`
3. 打开 /etc/nginx/nginx.conf 目录
	`vim /etc/nginx/nginx.conf`
4. 修改nginx里server配置项
   ![4](http://img.zesion.top/picture/202203112218912.png)
5. 修改本地config文件
   ![5](http://img.zesion.top/picture/202203112218381.png)
### 最后本地编译上传就完成了
1. 清除缓存文件：
	`hexo clean`
2. 编译
   `hexo g`
3. 上传
    `hexo d`
4. 如果此处出现权限问题请在服务器执行以下命令
	`chown -R git:git /home/hexoGit/`
    `chown -R git:git /home/hexo`
5. 打开服务器重启nginx服务
    `nginx -s reload`
    
    >此时home/hexo文件夹下应该有被推送上来的博客文件(如果没有文件就是失败请检查nginx.conf文件和git钩子脚本文件)





