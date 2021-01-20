# myNav

简单的个人网址导航

本项目设计用作私人 DIY 网址导航用途，由 6 个页面组成，分别为首页、导航页、资源页、注册页、登录页、简介页，logo 为自制 logo

项目的页脚导航、汉堡菜单隐藏导航、页脚、导航页内容等均由 fixed-element.js 文件使用 js 写入

### 页面介绍

- 总体框架：由背部导航+底部导航组成，使用左上角汉堡菜单可打开背部导航。背部导航、导航内容由 fixed-element 文件写入，固定连接

![1](https://github.com/LemoFire/myNav/raw/main/doc/1.png)

- 首页：首页由动画构成，进度条加载完毕->隐藏进度条->显示进度条->旋转 720 度->收起进度条->打开全屏信息->收起全屏信息->自动跳转至导航页

![2](https://github.com/LemoFire/myNav/raw/main/doc/2.png)

- 导航页：导航页由首页动画引入，进行 logo 动画的同时，再淡入导航内容，其中导航的 3 行项目由 mynav.js 写入，只要修改 mynav.js 中的 navinfo 变量中的键值对，就可以轻松修改导航的项目

![3](https://github.com/LemoFire/myNav/raw/main/doc/3.png)

```
var navinfo = {
    'Google': 'https://www.google.com',
    'GitHub': 'https://github.com',
    'XDA Forum': 'https://forum.xda-developers.com/',
    'RaspberryPi Forum': 'https://www.raspberrypi.org/forums/',
    'NameBeta': 'https://namebeta.com/',
    'Blog Console': 'https://inotes.one/wp-admin',
    'VPS Console': 'https://inotes.one:8989/login',
    'SISE MIS': 'http://class.sise.com.cn:7001/sise/login.jsp',
    'Alibaba Console': 'https://home.console.aliyun.com/',
};
```

- 注册、登录页面实现前段自动验证，由 validation.js 控制，其中 Regular 变量储存着不同 id 的输入框验证内容的正则表达式，只要修改或增加其键值对，即可轻松修改或添加新的验证项目

![4](https://github.com/LemoFire/myNav/raw/main/doc/4.png)

![5](https://github.com/LemoFire/myNav/raw/main/doc/5.png)

```
var Regular = {
    InputEmail1REG: /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/,
    InputPassword1REG: /^(?![0-9]+$)(?![a-zA-Z]+$)(?![0-9a-z]+$)(?![0-9A-Z]+$).{8,16}$/,
    InputPassword2REG: /^(?![0-9]+$)(?![a-zA-Z]+$)(?![0-9a-z]+$)(?![0-9A-Z]+$).{8,16}$/,
    InputPhoneREG: /^1[34578]\d{9}$/,
};
```

- 资源页：方便下载自己常用的资源，由左右两部分和页头图片轮播组成。鼠标移动至左侧不同项目，右侧会自动转换成相对应的内容，

![6](https://github.com/LemoFire/myNav/raw/main/doc/6.png)

![7](https://github.com/LemoFire/myNav/raw/main/doc/7.png)

### Demo

[https://proj.ito.fun/iToNav/](https://proj.ito.fun/iToNav/)
