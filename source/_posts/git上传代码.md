---
title: git上传代码
date: 2022-02-25 21:41:52
tags: [git]
categories: 
- git
---
### 配置全局账户信息
1. git config --global user.name "cjzywyz"
2. git config --global user.email "710113424@qq.com"
3. 生成ssh公钥：ssh-keygen -t rsa -C "你的邮箱地址"

### 提交文件
1. 初始化：git init
2. 将本地库与远程库关联：git remote add origin 远程库地址
3. 暂存文件：git add .
4. 提交文件到本地库：git commit -m "备注"
5. 推送到远程库：git push origin 本地分支：远程分支

### 分支
1. 主分支：master;
2. 创建分支：git branch ***
3. 切换分支：git checkout ***
4. 查看分支：git branch

### git 详细命令查看
1. [https://github.com/xjh22222228/git-manual](https://github.com/xjh22222228/git-manual)