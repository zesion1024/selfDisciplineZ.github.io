---
title: Vue key
date: 2021-12-18 22:25:18
tags: [vue]
index_img: /img/vue-key/vue-key.jpg
banner_img: /img/vue-key/vue-key.jpg
categories:
 - Vue框架
---
#### Key定义:
    相同父元素里面子元素的独特标识，重复的key会造成渲染错误 
#### key的使用
    当传入两个形参时第一个输出的时数组里面的对象 而index 输出的是数组对象的索引值.
#### 当：key的值为 index时
![](/img/vue-key/1.png)
#### 结果
![](/img/vue-key/2.png)
#### 当：key的值为 id时
![](/img/vue-key/3.png)
#### 结果
![](/img/vue-key/4.png)
#### 小案例 (key=index);
    当点击按钮在原有数组后添加新对象
> (1)给每个 li 元素后添加一个 input 输入框并随便填入值
>> ![](/img/vue-key/5.png)
> (2)点击添加时会发现 value 内容错乱了
>> ![](/img/vue-key/6.png)
#### (key为index）原理图：
> ![](/img/vue-key/7.png)
#### (index作为key时)原理:
> <p style='text-indent:2em'>首先 vue 会根据用户创建的 vue 实例生成虚拟 DOM 进而转为用户可以看到的浏览器上显示的真实DOM</p>
> <p style='text-indent:2em'>当点击添加按钮在原有数据之前添加新数据时 vue 会生成一个新的虚拟DOM</p>
> <p style='text-indent:2em'>新的虚拟DOM与初始虚拟DOM进行对比，发现第一个li元素的内容发生变化，于是vue会将新的虚拟DOM的值转为真实的新的DOM。继续往下对比input里面的值会发现新DOM里面input里面没有值所以会直接将原有DOM里面input的值拿过来从而造成了input里面value的值发生错乱</p>
> <p style='text-indent:2em'>如果没有手动为其添加key时vue会自动为其添加key值，当初始虚拟DOM与新虚拟DOM进行对比时新添加的元素会变为001从而导致两边虚拟DOM数据不一致而倒置BUG。当需要在原有元素<strong>之前</strong>添加新元素时并不建议使用index,在其之后添加并不会出现此BUG</p>
#### (key为id)原理图：
>![](/img/vue-key/8.png)
#### (id作为key时)原理:
> <p style='text-indent:2em'>新DOM与初始DOM对比vue会发现初始DOM没有key为004的元素与之匹配所以会直接将之生成为新的真实DOM</p>
> <p style='text-indent:2em'>继而往下发现有与之匹配的001，而自身input里面并没有内容所以会直接将初始真实DOM拿过来使用</p>
#### 总结：
> 1.虚拟DOM中key的作用；
>> (1)Key是虚拟DOM对象的标识，当状态中的数据发生变化时.vue会根据【新数据】生成【新的虚拟DOM】，随后vue进行新旧DOM的差异比较，规则如下
> -----
> 2.对比规则
>> (1)旧虚拟DOM中找到了与新虚拟DOM相同的key;
>>> ①若虚拟DOM中内容没变，直接使用之前的真实DOM
>>> ②若虚拟DOM中内容改变。则生成新的真实DOM，随后替换页面之前的真实DOM
>
>> (2)旧虚拟DOM中未找到与新虚拟DOM相同的key；
>>> ①创建新的真实DOM，随后渲染到页面中
> ---
> 3.用index作为key可能会引发的问题；
>> (1)若对数据进行：逆序添加，逆序删除等破坏顺序操作
>>> 会产生没有必要的真实DOM更新==>界面没有问题，但效率低。
>     
>> (2)如果结构中还包含输入类（例如：index）的DOM
>>> 会产生错误DOM更新==>界面有问题
> ---
> 4.开发中如何选择key?
>> 1.最好使用每条数据的唯一标识作为key,如id、手机号、身份证号、学号等唯一值    
>> 2.如果不存在对数据的逆序添加，逆序删除等破坏顺序的操作，仅用于渲染列表用于展示使用index作为key是没有问题的
> ---