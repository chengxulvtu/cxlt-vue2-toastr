import Toastr from './Toastr'
import '@/assets/toastr.css'
import 'animate.css/animate.css'

const CxltToastr = {
    install: function (Vue, options) {
        if (!options) {
            options = {}
        }
        let showedToastrs = []

        function showToast(obj, type) {
            const ToastrComponent = Vue.extend(Toastr)
            var propsData = Object.assign(obj, options, {
                type: type
            })
            let component = new ToastrComponent({
                el: document.createElement('div'),
                propsData
            })

            showedToastrs.push(component)

            return component
        }

        Vue.prototype.$toast = {
            success(obj) {
                return showToast(obj, 'success')
            },
            info(obj) {
                return showToast(obj, 'info')
            },
            warn(obj) {
                return showToast(obj, 'warning')
            },
            error(obj) {
                return showToast(obj, 'error')
            },
            removeAll() {
                showedToastrs.forEach(c => {
                    c.hideToastr()
                })
                showedToastrs = []
            }
        }
    }
}

export default CxltToastr
