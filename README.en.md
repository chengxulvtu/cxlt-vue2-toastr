# cxlt-vue2-toastr
**cxlt-vue2-toastr** is a non-blocking notifications for Vue2 ，Based on [toastr](https://github.com/CodeSeven/toastr) stylings and design together with [animate.css](https://github.com/daneden/animate.css) animation effects

**Demo:** [https://chengxulvtu.github.io/toastr/index.html](https://chengxulvtu.github.io/toastr/index.html)

## Setup

Using npm
```bash
npm install cxlt-vue2-toastr --save
```
Or using yarn
```bash
yarn add cxlt-vue2-toastr
```

## Usage
### Import Component
```javascript
import CxltToastr from 'cxlt-vue2-toastr'

Vue.use(CxltToastr)
```
Optional Global configuration options
```javascript
var toastrConfigs = {
    position: 'top right',
    showDuration: 2000
}
Vue.use(CxltToastr, toastrConfigs)
```

You can use All options mentioned in below [options](#options) table except <b>color</b> option, instead, you should use below additional four color options in global configuration.

| Option           | Type            | Description                        |
| ------------- |:--------------: | --------------------------:|
| successColor         | String          | background color for success notificatoin       |
| infoColor            | String          | background color for info notificatoin       |
| warningColor         | String          | background color for warning notificatoin       |
| errorColor           | String          | background color for error notificatoin       |

Please note: if you pass color option in your notification instance, it will override above global color options.

### Import styling files
```javascript
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
```
Or use it in .vue with style tag
```
<style src="cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css"></style>
```
### Call Notification Instance
```javascript
this.$toast.success({
    title:'',
    message:''
})
```

cxlt-vue2-toastr support below functions

| functions        |
| ------------- |
| success       |
| info          |
| warn          |
| error         |
| removeAll     |


You need to pass an option object which can have below values, used for controlling title, content, position etc.
### options

| Option           | Type            | Description                        |
| ------------- |:--------------: | --------------------------:|
| title         | String          | Title for notification                   |
| message       | String          | Content for notification                 |
| closeButton   | Boolean         | Need close button or not, default as <b>false</b>    |
| progressBar   | Boolean         | default as false    |
| closeOnHover  | Boolean         | still close when hover,default as false    |
| [type](#type)          | String          | Type for notification，default as <b>success</b>       |
| [position](#position)      | String          | Position for notification，default as <b>top right</b>  |
| [showMethod](#showmethod)    | String          | Animation class name for shown，default as <b>fadeIn</b>     |
| [hideMethod](#hidemethod)    | String          | Animation class name for hide，default as <b>fadeOut</b>    |
| showDuration  | Number          | Duration of show animation，unit as <b>ms</b>，default as <b>1000</b>      |
| hideDuration  | Number          | Duration of hide animation，unit as <b>ms</b>，default as <b>1000</b>     |
| delay         | Number          | Delay of animation，unit as <b>ms</b>，default as <b>0</b>, means no delay |
| timeOut       | Number          | Duration of notification displaying，Unit as <b>ms</b>，default as <b>1500</b> |
| color         | String          | background color of notification                       |
| onClicked     | Function        | callback when click  |
| onMouseOver   | Function        | callback when mouse over  |
| onMouseOut    | Function        | callback when mouse out  |

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
[https://chengxulvtu.github.io/toastr/index.html](https://chengxulvtu.github.io/toastr/index.html)

![Demo截图](http://cxlt.oss-cn-shanghai.aliyuncs.com/cxlt-vue2-toastr%20demo.png)

## Run this project
fork the repository，then follow below commands
```bash
git clone xxx
cd cxlt-vue2-toastr
yarn
npm run dev
```

## Welcome to follow my wechat
Please note, you will need wechat app to follow. for oversea users, you may just follow my github. 

<img src="http://cxlt.oss-cn-shanghai.aliyuncs.com/qrcode_for_chengxulvtu.jpg" title="程序旅途公众号二维码" width="150"/>
