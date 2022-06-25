## 配置项 proops
    功能: 让组件接受外部传过来的数据
        (1).传递数据：
            <student name="xxx" />
        (2).接受数据：
            一：简单声明接受
                props:['name','sex','age'],
            二：接受的同时对数据类型进行限制
                props:{
                    name:'string',
                    age:'number',
                    sex:'string'
                }
            三：接受的同时对数据类型进行限制+默认值的指定+必要值的限定
                props:{
                    name:{
                        type:String,    // name的类型是字符串
                        required:true   // name的值是必须要传入的
                    },
                    age:{
                        type:Number,
                        default:100     // 可传可不传，如果没有传入则默认值为xxx
                    },
                    sex:{
                        type:String,
                        required:true
                    }
                }
><b>备注：props是只读的，vue底层会检测你对props的修改，如果进行了修改，就会发出警告，若需修改，那么请复制props的内容到data中一份，然后去修改data中的数据</b>