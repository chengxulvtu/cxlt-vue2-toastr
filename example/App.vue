<template>
    <div class="container">
        <h1 class="title">cxlt-vue2-toastr演示</h1>
        <hr>
        <div class="columns">
            <div class="column">
                <div class="field">
                    <label class="label">Title</label>
                    <p class="control">
                        <input class="input" type="text" placeholder="title" v-model="toastr.title">
                    </p>
                </div>
                <div class="field">
                    <label class="label">Message</label>
                    <p class="control">
                        <textarea class="textarea" v-model="toastr.message" placeholder="message"></textarea>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <label class="checkbox">
                            <input type="checkbox" v-model="toastr.closeButton"> Close Button
                        </label>
                    </p>
                    <p class="control">
                        <label class="checkbox">
                            <input type="checkbox" v-model="toastr.progressBar"> Progress Bar
                        </label>
                    </p>
                </div>
            </div>
            <div class="column">
                <div class="field">
                    <label class="label">Toastr Type</label>
                    <p class="control">
                        <label class="radio">
                            <input type="radio" name="type" v-model="type" value="success"> Success
                        </label>
                        <label class="radio">
                            <input type="radio" name="type" v-model="type" value="info"> Info
                        </label>
                        <label class="radio">
                            <input type="radio" name="type" v-model="type" value="warning"> Warning
                        </label>
                        <label class="radio">
                            <input type="radio" name="type" v-model="type" value="error"> Error
                        </label>
                    </p>
                </div>
                <div class="field">
                    <label class="label">Position</label>
                    <p class="control">
                        <label class="radio">
                            <input type="radio" name="position" v-model="toastr.position" value="top right"> Top Right
                        </label>
                        <label class="radio">
                            <input type="radio" name="position" v-model="toastr.position" value="bottom right"> Bottom Right
                        </label>
                        <label class="radio">
                            <input type="radio" name="position" v-model="toastr.position" value="bottom left"> Bottom Left
                        </label>
                        <label class="radio">
                            <input type="radio" name="position" v-model="toastr.position" value="top left"> Top Left
                        </label>
                        <label class="radio">
                            <input type="radio" name="position" v-model="toastr.position" value="top center"> Top Center
                        </label>
                        <label class="radio">
                            <input type="radio" name="position" v-model="toastr.position" value="bottom center"> Bottom Center
                        </label>
                        <label class="radio">
                            <input type="radio" name="position" v-model="toastr.position" value="top full width"> Top Full Width
                        </label>
                        <label class="radio">
                            <input type="radio" name="position" v-model="toastr.position" value="bottom full width"> Bottom Full Width
                        </label>
                    </p>
                </div>
            </div>
            <div class="column">
                <div class="field">
                    <label class="label">Show Method</label>
                    <p class="control">
                        <span class="select">
                            <select v-model="toastr.showMethod">
                                <optgroup label="Attention Seekers">
                                    <option>bounce</option>
                                    <option>flash</option>
                                    <option>rubberBand</option>
                                    <option>shake</option>
                                    <option>headShake</option>
                                    <option>swing</option>
                                    <option>tada</option>
                                    <option>wobble</option>
                                    <option>jello</option>
                                </optgroup>
                                <optgroup label="Bouncing Entrances">
                                    <option>bounceIn</option>
                                    <option>bounceInDown</option>
                                    <option>bounceInLeft</option>
                                    <option>bounceInRight</option>
                                    <option>bounceInUp</option>
                                </optgroup>
                                <optgroup label="Fading Entrances">
                                    <option>fadeIn</option>
                                    <option>fadeInDown</option>
                                    <option>fadeInDownBig</option>
                                    <option>fadeInLeft</option>
                                    <option>fadeInLeftBig</option>
                                    <option>fadeInRight</option>
                                    <option>fadeInRightBig</option>
                                    <option>fadeInUp</option>
                                    <option>fadeInUpBig</option>
                                </optgroup>
                                <optgroup label="Flippers">
                                    <option>flip</option>
                                    <option>flipInX</option>
                                    <option>flipInY</option>
                                </optgroup>
                                <optgroup label="Lightspeed">
                                    <option>lightSpeedIn</option>
                                </optgroup>
                                <optgroup label="Rotating Entrances">
                                    <option>rotateIn</option>
                                    <option>rotateInDownLeft</option>
                                    <option>rotateInDownRight</option>
                                    <option>rotateInUpLeft</option>
                                    <option>rotateInUpRight</option>
                                </optgroup>
                                <optgroup label="Sliding Entrances">
                                    <option>slideInDown</option>
                                    <option>slideInLeft</option>
                                    <option>slideInRight</option>
                                    <option>slideInUp</option>
                                </optgroup>
                                <optgroup label="Zoom Entrances">
                                    <option>zoomIn</option>
                                    <option>zoomInDown</option>
                                    <option>zoomInLeft</option>
                                    <option>zoomInRight</option>
                                    <option>zoomInUp</option>
                                </optgroup>
                                <optgroup label="Spectials">
                                    <option>hinge</option>
                                    <option>rollIn</option>
                                </optgroup>
                            </select>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <label class="label">Hide Method</label>
                    <p class="control">
                        <span class="select">
                            <select v-model="toastr.hideMethod">
                                <optgroup label="Attention Seekers">
                                    <option>bounce</option>
                                    <option>flash</option>
                                    <option>rubberBand</option>
                                    <option>shake</option>
                                    <option>headShake</option>
                                    <option>swing</option>
                                    <option>tada</option>
                                    <option>wobble</option>
                                    <option>jello</option>
                                </optgroup>
                                <optgroup label="Bouncing Exists">
                                    <option>bounceOut</option>
                                    <option>bounceOutDown</option>
                                    <option>bounceOutLeft</option>
                                    <option>bounceOutRight</option>
                                    <option>bounceOutUp</option>
                                </optgroup>
                                <optgroup label="Fading Exists">
                                    <option>fadeOut</option>
                                    <option>fadeOutDown</option>
                                    <option>fadeOutDownBig</option>
                                    <option>fadeOutLeft</option>
                                    <option>fadeOutLeftBig</option>
                                    <option>fadeOutRight</option>
                                    <option>fadeOutRightBig</option>
                                    <option>fadeOutUp</option>
                                    <option>fadeOutUpBig</option>
                                </optgroup>
                                <optgroup label="Flippers">
                                    <option>flip</option>
                                    <option>flipOutX</option>
                                    <option>flipOutY</option>
                                </optgroup>
                                <optgroup label="Lightspeed">
                                    <option>lightSpeedOut</option>
                                </optgroup>
                                <optgroup label="Rotating Exists">
                                    <option>rotateOut</option>
                                    <option>rotateOutDownLeft</option>
                                    <option>rotateOutDownRight</option>
                                    <option>rotateOutUpLeft</option>
                                    <option>rotateOutUpRight</option>
                                </optgroup>
                                <optgroup label="Sliding Exists">
                                    <option>slideOutDown</option>
                                    <option>slideOutLeft</option>
                                    <option>slideOutRight</option>
                                    <option>slideOutUp</option>
                                </optgroup>
                                <optgroup label="Zoom Exists">
                                    <option>zoomOut</option>
                                    <option>zoomOutDown</option>
                                    <option>zoomOutLeft</option>
                                    <option>zoomOutRight</option>
                                    <option>zoomOutUp</option>
                                </optgroup>
                                <optgroup label="Specials">
                                    <option>hinge</option>
                                    <option>rollOut</option>
                                </optgroup>
                            </select>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <label class="label">Color</label>
                    <p class="control">
                        <sketch-picker v-model="colors"></sketch-picker>
                    </p>
                </div>
            </div>
            <div class="column">
                <div class="field">
                    <label class="label">Show duration</label>
                    <p class="control">
                        <input class="input" type="text" placeholder="show duration" v-model="toastr.showDuration">
                    </p>
                </div>
                <div class="field">
                    <label class="label">Hide duration</label>
                    <p class="control">
                        <input class="input" type="text" placeholder="hide duration" v-model="toastr.hideDuration">
                    </p>
                </div>
                <div class="field">
                    <label class="label">Delay</label>
                    <p class="control">
                        <input class="input" type="text" placeholder="delay" v-model="toastr.delay">
                    </p>
                </div>
                <div class="field">
                    <label class="label">Time out</label>
                    <p class="control">
                        <input class="input" type="text" placeholder="time out" v-model="toastr.timeOut">
                    </p>
                </div>
            </div>
        </div>
        <div class="field is-grouped">
            <p class="control">
                <button class="button is-primary" @click="showToastr">Show Toastr</button>
            </p>
            <p class="control">
                <button class="button is-warning" @click="hideToastr">Hide Toastr</button>
            </p>
        </div>
        <hr>
        <div class="qrcode">
            <p>欢迎关注公众号</p>
            <img src="../qrcode_for_chengxulvtu.jpg" />
        </div>
    </div>
