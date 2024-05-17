---
title: vue_全局事件总线
date: 2022-04-28 20:55:54
tags: [Vue]
categories: 
- Vue
---

### Vue_全局事件总线

![](http://img.zesion.top/picture/202204282218863.png)

(1) 使组件间互相通信首先需要一个所有组件能够访问读取到的地方 (vue.VueComponent )。所有组件和vue实例最终都会指向 vue.VueComponent 于是我们可以在 vue 原型链上添加一个所有组件都能访问到的总线 '$bus'

> 使用beforeCreate生命周期钩子函数在 vue 实例初始化时候在其原型链上添加一个 $bus 以供所有组件能够访问到

![](http://img.zesion.top/picture/202204282203957.png)

(2) 当所有组件都能够访问到 $bus 时就可以往上添加事件

> 在A组件上往vue原型链上的 $bus 添加一个自定义事件

![](http://img.zesion.top/picture/202204282216604.png)

(3) 触发事件

![](http://img.zesion.top/picture/202204282218460.png)