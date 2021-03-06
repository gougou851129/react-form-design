/*
 * @Author: zengzijian
 * @Date: 2019-08-26 14:17:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-05 10:05:28
 * @Description: 
 */
import { observable, toJS } from 'mobx'

class store {

    @observable config = {
        data: {
            layout: 'inline',
            labelAlign: 'left',
            size: 'default',
        },
        get get() {
            return toJS(this.data)
        },
        set(value) {
            this.data = value
        },
        update(key, value) {
            this.data[key] = value
        }
    }

    @observable content = {
        data: [],
        get get() {
            return toJS(this.data)
        },
        set(value) {
            this.data = value
        }
    }

    @observable activeId = {
        value: '',
        get get() {
            return toJS(this.value)
        },
        set(value) {
            this.value = value
        }
    }

    @observable mode = {
        value: 'phone',
        get get() {
            return toJS(this.value)
        },
        set(value) {
            this.value = value
        }
    }

}
export default store