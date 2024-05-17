---
title: vue_object.definProperty底层原理
date: 2021-12-19 23:11:10
tags: [vue]
categories:
 - Vue框架
sticky: 100
---
#### 语法为：Object.defineProperty(obj,prop,descriptor)

#### 参数：
> obj:要定义属性的对象
> prop:要定义或修改的属性的名称
> descriptor:配置项
#### 案例1
~~~
<script>
    var number = 25
    var person={
        name:'张三',
        sex:'男'
    }
    //给age赋值18并且添加到person对象中
    Object.defineProperty(person,'age',{
        value:'18',
    })
</script>
~~~
> 此时 age 被添加到person对象中，**但是age是不参与person的枚举（遍历）、修改和删除的**
> 如需age可以被枚举修改删除需要添加以下属性
~~~
 Object.defineProperty(person,'age',{
    value:'18',
    enumerable:true,    //控制属性是否可以被枚举(遍历),默认值 false
    writable:true,      //控制属性是否可以被修改,默认值false
    configurable:true,  //控制属性是否可以被删除,默认值false
})
~~~
> ![](http://img.zesion.top/picture/202203112220146.png)
#### 高级配置项 get,set 
~~~
 var obj = {
        num : 18
    }
        var obj2 = {
        age : 20
    }
    Object.defineProperty(obj2,'num',{
    // 当访问 obj2.num 时直接返回 obj.num
        get(){
            return obj.num
        },
    // 修改 obj2.num 时 将值赋值给 obj.num
        set(value){
            obj.num = value
        }
    })
~~~
> <p style="text-indent:2em">get: 当有人读取num时get函数就会被调用且返回一个return值</p>
> <p style="text-indent:2em">set: 当有人修改num属性时set函数就会被调用且会收到修改的具体值</p>

![](http://img.zesion.top/picture/202203112220200.png)
#### object.definProperty详细用法
> [MSD](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
> [B站](https://www.bilibili.com/video/BV1Zy4y1K7SH?p=11)