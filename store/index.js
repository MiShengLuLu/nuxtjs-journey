const cookieparser = process.server ? require('cookieparser') : undefined

// 在服务端渲染期间运行的都是同一个实例
// 为了防止数据冲突，务必要将 state 定义一个函数，返回数据对象。目的是创建实例的时候，state 能动态生成，防止数据冲突和污染
export const state = () => {
  return {
    // 当前用户登陆状态
    user: null
  }
}

export const mutations = {
  setUser(state, data) {
    state.user = data
  }
}

export const actions = {
  // nuxtServerInit 是特殊的 action 方法，它会在服务端渲染期间自动调用
  // 作用：初始化容器数据，传递数据给客户端使用
  nuxtServerInit({ commit }, { req }) {
    let user = null

    // 如果请求头中有 cookie
    if (req.headers.cookie) {
      // 使用 cookieparser 将 cookie 字符串转为 JavaScript 对象
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (error) {
        // No valid cookie found
      }
    }

    // 提交 mutation 修改 state 数据
    commit('setUser', user)
  }
}