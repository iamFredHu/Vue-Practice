// index.js 用于创建 Vuex 中最为核心的 store

// 引入 Vuex
import Vuex from 'vuex'
import Vue from "vue";

Vue.use(Vuex)

// 准备 actions 用于响应组件中的动作
const actions = {
    // addSum(context, value) {
    //     context.commit('ADDSUM', value)
    // },
    // minusSum(context, value) {
    //     context.commit('MINUSSUM', value)
    // },
    addSumOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('ADDSUM', value)
        }
    },
    addSumWait(context, value) {
        setTimeout(() => {
            context.commit('ADDSUM', value)
        }, 500)
    }
}
// 准备 mutations 用于操作数据
const mutations = {
    ADDSUM(state, value) {
        state.sum += value
    },
    MINUSSUM(state, value) {
        state.sum -= value
    },
}

// 准备getters 用于将state中的数据进行加工
const getters = {
    tenSum(state) {
        return state.sum * 10
    }
}

// 数据（状态）的存储
const state = {
    sum: 0,
    school: '哈工深',
    subject:'计算机'
}

// 创建 store & 导出 store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