</template>

<script>
import { Sketch } from 'vue-color'

export default {
    name: 'app',
    data() {
        return {
            type: 'success',
            toastr: {
                title: 'Toastr Notification',
                message: 'Gnome & Growl type non-blocking notifications',
                closeButton: true,
                progressBar: false,
                position: 'top right',
                showMethod: 'fadeIn',
                hideMethod: 'fadeOut',
                showDuration: 1000,
                hideDuration: 1000,
                delay: 0,
                timeOut: '1500',
                url: 'http://ya.ru/',
                urlBlank: true
            },
            colors: {
                hex: '#51a351',
                a: 1
            }
        }
    },
    methods: {
        showToastr() {
            this.toastr = Object.assign(this.toastr, {
                color: this.colors.hex
            })
            console.log(this.colors.hex)
            switch (this.type) {
                case 'success':
                    this.$toast.success(this.toastr)
                    break;
                case 'info':
                    this.$toast.info(this.toastr)
                    break;
                case 'warning':
                    this.$toast.warn(this.toastr)
                    break;
                case 'error':
                    this.$toast.error(this.toastr)
                    break;
                default:
                    break;
            }
        },
        hideToastr() {
            this.$toast.removeAll()
        }
    },
    watch: {
        type(newType) {
            console.log(newType)
            switch (newType) {
                case 'success':
                    this.colors = {
                        hex: '#51a351',
                        a: 1
                    }
                    break;
                case 'info':
                    this.colors = {
                        hex: '#2f96b4',
                        a: 1
                    }
                    break;
                case 'warning':
                    this.colors = {
                        hex: '#f89406',
                        a: 1
                    }
                    break;
                case 'error':
                    this.colors = {
                        hex: '#bd362f',
                        a: 1
                    }
                    break;
            }
        }
    },
    components: {
        'sketch-picker': Sketch
    }
}
</script>

<style src="bulma/css/bulma.css"></style>
<style>
h1.title {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

.qrcode {
    text-align: center;
    font-size: 14px;
}

.qrcode img {
    width: 120px;
    height: 120px;
}

label.radio {
    display: flex;
    align-items: center;
}

.radio input {
    margin-right: 5px;
}

.radio+.radio {
    margin-left: 0;
}
</style>

