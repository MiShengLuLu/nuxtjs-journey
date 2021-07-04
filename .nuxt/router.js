import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5d3bdfa0 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _384c7ed5 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _5d08b79a = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _3a4a33f3 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _bf8749ce = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _516d05e3 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _21147740 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _5d3bdfa0,
    children: [{
      path: "",
      component: _384c7ed5,
      name: "home"
    }, {
      path: "/login",
      component: _5d08b79a,
      name: "login"
    }, {
      path: "/register",
      component: _5d08b79a,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _3a4a33f3,
      name: "profile"
    }, {
      path: "/settings",
      component: _bf8749ce,
      name: "settings"
    }, {
      path: "/editor",
      component: _516d05e3,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _21147740,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
