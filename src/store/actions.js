/**
 * actions 模块
 */
import { reqAddress, reqCategorys, reqShops, reqUserInfo, reqLogout, reqShopInfo, reqShopRatings, reqShopGoods } from '../api'
import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_USER_INFO, RESET_USER_INFO, RECEIVE_INFO, RECEIVE_RATINGS, RECEIVE_GOODS, INCREMENT_FOOD_COUNT, DECREMENT_FOOD_COUNT } from './mutation-types'

export default {
  // 异步获取地址
  async getAddress({ commit, state }) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    commit(RECEIVE_ADDRESS, { address: result.data })
  },
  // 异步获取分类列表
  async getCategorys({ commit }) {
    const result = await reqCategorys()
    commit(RECEIVE_CATEGORYS, { categorys: result.data })
  },
  // 异步获取商家列表
  async getShops({ commit, state }) {
    const { longitude, latitude } = state
    const result = await reqShops({ longitude, latitude })
    commit(RECEIVE_SHOPS, { shops: result.data })
  },

  // 同步记录用户信息
  recordUser({ commit }, userInfo) {
    commit(RECEIVE_USER_INFO, { userInfo })
  },

  // 异步获取用户信息
  async getUserInfo({ commit }) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, { userInfo })
    }
  },

  // 异步登出
  async logout({ commit }) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }
  },

  // 异步获取商家信息
  async getShopInfo({ commit }) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, { info })
    }
  },

  // 异步获取商家评价列表
  async getShopRatings({ commit }, callback) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, { ratings })
      // 数据更新了, 通知一下组件
      callback && callback()
    }
  },

  // 异步获取商家商品列表
  async getShopGoods({ commit }, callback) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, { goods })
      // 数据更新了, 通知一下组件
      callback && callback()
    }
  },

  // 同步更新food中的count值
  updateFoodCount({ commit }, { isAdd, food }) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, { food })
    } else {
      commit(DECREMENT_FOOD_COUNT, { food })
    }
  },
}
