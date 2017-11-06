# vue2-toastr ([English Doc](/README.en.md))


**vue2-toastr**是弹出提示的Vue2组件，基于[toastr](https://github.com/CodeSeven/toastr)的样式和[animate.css](https://github.com/daneden/animate.css)的动画效果。

**Demo:** [https://brahmachen.github.io/vue2-toastr/example/dist/index.html](https://brahmachen.github.io/vue2-toastr/example/dist/index.html)


## 安装

使用npm
```bash
npm install vue2-toastr --save
```
<!-- 或者yarn
```bash
yarn add cxlt-vue2-toastr
``` -->

## 用法
### 注册组件
```javascript
import Toastr from 'vue2-toastr'

Vue.use(Toastr)
```
还可以传入一个全局配置对象
```javascript
var toastrConfigs = {
    position: 'top right',
    showDuration: 2000
}
Vue.use(Toastr, toastrConfigs)
```
下文表格中列举的属性除了color都可在全局配置中使用

另外还可以配置下面四个属性

| 属性           | 类型            | 描述                        |
| ------------- |:--------------: | --------------------------:|
| successColor         | String          | success的背景色       |
| infoColor            | String          | info的背景色       |
| warningColor         | String          | warning的背景色       |
| errorColor           | String          | error的背景色       |

需要注意的是，实例的color属性会覆盖全局配置中的color。

### 引入样式
```javascript
import 'vue2-toastr/dist/css/vue2-toastr.css'
```
或在.vue文件中使用style
```javascript
<style src="vue2-toastr/dist/css/vue2-toastr.css"></style>
```
### 使用组件
```javascript
this.$toast.success({
    title:'',
    message:''
})
```

vue2-toastr支持以下方法

| 方法名         |
| ------------- |
| success       |
| info          |
| warn          |
| error         |
| removeAll     |


方法需要传递一个对象，用于控制toastr显示的标题、内容、位置等，下面的表格列举了对象的属性

| 属性           | 类型            | 描述                        |
| ------------- |:--------------: | --------------------------:|
| title         | String          | 通知的标题                   |
| message       | String          | 通知的内容                   |
| closeButton   | Boolean         | 是否显示关闭按钮，默认false    |
| progressBar   | Boolean         | 默认false    |
| closeOnHover  | Boolean         | 鼠标经过时仍然关闭，默认false    |
| type          | String          | 通知的类型，默认success       |
| position      | String          | 通知显示的位置，默认top right  |
| showMethod    | String          | 显示动画的名称，默认fadeIn     |
| hideMethod    | String          | 隐藏动画的名称，默认fadeOut    |
| showDuration  | Number          | 显示动画持续的时间，单位ms，默认1000      |
| hideDuration  | Number          | 隐藏动画持续的时间，单位ms，默认1000     |
| delay         | Number          | 显示动画开始之前的延迟，单位ms，默认0，没有延迟 |
| timeOut       | Number          | toast显示的时间，单位ms，默认1500 |
| color         | String          | toast的背景色                       |
| onClicked     | Function        | 鼠标点击后的回调  |
| onMouseOver   | Function        | 鼠标移入时的回调  |
| onMouseOut    | Function        | 鼠标移出时的回调  |

### type

* `success`
* `info`
* `warning`
* `error`

### position

* `top right`
* `bottom right`
* `bottom left`
* `top left`
* `top center`
* `bottom center`
* `top full width`
* `bottom full width`

### showMethod
  * `bounce`
  * `flash`
  * `pulse`
  * `rubberBand`
  * `shake`
  * `headShake`
  * `swing`
  * `tada`
  * `wobble`
  * `jello`
  * `bounceIn`
  * `bounceInDown`
  * `bounceInLeft`
  * `bounceInRight`
  * `bounceInUp`
  * `fadeIn`
  * `fadeInDown`
  * `fadeInDownBig`
  * `fadeInLeft`
  * `fadeInLeftBig`
  * `fadeInRight`
  * `fadeInRightBig`
  * `fadeInUp`
  * `fadeInUpBig`
  * `flipInX`
  * `flipInY`
  * `lightSpeedIn`
  * `lightSpeedOut`
  * `rotateIn`
  * `rotateInDownLeft`
  * `rotateInDownRight`
  * `rotateInUpLeft`
  * `rotateInUpRight`
  * `hinge`
  * `rollIn`
  * `zoomIn`
  * `zoomInDown`
  * `zoomInLeft`
  * `zoomInRight`
  * `zoomInUp`
  * `slideInDown`
  * `slideInLeft`
  * `slideInRight`
  * `slideInUp`

### hideMethod

  * `bounce`
  * `flash`
  * `pulse`
  * `rubberBand`
  * `shake`
  * `headShake`
  * `swing`
  * `tada`
  * `wobble`
  * `jello`
  * `bounceOut`
  * `bounceOutDown`
  * `bounceOutLeft`
  * `bounceOutRight`
  * `bounceOutUp`
  * `fadeOut`
  * `fadeOutDown`
  * `fadeOutDownBig`
  * `fadeOutLeft`
  * `fadeOutLeftBig`
  * `fadeOutRight`
  * `fadeOutRightBig`
  * `fadeOutUp`
  * `fadeOutUpBig`
  * `flipOutX`
  * `flipOutY`
  * `rotateOut`
  * `rotateOutDownLeft`
  * `rotateOutDownRight`
  * `rotateOutUpLeft`
  * `rotateOutUpRight`
  * `rollOut`
  * `zoomOut`
  * `zoomOutDown`
  * `zoomOutLeft`
  * `zoomOutRight`
  * `zoomOutUp`
  * `slideOutDown`
  * `slideOutLeft`
  * `slideOutRight`
  * `slideOutUp`

## Demo
[https://brahmachen.github.io/vue2-toastr/example/dist/index.html](https://brahmachen.github.io/vue2-toastr/example/dist/index.html)

## 运行程序
先fork项目，然后执行下面的命令
```bash
git clone xxx
cd vue2-toastr
yarn
npm run dev
```